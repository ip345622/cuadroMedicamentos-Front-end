import React from "react";
import bg from "../../img/bgRegistration.jpg";

function Registration() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#de9849]">
      <div className="flex justify-center items-center font-nunito relative">
        <img src={bg} className="w-3/5 rounded-2xl shadow-xl"></img>
        <div className="flex flex-col w-[25rem] py-20 gap-5 rounded-xl shadow-2xl absolute backdrop-blur-lg backdrop-brightness-[.93]">
          <h1 className=" text-4xl text-center font-bold text-white">Registration</h1>
          <form className="grid items-center justify-center gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="text- lg block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-200 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 placeholder-black"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-fullgroup">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-300 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <button class="mt-5 bg-transparent hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded">
              Button
            </button>
            <a href="#" className="text-sm">Already have an account? <span className="text-white font-bold">Sign in</span></a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
