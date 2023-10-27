import { BsSun } from "react-icons/bs";
// import { PiCloudSun } from "react-icons/pi";
// import { PiSunHorizonLight } from "react-icons/pi";
// import { BsMoonStars } from "react-icons/bs";
// import { PiPillFill } from "react-icons/pi";
// import { useState } from "react";

import Morning from "./times/Morning.jsx";
// import Noon from "./times/Noon.jsx";
// import Evening from "./times/Evening.jsx";
// import Night from "./times/Night.jsx";
// import Only from "./times/Only.jsx";
function CalendarioMedicamentos() {
  // const [activeButton, setActiveButton] = useState("  ");

  // const handleButtonClick = (activeButton) => {
  //   setActiveButton("");
  //   setTimeout(() => setActiveButton(activeButton), 0);
  // };

  return (
    <div className="h-screen grid place-items-center font-nunito">
      <div className="">
        <h1 className="text-5xl h-0 font-bold">Medication Calendar</h1>
      </div>
      {/* Buttons */}
      <div className="gridgap-16">
        {/* <div>
          <button
            onClick={() => handleButtonClick("morning")}
            className="grid place-items-center bg-yellow-300 p-5 px-7 text-xl font-semibold text-yellow-700 rounded-2xl hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-110 hover:shadow-xl"
          >
            Moorning
            <BsSun className="text-[4rem] text-yellow-600" />
          </button>
        </div> */}
        <Morning/>
        {/* <div>
          <button
            onClick={() => handleButtonClick("noon")}
            className="grid place-items-center bg-orange-300 p-5 px-9 text-xl font-semibold text-orange-700 rounded-2xl hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-110 hover:shadow-xl"
          >
            Noon
            <PiCloudSun className="text-[4rem] text-orange-700" />
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("evening")}
            className="grid place-items-center bg-cyan-400 p-5 px-9 text-xl font-semibold text-cyan-900 rounded-2xl hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-110 hover:shadow-xl"
          >
            Evening
            <PiSunHorizonLight className="text-[4rem] text-cyan-900" />
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("night")}
            className="grid gap-4 place-items-center bg-blue-400 p-5 px-9 text-xl font-semibold text-blue-950 rounded-2xl hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-110 hover:shadow-xl"
          >
            Night
            <BsMoonStars className="text-[3rem] text-blue-950" />
          </button>
        </div>
        <div>
          <button
            onClick={() => handleButtonClick("only")}
            className="grid place-items-center bg-green-300 p-3 px-7 text-lg font-semibold text-green-900 rounded-2xl hover:-translate-y-3 transition ease-in-out delay-50 hover:scale-110 hover:shadow-xl"
          >
            Only when I <br /> need it
            <PiPillFill className="text-[3rem] text-green-900" />
          </button>
        </div> */}
      </div>
      {/* Buttons condicion */}
      {/* <div className="transition ease-in-out delay-300 -translate-y-3"> */}
        {/* Componentes condicionales */}
        {/* {activeButton === "morning" && <Morning />}
        {activeButton === "noon" && <Noon />}
        {activeButton === "evening" && <Evening />}
        {activeButton === "night" && <Night />}
        {activeButton === "only" && <Only />} */}
      {/* </div> */}
      <button
        type="button"
        class="text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-800/80 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 hover:-translate-y-3 hover:scale-110 transition ease-in-out"
      >
        Add medication
      </button>
    </div>
  );
}

export default CalendarioMedicamentos;
