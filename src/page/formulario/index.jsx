import React from "react";

function Formulario() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex flex-col shadow-2xl p-10 bg-white gap-5">
        <div>
          <h1 className="text-3xl">Enter the medication</h1>
          <p className="text-xl text-gray-400">Enter the following information about the medication</p>
        </div>
        <form action="">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Medication</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-gray-400 focus:shadow-outline" type="text" placeholder="Enter the medication name" />
          </div>
          <div>
            <label>Dosage</label>
            <input type="text" placeholder="Dosage to be ingested" />
          </div>
          <div>
            <label>Frequency</label>
            <input type="number" placeholder="Frequency of ingestion" />
            <p>hrs</p>
          </div>
          <div>
            <label>Days</label>
            <input
              type="number"
              placeholder="How many days should it be consumed?"
            />
          </div>
          <div>
            <label>
              Comment <span>(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Comments on the consumption of the medication"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
