import { PiPillFill } from "react-icons/pi";

function Only() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center bg-[#98cfba] p-3 px-[rem] text-lg font-semibold ">
        <p className="text-center text-md text-[#649b90]">
          Only when I <br /> need it
        </p>
        <PiPillFill className="text-[2rem] text-[#649b90]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            <tr className="border-2 bg-[#c6ead9] text-center">
              <td className="w-[11.45rem]">Pepto</td>
              <td className="w-[9.4rem]">500gm</td>
              <td className="w-[7.97rem]">8hr</td>
              <td className="w-[10.6rem]">20-10-2023</td>
              <td className="w-[16.8rem]">Solo una pastilla por toma</td>
            </tr>
            <tr className="border-2 bg-[#e4f9f3] text-center">
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

export default Only;
