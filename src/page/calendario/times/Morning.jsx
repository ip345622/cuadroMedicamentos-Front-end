import { BsSun } from "react-icons/bs";

function Morning() {
  return (
    <div className="font-nunito flex gap-2">
      <div className="flex flex-col justify-center items-center gap-2 bg-orange-300 px-7 text-xl font-semibold text-orange-700">
        <p>Morning</p>
        <BsSun className="text-[2.5rem] text-orange-700" />
      </div>
      <table className="table-auto border-separate">
        <thead>
          <tr className="text-xl">
            <th className="px-10">Medication</th>
            <th className="px-10">Dosage</th>
            <th className="px-10">Time</th>
            <th className="px-10">Date</th>
            <th className="px-10">Comments</th>
          </tr>
        </thead>
        <tbody className="border-2">
          <tr className="border-2 bg-[#FAC3A5]">
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
          <tr className="bg-[#e48d75]">
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
          <tr className="bg-[#FAC3A5]">
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
