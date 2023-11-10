import React,{useEffect, useState} from "react";
import { PiSunHorizonLight } from "react-icons/pi";
import { useMedicamento } from "../../../context/medicamentosContext";
// import Form from "../../component/formulario/index.jsx";
import Swal from 'sweetalert2';

import Delete from '../../../assets/Delete.svg';
import Edit from '../../../assets/Edit.svg';

function Evening() {
  const {mostrarMedicamentos,medicamentos, deleteM} = useMedicamento();  
  // const [eveningMedicamentos, setEveningMedicamentos] = useState([]);

  useEffect(() => {
    mostrarMedicamentos();
  }, []);

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
  

  return (
    <div className="flex">
      <div className="flex flex-col place-items-center bg-[#58bfb2] py-5 px-[1.6rem] text-xl font-semibold">
        <p className="text-[#1f6965]">Evening</p>
        <PiSunHorizonLight className="text-[3rem] text-[#1f6965]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            {medicamentos?.map((item) =>(
              <tr className="border-2 bg-[#83e1da] text-center" key={item._id}>
              <td className="w-[11.45rem]">{item.nombreMedicamento}</td>
              <td className="w-[9.4rem]">{item.dosis}</td>
              <td className="w-[9.5rem]">{item.frecuencia} hours</td>
              <td className="w-[10.6rem]">{item.dias}</td>
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

export default Evening;
