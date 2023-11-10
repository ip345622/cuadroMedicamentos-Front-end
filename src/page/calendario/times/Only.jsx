import { PiPillFill } from "react-icons/pi";
import React,{useEffect, useState} from "react";
import { useMedicamento } from "../../../context/medicamentosContext";
import Swal from 'sweetalert2';
import Delete from '../../../assets/Delete.svg';
import Edit from '../../../assets/Edit.svg';

function Only() {
  const {mostrarMedicamentos,medicamentos, deleteM} = useMedicamento();  

  function handleEditClick(item) {
    Swal.fire({
      title: "Do you want to edit this medication?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a la página de edición si el usuario confirma
        window.location.href =`/form/${item}`;
      }
    });
  };
  // Filtrar los medicamentos basados en el campo 'nombreNecesario'
  const filteredMedicamentos = medicamentos.filter((item) => {
    // Ajusta la comparación según tus necesidades
    return item.necesario === 'si';
  });

  useEffect(() => {
    mostrarMedicamentos();
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center bg-[#98cfba] p-3 px-[rem] text-lg font-semibold ">
        <p className="text-center text-md text-[#649b90]">
          Only when I <br /> need it
        </p>
        <PiPillFill className="text-[2rem] text-[#649b90]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
        <tbody className="border-2">
            {filteredMedicamentos?.map((item) =>(
              <tr className="border-2 bg-[#c6ead9] text-center" key={item._id}>
              <td className="w-[11.45rem]">{item.nombreMedicamento}</td>
              <td className="w-[9.4rem]">{item.dosis}</td>
              <td className="w-[9.5rem]">--</td>
              <td className="w-[10.6rem]">--</td>
              <td className="w-[13.3rem]">{item.comentario}</td>
              <td className="px-16"><input type="checkbox" /></td>
              <th className="flex justify-center px-12 h-[100px] items-center justify-items-center cursor-pointer"
              onClick={() => {deleteM(item._id)}}
              ><img src={Delete} alt="delete" /></th>
              <th className="px-10 cursor-pointer" onClick={() =>{handleEditClick(item._id)}}>
                <img src={Edit}/>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Only;

            // <tr className="border-2 bg-[#c6ead9] text-center">