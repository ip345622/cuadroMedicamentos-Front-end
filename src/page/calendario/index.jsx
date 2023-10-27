import Morning from "./times/Morning.jsx";
import Noon from './times/Noon.jsx'
import Evening from './times/Evening.jsx'
import Night from './times/Night.jsx'
import Only from './times/Only.jsx'
function CalendarioMedicamentos() {
  return (
    <div className="h-screen flex flex-col justify-around items-center font-nunito">
      <div className="">
        <h1 className="text-5xl font-bold">Medication Calendar</h1>
      </div>
      <Morning />
      <Noon/>
      <Evening/>
      <Night/>
      <Only/>
      <button
        type="button"
        class="text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Add medication
      </button>
    </div>
  );
}

export default CalendarioMedicamentos;
