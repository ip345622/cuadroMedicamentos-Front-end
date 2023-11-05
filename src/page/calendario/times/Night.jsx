import { BsMoonStars } from "react-icons/bs";

function Night() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4 place-items-center bg-[#6b8dba] p-5 px-[2.3rem] text-xl font-semibold">
        <p className="text-[#3c5c87]">Night</p>
        <BsMoonStars className="text-[2rem] text-[#3c5c87]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            <tr className="border-2 bg-[#95b4da] text-center">
              <td className="w-[11.45rem]">Pepto</td>
              <td className="w-[9.4rem]">500gm</td>
              <td className="w-[7.97rem]">8hr</td>
              <td className="w-[10.6rem]">20-10-2023</td>
              <td className="w-[16.8rem]">Solo una pastilla por toma</td>
            </tr>
            <tr className="border-2 bg-[#aac5df] text-center">
              <td className="w-[11.45rem]">Pepto</td>
              <td className="w-[9.4rem]">500gm</td>
              <td className="w-[7.97rem]">8hr</td>
              <td className="w-[10.6rem]">20-10-2023</td>
              <td className="w-[16.8rem]">Solo una pastilla por toma</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Night;
