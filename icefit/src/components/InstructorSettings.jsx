import React from "react";
import Personal from "./Personal";
import InstructorPhysical from "./InstructorPhysical";

const InstructorSettings = () => {
  return (
    <section className="overflow-auto max-h-max my-5">
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 py-16 px-10 items-center justify-center">
          <Personal />
          <InstructorPhysical />
        </div>
        <div className="flex justify-center gap-10 my-10">
          <button
            type="reset"
            className="bg-gray-400 rounded-md text-white font-medium py-2 px-6"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-confirmGreen rounded-md text-white font-medium py-2 px-6"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default InstructorSettings;
