import { PiPillFill } from "react-icons/pi";

function Only() {
  return (
    <div className="font-nunito flex gap-2">
      <div className="flex flex-col justify-center items-center bg-green-300 p-3 px-4 text-lg font-semibold text-green-900">
        <p className='text-center'>
          Only when I <br /> need it
        </p>
        <PiPillFill className="text-[2.5rem] text-blue-950" />
      </div>
      <table className="table-auto border-separate">
        <tbody className="border-2">
          <tr className="border-2 bg-green-200 h-5">
            <div className="flex justify-center gap-2 px-[3.6rem]">
              <input type="checkbox" name="" id="" />
              <div>
                <td className="">Pepto</td>
              </div>
            </div>{" "}
            <td className="px-12">500gm</td>
            <td className="px-12">8hr</td>
            <td className="px-10">20-10-2023</td>
            <td className="px-10">Solo una pastilla por toma</td>
          </tr>
          <tr className="bg-green-400 h-5">
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
          <tr className="bg-green-200 h-5">
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

export default Only;
