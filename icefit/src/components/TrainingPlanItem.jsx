import {
  ChevronUpIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

const TrainingPlanItem = ({ exercise }) => {
  return (
    <li className="flex flex-row justify-between py-3">
      <span className="flex items-center gap-2">
        <input
          className="w-5 h-5 accent-primary"
          type="checkbox"
          name=""
          id="completedTask"
        />
        <p className="font-poppins">{exercise}</p>
      </span>
      <span className="flex items-center gap-2 justify-center">
        <button>
          <ChevronUpIcon className="w-5 h-5" />
        </button>
        <button>
          <ChevronDownIcon className="w-5 h-5" />
        </button>
        <button>
          <Bars3Icon className="w-5 h-5" />
        </button>
      </span>
    </li>
  );
};

export default TrainingPlanItem;
