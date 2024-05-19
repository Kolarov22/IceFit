import React from 'react'

const Personal = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        BASIC INFO
      </h2>
      <span className="flex flex-auto justify-between gap-5">
        <div className="flex flex-col w-2/3">
          <label htmlFor="">FIRST NAME</label>
          <input className="border border-gray-300" type="text" name="" id="" />
        </div>
        <div className="flex flex-col w-1/3">
          <label htmlFor="">LAST NAME</label>
          <input className="border border-gray-300" type="text" name="" id="" />
        </div>
      </span>
      <label htmlFor="">EMAIL</label>
      <input className="border border-gray-300" type="email" name="" id="" />
      <label htmlFor="">PHONE</label>
      <input className="border border-gray-300" type="tel" name="" id="" />
      <label htmlFor="">FITNESS GOALS</label>
      <input className="border border-gray-300" type="text" name="" id="" />
      <label htmlFor="">NUTRITIONAL PREFERENCES</label>
      <input className="border border-gray-300" type="text" name="" id="" />
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        ABOUT ME
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name=""
        id=""
      ></textarea>
    </div>
  );
}

export default Personal