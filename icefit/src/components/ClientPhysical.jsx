import React from 'react'

const ClientPhysical = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        PHYSICAL STATS AND ACTIVITY LEVEL
      </h2>
      <label htmlFor="">HEIGHT</label>
      <input className="border border-gray-300" type="number" name="" id="" />
      <label htmlFor="">WEIGHT</label>
      <input className="border border-gray-300" type="number" name="" id="" />
      <label htmlFor="">BODY-FAT PERCENTAGE</label>
      <input className="border border-gray-300" type="number" name="" id="" />
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        TELLS US ABOUT YOUR ACTIVITY LEVEL
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name=""
        id=""
      ></textarea>
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        MEDICAL HISTORY
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name=""
        id=""
      ></textarea>
    </div>
  );
}

export default ClientPhysical