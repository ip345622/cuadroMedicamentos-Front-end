import React from "react";

function Evening() {
  return (
    <div className="font-nunito">
      <table className="table-auto border-separate border-spacing-1 border-2 p-5 rounded-2xl shadow-2xl ">
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
          <tr className="border-2 bg-cyan-100">
            <td className="px-10">Pepto</td>
            <td className="px-10">500gm</td>
            <td className="px-10">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="bg-cyan-300">
            <td className="px-10">Aspirina</td>
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

export default Evening;
