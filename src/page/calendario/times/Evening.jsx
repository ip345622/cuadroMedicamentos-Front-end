import { PiSunHorizonLight } from "react-icons/pi";

function Evening() {
  return (
    <div className="flex">
      <div className="flex flex-col place-items-center bg-[#58bfb2] py-5 px-[1.6rem] text-xl font-semibold">
        <p className="text-[#1f6965]">Evening</p>
        <PiSunHorizonLight className="text-[3rem] text-[#1f6965]" />
      </div>
      <div className="font-nunito flex gap-2">
        <table className="table-auto border-separate">
          <tbody className="border-2">
            <tr className="border-2 bg-[#83e1da] text-center">
              <td className="w-[11.45rem]">Pepto</td>
              <td className="w-[9.4rem]">500gm</td>
              <td className="w-[7.97rem]">8hr</td>
              <td className="w-[10.6rem]">20-10-2023</td>
              <td className="w-[16.8rem]">Solo una pastilla por toma</td>
            </tr>
            <tr className="border-2 bg-[#abeeea] text-center">
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

export default Evening;
