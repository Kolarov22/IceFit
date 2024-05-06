import React from 'react'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/16/solid'
import ClientRow from './ClientRow';

const InstructorDashboard = () => {
  return (
    <section className="bg-white shadow-lg rounded-lg  w-full md:w-3/4 mx-auto font-poppins my-20 py-5">
      <div className="flex justify-between items-center gap-5 px-5">
        <h1 className="font-bold text-black">Clients</h1>
        <div className="flex justify-between gap-4">
          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              className="bg-inherit w-full focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </span>

          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center  text-gray-500">
            <p>Last 30 days</p>
            <ChevronDownIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div>
          <ul className="flex justify-between items-center gap-4 text-gray-400 text-sm py-2 border-b border-gray-300 px-5">
            <li className="basis-1/3">Client name</li>
            <div className="flex justify-around gap-3 basis-2/3">
              <li>Goal</li>
              <li>Income</li>
              <li>Initial Date</li>
              <li>Weekly Plan</li>
            </div>
          </ul>
          <ClientRow
            name="John"
            observation="Gluten-free"
            goal="Muscle Gain"
            income={30.25}
            date="12/03/24"
            status="Uncompleted"
          />
          <ClientRow
            name="Mark"
            observation="Gluten-free"
            goal="Weight Loss"
            income={40.65}
            date="15/03/24"
            status="Completed"
          />
        </div>
      </div>
    </section>
  );
}

export default InstructorDashboard