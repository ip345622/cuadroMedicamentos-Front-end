import { BsSun } from "react-icons/bs";


function Morning() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center mt-8 items-center gap-2 bg-[#f79c9b] px-6 py-5 text-xl font-semibold">
        <p className="text-[#ae5453]">Morning</p>
        <BsSun className="text-[2.5rem] text-[#ae5453]" />
      </div>
      <div className="font-nunito flex gap-2">
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
            <tr className="border-2 bg-[#f9dad8] text-center">
              <td className="">jjajajaj</td>
              <td className="px-10">500gm</td>
              <td className="px-10">8hr</td>
              <td className="px-10">20-10-2023</td>
              <td className="px-10">Solo una pastilla por toma</td>
            </tr>
            <tr className="border-2 bg-[#fcbbbc] text-center">
              <td className="">jjajajaj</td>
              <td className="px-10">500gm</td>
              <td className="px-10">8hr</td>
              <td className="px-10">20-10-2023</td>
              <td className="px-10">Solo una pastilla por toma</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Morning;
