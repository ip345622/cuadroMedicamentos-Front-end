import React from "react";

function Formulario() {
  return (
    <div className="flex h-screen items-center justify-center font-nunito">
      <div className="flex flex-col shadow-2xl shadow-blue-950 p-10 bg-white gap-5 rounded-3xl">
        <div>
          <h1 className="text-3xl text-[#6E78FF] font-bold">
            Enter the medication
          </h1>
          <p className="text-xl text-[#A8B5E0]">
            Enter the following information about the medication
          </p>
        </div>
        <form action="" className="flex flex-col gap-6">
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Medication
            </label>
            <input
              required
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Enter the medication name"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Dosage
            </label>
            <input
              required
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Dosage to be ingested"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              In hours. When should you consume it?
            </label>
            <input
              required
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="number"
              placeholder="Frequency of ingestion"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Days
            </label>
            <input
              required
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="number"
              placeholder="How many days should it be consumed?"
            />
          </div>
          <div>
            <label className="block text-[#6C8DFA] text-lg font-semibold">
              Comment <span className="text-[#A8B5E0]">(optional)</span>
            </label>
            <input
              className="appearance-none border-b-2 border-[#D5E3F0] w-full py-2 px-3 text-gray-700 leading-tight focus:border-[#6E78FF] focus:outline-none"
              type="text"
              placeholder="Comments on the consumption of the medication"
            />
          </div>
          <div className="flex mt-8 justify-center items-center gap-4">
            <button class="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-8 border-b-4 border-blue-900 hover:border-blue-800 rounded-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
