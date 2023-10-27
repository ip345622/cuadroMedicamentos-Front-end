import { BsSun } from "react-icons/bs";

function Morning() {
  return (
    <div className="font-nunito flex">
      <div className="flex flex-col justify-center items-center gap-5 bg-yellow-300 px-7 text-xl font-semibold text-yellow-700 shadow-2xl rounded-s-2xl">
        <p>Morning</p>
        <BsSun className="text-[4rem] text-yellow-600" />
      </div>
      <table className="table-auto border-separate border-spacing-1 border-2 p-2 shadow-2xl rounded-e-2xl">
        <thead>
          <tr className="text-xl">
            <th className="px-10">Medication</th>
            <th className="px-10">Dosage</th>
            <th className="px-10">Time</th>
            <th className="px-10">Date</th>
            <th className="px-10">Comments</th>
          </tr>
        </thead>
        <tbody className="border-2 text-lg">
          <tr className="border-2 bg-[#FDFD96]">
            <div className="flex justify-center gap-2">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Pepto</td>
              </div>
            </div>
            <td className="px-10">500gm</td>
            <td className="px-10">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="bg-[#FDEF3B]">
            <div className="flex justify-center gap-2">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Aspirina</td>
              </div>
            </div>
            <td className="px-10">500gm</td>
            <td className="px-10">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="bg-[#FDFD96]">
            <div className="flex justify-center gap-2">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Aspirina</td>
              </div>
            </div>
            <td className="px-10">500gm</td>
            <td className="px-10">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Morning;
