import { PiSunHorizonLight } from "react-icons/pi";

function Evening() {
  return (
    <div className="font-nunito flex gap-2">
      <div className="flex flex-col place-items-center bg-cyan-400 p-5 px-[1.8rem] text-xl font-semibold text-cyan-900">
        <p>Evening</p>
        <PiSunHorizonLight className="text-[3rem] text-cyan-900" />
      </div>
      <table className="table-auto border-separate">
        <tbody className="border-2">
          <tr className="border-2 bg-cyan-100">
            <div className="flex justify-center gap-2 px-[3.6rem]">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Pepto</td>
              </div>
            </div>
            <td className="px-12">500gm</td>
            <td className="px-12">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="bg-cyan-300">
            <div className="flex justify-center gap-2">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Aspirina</td>
              </div>
            </div>
            <td className="px-12">500gm</td>
            <td className="px-12">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="border-2 bg-cyan-100">
            <div className="flex justify-center gap-2 px-[3.4rem]">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Pepto</td>
              </div>
            </div>
            <td className="px-12">500gm</td>
            <td className="px-12">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Evening;
