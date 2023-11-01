import { PiCloudSun } from "react-icons/pi";

function Noon() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center bg-[#ffeac8] px-[2.1rem] py-5 w-[7.7rem] text-xl font-semibold">
        <p className="text-[#b79e7a]">Noon</p>
        <PiCloudSun className="text-[3rem] text-[#b79e7a]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            <tr className="border-2 bg-[#fae8d0] text-center">
              <td className="w-[11.45rem]">Pepto</td>
              <td className="w-[9.4rem]">500gm</td>
              <td className="w-[7.97rem]">8hr</td>
              <td className="w-[10.6rem]">20-10-2023</td>
              <td className="w-[16.8rem]">Solo una pastilla por toma</td>
            </tr>
            <tr className="border-2 bg-[#faf3e8] text-center">
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

export default Noon;
