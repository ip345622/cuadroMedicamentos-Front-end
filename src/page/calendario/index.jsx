import { useState } from "react";
import Form from "../../component/formulario/index.jsx";
import { IoClose } from "react-icons/io5";
import {FaPlus} from 'react-icons/fa6'
import { Link } from "react-router-dom";

import Morning from "./times/Morning.jsx";
import Noon from "./times/Noon.jsx";
import Evening from "./times/Evening.jsx";
import Night from "./times/Night.jsx";
import Only from "./times/Only.jsx";
import { useAuth } from "../../context/AuthContext";

function CalendarioMedicamentos() {
  const [form, setForm] = useState("");
  const {logout } = useAuth();



  const viewForm = (form) => {
    setForm("");
    setTimeout(() => setForm(form), 0);
  };
  const closeForm = (form) => {
    setForm("");
  };

  return (
    <div className="h-screen flex flex-col justify-around items-center font-nunito">
      <div className="flex gap-5 mb-10">
        <h1 className="text-5xl h-0 font-bold">Medication Calendar</h1>
      </div>
      <Link to={'/'} onClick={() =>{logout()}} className="rounded-md text-2xl font-bold p-2 bg-[#30afb1]">Logout</Link>
      <div className="flex flex-col gap-2">
        <Morning />
        <Noon />
        <Evening />
        <Night />
        <Only />
      </div>
      <div className='fixed bottom-10 right-10 z-[100]'>
        <button
          onClick={() => viewForm("form")}
          type="button"
          class="p-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-800/80 font-medium rounded-full text-center hover:-translate-y-3 hover:scale-110 transition ease-in-out"
        >
          <FaPlus className="text-3xl"/>
        </button>
      </div>
      {form === "form" && (
        <div className="absolute h-screen flex justify-center w-full bg-black bg-opacity-75">
          <Form />
          <button
            onClick={closeForm}
            className="h-8 mt-10"
          >
            <IoClose className="text-3xl text-white hover:text-red-600" />
          </button>
        </div>
      )}
    </div>
  );
}

export default CalendarioMedicamentos;
