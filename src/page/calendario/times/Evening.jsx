import React, { useEffect, useState } from "react";
import {HiBarsArrowDown, HiBarsArrowUp} from 'react-icons/hi2'
import { PiSunHorizonLight } from "react-icons/pi";
import { useMedicamento } from "../../../context/medicamentosContext";
import Swal from "sweetalert2";

import Delete from "../../../assets/Delete.svg";
import Edit from "../../../assets/Edit.svg";

function Evening() {
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

  // Obtener la hora de frecuencia del medicamento y convertirla a números
  const [frecuenciaHours, frecuenciaMinutes] = item.frecuencia.split(":").map(Number);

  // Calcular la nueva hora sumando la hora de frecuencia a la hora actual
  const newHour = (currentHour + frecuenciaHours) % 24;
  const newMinutes = (currentMinutes + frecuenciaMinutes) % 60;

  // Actualizar la hora en el campo 'dias' del medicamento
  const newTime = `${newHour}:${newMinutes}`;
  console.log(newTime);
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

  function handleEditClick(item) {
    Swal.fire({
      title: "Do you want to edit this medication?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a la página de edición si el usuario confirma
        window.location.href = `/form/${item}`;
      }
    });
  }
  

  // Filtrar los medicamentos que deben tomarse en el rango de horas de la tarde (por ejemplo, de 18:00 PM a 23:59 PM)
  const eveningMedicamentos = medicamentos.filter((item) => {
    const [horaToma] = item.dias.split(":").map(Number);
    console.log(horaToma);
    return item.necesario === "no" && horaToma >= 18 && horaToma <= 23;
  });

  return (
    <div className="flex">
      <div className="flex flex-col place-items-center bg-[#58bfb2] py-5 px-[1.6rem] text-xl font-semibold">
        <p className="text-[#1f6965]">Evening</p>
        <PiSunHorizonLight className="text-[3rem] text-[#1f6965]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            {eveningMedicamentos?.map((item, index) => (
              <React.Fragment key={item._id}>
                {(index < 2 || showAllRows) && (
                  <tr
                    className="border-2 bg-[#83e1da] text-center"
                    key={item._id}
                  >
                    <td className="w-[11.45rem]">{item.nombreMedicamento}</td>
                    <td className="w-[9.4rem]">{item.dosis}</td>
                    <td className="w-[9.5rem]">{item.frecuencia} hours</td>
                    <td className="w-[10.6rem]">{item.dias}</td>
                    <td className="w-[13.3rem]">{item.comentario}</td>
                    <td className="px-16">
                      <input
                        type="checkbox"
                        onChange={() => {handleCheckboxClick(item)}}
                      />
                    </td>
                    <th
                      className="flex justify-center px-12 h-[100px] items-center justify-items-center cursor-pointer"
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
        {eveningMedicamentos.length > 2 && (
          <button onClick={() => setShowAllRows(!showAllRows)}>
            {showAllRows ? <HiBarsArrowUp className="text-3xl"/> : <HiBarsArrowDown className="text-3xl"/>}
          </button>
        )}
      </div>
    </div>
  );
}

export default Evening;
