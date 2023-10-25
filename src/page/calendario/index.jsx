import { BsSun } from "react-icons/bs";
import { IconContext } from "react-icons";

function CalendarioMedicamentos() {
  return (
    <>
      <div className="font-nunito h-screen flex flex-col items-center justify-center">
        <h1 className="">Registro de Medicamentos</h1>
        <div>
          <div className="flex gap-2">
          <div className="flex flex-col bg-[#FD9999] justify-center items-center px-10">
              <h3 className="font-bold">Morning</h3>
              <IconContext.Provider value={{size:60, color:'#A54342',}}>
                <>
                  <BsSun />
                </>
              </IconContext.Provider>
            </div>
            <table className="">
              <thead>
                <tr>
                  <th className="px-16">Medications</th>
                  <th className="px-16">Dosage</th>
                  <th className="px-16">Time</th>
                  <th className="px-16">Date</th>
                  <th className="px-16">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-slate-700">Paracetamol</td>
                  <td className="border border-slate-700">500g</td>
                  <td className="border border-slate-700">8hrs</td>
                  <td className="border border-slate-700">20-12-2023</td>
                  <td className="border border-slate-700 h-auto w-[17rem]">Solo una capsula en cada toma</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-700">Paracetamol</td>
                  <td className="border border-slate-700">500g</td>
                  <td className="border border-slate-700">8hrs</td>
                  <td className="border border-slate-700">20-12-2023</td>
                  <td className="border border-slate-700 h-auto w-[17rem]">Solo una capsula en cada toma</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalendarioMedicamentos;
