import React from "react";
import medication from '../../img/medical-care.png'

function Inicio() {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-b from-blue-300 to-blue-100 h-screen font-nunito">
      <div className="flex flex-col justify-center items-start pl-48 h-screen gap-20">
        <div className="">
          <h1 className="text-[4rem] font-bold text-blue-900">MediData</h1>
          <p className="text-2xl text-gray-500">Easily record your medication consumptions</p>
        </div>
        <div>
          <a href="/login" className="text-xl border-2 font-semibold border-blue-700 px-10 py-2 rounded-full text-blue-900 hover:text-white hover:bg-blue-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Log in now</a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img className='w-[30rem]' src={medication}/>
      </div>
    </div>
  );
}

export default Inicio;
