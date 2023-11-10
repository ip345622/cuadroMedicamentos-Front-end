import { BsMoonStars } from "react-icons/bs";
import {HiBarsArrowDown, HiBarsArrowUp} from 'react-icons/hi2'
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useMedicamento } from "../../../context/medicamentosContext";
import Delete from "../../../assets/Delete.svg";
import Edit from "../../../assets/Edit.svg";

function Night() {
  const [showAllRows, setShowAllRows] = useState(false);
  const { mostrarMedicamentos, medicamentos, deleteM } = useMedicamento();
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(false);

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
  const handleCheckboxClick = async (item) => {
    if (isCheckboxDisabled) {
      alert("El checkbox se habilitará en 30 minutos");
      return;
    }

    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();

    const frecuencia = item.frecuencia;
    const [frecuenciaHours, frecuenciaMinutes] = frecuencia
      .split(":")
      .map(Number);

    const newHour = (currentHour + frecuenciaHours) % 24;
    const newMinutes = (currentMinutes + frecuenciaMinutes) % 60;

    const newTime = `${newHour}:${newMinutes}`;
    console.log(newTime);
    await updateM(item._id, { dias: newTime });

    setIsCheckboxDisabled(true);
    setShowEditMessage(true);
    mostrarMedicamentos();

    setTimeout(() => {
      setShowEditMessage(false);
      setIsCheckboxDisabled(false);
    }, 30 * 60 * 1000);
  };

  const nightMedicamentos = medicamentos.filter((item) => {
    const [horaToma] = item.dias.split(":").map(Number);
    console.log(horaToma);
    return item.necesario === "no" && horaToma >= 0 && horaToma <= 5;
  });

  useEffect(() => {
    mostrarMedicamentos();
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col gap-4 place-items-center bg-[#6b8dba] p-5 px-[2.3rem] text-xl font-semibold">
        <p className="text-[#3c5c87]">Night</p>
        <BsMoonStars className="text-[2rem] text-[#3c5c87]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            {nightMedicamentos?.map((item, index) => (
              <React.Fragment key={item._id}>
                {(index < 2 || showAllRows) && (
                  <tr
                    className="border-2 bg-[#aac5df] text-center"
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
                        onChange={() => handleCheckboxClick(item)}
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
        {nightMedicamentos.length > 2 && (
          <button onClick={() => setShowAllRows(!showAllRows)}>
            {showAllRows ? <HiBarsArrowUp className="text-3xl"/> : <HiBarsArrowDown className="text-3xl"/>}
          </button>
        )}
      </div>
    </div>
  );
}

export default Night;

// <tr className="border-2 bg-[#aac5df] text-center">
