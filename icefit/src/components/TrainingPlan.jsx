import React from 'react'
import { useState } from 'react';
import {EyeIcon, PlusIcon } from '@heroicons/react/16/solid'
import TrainingPlanItem from './TrainingPlanItem';





const TrainingPlan = ({week}) => {
  return (
    <section className="flex flex-col items-center">
      <div className=" rounded-lg shadow-lg w-2/4 mx-auto my-20 gap-5 border-gray-300 border">
        <h1 className="font-bold text-2xl px-8 py-8">
          Week {week} Training Plan
        </h1>
        <ul
          id="taskList"
          className="w-full  border-y border-gray-300 px-8 py-5"
        >
          <TrainingPlanItem exercise="100 push ups" />
          <TrainingPlanItem exercise="30 pull ups" />
          <TrainingPlanItem exercise="3km run" />
        </ul>
        <div className="flex justify-between font-poppins px-8 py-3 gap-3">
          <span className="flex gap-2 items-center text-gray-400 text-sm">
            <EyeIcon className="h-5 w-5 " />
            Completed 0 of 3
          </span>
          <span className="flex gap-2 items-center text-sm">
            <button>
              <PlusIcon className="h-5 w-5" />
            </button>
            Add task
          </span>
        </div>
      </div>

      <div>
        <button
          className="bg-primary rounded-lg text-white font-medium p-2 w-[250]"
          type="button"
        >
          <p>ADD TRAINING PLAN</p>
        </button>
      </div>
    </section>
  );
}

export default TrainingPlan