import { BsMoonStars } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Night() {
  return (
    <div className="font-nunito flex gap-2">
      <div className="flex flex-col gap-4 place-items-center bg-blue-400 p-5 px-10 text-xl font-semibold text-blue-950">
        <p>Night</p>
        <BsMoonStars className="text-[2rem] text-blue-950" />
      </div>
      <table className="table-auto border-separate">
        <tbody className="border-2">
          <tr className="border-2 bg-blue-200">
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
            <div className="flex gap-5">
              <button className="hover:bg-green-700 rounded-md">
                <BiEditAlt className="text-green-700 hover:text-white text-3xl" />
              </button>
              <button className="hover:bg-red-500 rounded-md">
                <RiDeleteBin6Fill className="text-red-500 hover:text-white text-3xl" />
              </button>
            </div>
          </tr>
          <tr className="bg-blue-400">
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
          <tr className="border-2 bg-blue-200">
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

export default Night;
