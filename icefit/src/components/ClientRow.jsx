import React from 'react'

const ClientRow = ({name, observation, goal, income, date, status}) => {
  return (
    <ul className="flex justify-between items-center py-2 px-5 gap-3">
      <li className="basis-1/3">
        {name} <br />
        <p className="text-sm text-gray-500">Observation: {observation}</p>
      </li>
      <div className="flex justify-around  gap-3 md:gap-12 basis-2/3 ">
        <li>{goal}</li>
        <li className="md:mr-4">${income}</li>
        <li>{date}</li>
        <li>{status}</li>
      </div>
    </ul>
  );
}

export default ClientRow