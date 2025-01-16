import React from "react";
import PropTypes from "prop-types";

const TrainingPlanEntry = ({
  id,
  name,
  description,
  price,
  instructor,
  addClientToPlan,
}) => {
  return (
    <ul className="flex flex-col sm:flex-row justify-between items-center py-2 px-5 sm:gap-5 border-y border-primary">
      <li>{name}</li>
      <li>{description}</li>
      <li>{price}</li>
      <li>{instructor.username}</li>
      <button
        className="bg-primary rounded-md px-2 py-1 text-white"
        type="button"
        onClick={() => addClientToPlan(id)}
      >
        Add
      </button>
    </ul>
  );
};
TrainingPlanEntry.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  instructor: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  addClientToPlan: PropTypes.func.isRequired,
};

export default TrainingPlanEntry;
