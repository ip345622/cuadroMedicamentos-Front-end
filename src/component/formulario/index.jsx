import React,{useContext, useEffect,useState} from "react";
import {useForm} from 'react-hook-form'
import { useMedicamento } from "../../context/medicamentosContext";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
function Formulario() {
  const {register,handleSubmit, setValue} = useForm();
  const {createMedicamentos, getMedicamentoId, updateM} = useMedicamento();
  const {user} = useContext(AuthContext);
  const userId = user ? user.id : null;
 

  const params = useParams();

  useEffect(() => {
    async function loadMedicamento() {
      if(params.id){
        const medicamento = await getMedicamentoId(params.id);
        console.log(medicamento); 
        setValue('nombreMedicamento',medicamento.nombreMedicamento);
        setValue('dosis',medicamento.dosis);
        setValue('frecuencia',medicamento.frecuencia);
        setValue('dias',medicamento.dias);
        setValue('comentario',medicamento.comentario);
      }
    }
    loadMedicamento(); //
  },[]);

  const onSubmit = handleSubmit(async (data) => {
    // Obtener la fecha actual
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTime = `${currentHour}:${currentMinutes}`;
  
    // Obtener la hora de creación
    const createdHour = new Date(data.createdAt).getHours();
    const createdMinutes = new Date(data.createdAt).getMinutes();
  
    // Crear un objeto Date con la hora de creación
    const createdDate = new Date();
    createdDate.setHours(createdHour);
    createdDate.setMinutes(createdMinutes);
  
    // Obtener la fecha de la toma (día siguiente)
    const pastillatakenDate = new Date(data.dias);
    pastillatakenDate.setDate(pastillatakenDate.getDate() + 1);
  
    // Obtener los minutos totales de currentTime y createdDate
    const currentTimeMinutes = currentHour * 60 + currentMinutes;
    const createdTimeMinutes = createdHour * 60 + createdMinutes;
  
    // Calcular la diferencia de tiempo en minutos
    const timeDifferenceMinutes = currentTimeMinutes - createdTimeMinutes;
  
    // Calcular la próxima toma sumando la diferencia a la fecha de toma
    const nextTakeDate = new Date(pastillatakenDate.getTime() + timeDifferenceMinutes * 60000);
  
    // Formatear la fecha de la próxima toma
    const nextTakeTime = `${nextTakeDate.getHours()}:${nextTakeDate.getMinutes()}`;
  
    // Asignar el resultado al campo 'siguienteToma'
    setValue('dias', nextTakeTime);
  
    // Continuar con el envío del formulario
    if (params.id) {
      await updateM(params.id, data);
    } else {
      await createMedicamentos(data);
    }
  });
  

  return (
    <div className="flex h-screen items-center justify-center font-nunito">
      <div className="flex flex-col shadow-2xl shadow-blue-950 p-10 bg-white gap-5 rounded-3xl">
        <div>
          <h1 className="text-3xl text-[#6E78FF] font-bold">
            Enter the medication
          </h1>
          <p className="text-xl text-[#A8B5E0]">
            Enter the following information about the medication
          </p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Medication
            </label>
            <input
              required
              {...register('nombreMedicamento')}
              autoFocus
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Enter the medication name"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Dosage
            </label>
            <input
              required
              {...register('dosis')}
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="number"
              placeholder="Dosage to be ingested"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              In hours. When should you consume it?
            </label>
            <input
              required
              {...register('frecuencia')}
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Frequency of ingestion"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Days
            </label>
            <input
              required
              {...register('dias')}
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="number"
              placeholder="How many days should it be consumed?"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Comment <span className="text-[#A8B5E0]">(optional)</span>
            </label>
            <input
              {...register('comentario')}
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Comments on the consumption of the medication"
            />
            <input
            hidden
              {...register('user')}
              value={userId}
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Comments on the consumption of the medication"
            />
          </div>
          <div className="flex mt-8 justify-center items-center gap-4">
            <button class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-8 border-b-4 border-blue-900 hover:border-blue-800 rounded-full"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
