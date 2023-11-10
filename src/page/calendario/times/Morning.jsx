import { BsSun } from "react-icons/bs";
import {HiBarsArrowDown, HiBarsArrowUp} from 'react-icons/hi2'
import Delete from "../../../assets/Delete.svg";
import Edit from "../../../assets/Edit.svg";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
// import { handleEditClick } from "../../../component/buttonEdit";

import React, { useEffect, useState } from "react";
import { useMedicamento } from "../../../context/medicamentosContext";

function Morning() {
  const [showAllRows, setShowAllRows] = useState(false);
  const { mostrarMedicamentos, medicamentos, deleteM, updateM } =
    useMedicamento();
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);
  const [showEditMessage, setShowEditMessage] = useState(false);

  useEffect(() => {
    mostrarMedicamentos();
  }, []);

  const handleCheckboxClick = async (item) => {
    if (isCheckboxDisabled) {
      alert("El checkbox se habilitara en 30 minutos");
      return; // Evitar que se realice alguna acción si el checkbox está deshabilitado
    }
    // Obtener la hora actual
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    // Obtener la hora de frecuencia del medicamento
    const frecuencia = item.frecuencia;
    const [frecuenciaHours, frecuenciaMinutes] = frecuencia
      .split(":")
      .map(Number);

    // Calcular la nueva hora sumando la hora de frecuencia a la hora actual
    const newHour = (currentHour + frecuenciaHours) % 24;
    const newMinutes = (currentMinutes + frecuenciaMinutes) % 60;

    // Actualizar la hora en el campo 'dias' del medicamento
    const newTime = `${newHour}:${newMinutes}`;
    await updateM(item._id, { dias: newTime });

    // Deshabilitar el checkbox y mostrar el mensaje
    setIsCheckboxDisabled(true);
    setShowEditMessage(true);
    mostrarMedicamentos();
    // Habilita nuevamente el checkbox después de 30 minutos
    setTimeout(() => {
      setShowEditMessage(false);
      setIsCheckboxDisabled(false);
    }, 30 * 60 * 1000); // 30 minutos en milisegundos
  };
  // Filtrar los medicamentos que deben tomarse en el rango de horas de la mañana (por ejemplo, de 6:00 AM a 12:00 PM)
  const morningMedicamentos = medicamentos.filter((item) => {
    const [horaToma] = item.dias.split(":").map(Number);
    console.log(horaToma);
    return horaToma >= 6 && horaToma < 12; // Ajusta según el rango de horas que consideras como "morning"
  });

  return (
    <div className="flex">
      <div className="flex flex-col justify-center mt-8 items-center gap-2 bg-[#f79c9b] px-6 py-5 text-xl font-semibold">
        <p className="text-[#ae5453]">Morning</p>
        <BsSun className="text-[2.5rem] text-[#ae5453]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <thead>
            <tr className="text-xl">
              <th className="px-10">Medication</th>
              <th className="px-10">Dosage</th>
              <th className="px-10">Time</th>
              <th className="px-[61px]">Date</th>
              <th className="px-10">Comments</th>
              <th className="px-11">taken</th>
              <th className="px-10">Delete</th>
              <th className="px-10">Edit</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {morningMedicamentos.map((item, index) => (

              <React.Fragment key={item._id}>
                {(index < 2 || showAllRows) && (
                  <tr
                    className="border-2 bg-[#f9dad8] text-center"
                    key={item._id}
                  >
                    <td className="">{item.nombreMedicamento}</td>
                    <td className="px-10">{item.dosis}</td>
                    <td className="px-10">{item.frecuencia} hours</td>
                    <td className="px-[61px]">{item.dias} </td>
                    <td className="px-10">{item.comentario}</td>
                    <td className="px-11">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxClick(item)}
                      />
                    </td>
                    <th
                      className="flex justify-center h-[100px]  items-center justify-items-center cursor-pointer"
                      onClick={() => {
                        deleteM(item._id);
                      }}
                    >
                      <img src={Delete} alt="delete" />
                    </th>
                    <th
                      className="px-10 cursor-pointer"
                      onClick={() => {
                        handleEditClick(item._id);
                      }}
                    >
                      <img src={Edit} />
                    </th>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {morningMedicamentos.length > 3 && (
          <button onClick={() => setShowAllRows(!showAllRows)}>
            {showAllRows ? <HiBarsArrowUp className="text-3xl"/> : <HiBarsArrowDown className="text-3xl"/>}
          </button>
        )}
      </div>
    </div>
  );
}

export default Morning;
