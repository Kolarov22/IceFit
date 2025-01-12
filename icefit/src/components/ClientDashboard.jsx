import TrainingPlanEntry from "./TrainingPlanEntry";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { useState } from "react";

const ClientDashboard = () => {
  const { data: trainingPlans, error: trainingPlansError, isLoading: trainingPlansLoading } = useQuery({
    queryKey: ["trainingPlans"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/v1/training/plans");
      if (!response.ok) {
        throw new Error("Failed to fetch training plans");
      }
      return response.json();
    }
  });

  const { data: activeTrainingPlans, error: activeTrainingPlansError, isLoading: activeTrainingPlansLoading } = useQuery({
    queryKey: ["activeTrainingPlans"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/v1/training/client/training-plan",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch active training plans");
      }
      const data = await response.json();
      return data;
    },
    refetchInterval: 1000 * 30,
  });

  const [progress, setProgress] = useState({
    currentWeight: "",
    targetWeight: "",
    completedWorkouts: 0
  });

  const [detailedProgress, setDetailedProgress] = useState({
    weeklyGoals: [],
    upcomingSession: null,
    recentActivities: []
  });

  const addClientToPlan = async (planId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:8080/v1/training/add/${planId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add client to the training plan");
      }
      console.log("Client added successfully");
    } catch (error) {
      console.error("Error adding client to the training plan:", error);
    }
  };

  if (trainingPlansError) {
    return <div>Error loading training plans: {trainingPlansError.message}</div>;
  }

  if (activeTrainingPlansError) {
    return <div>Error loading active training plans: {activeTrainingPlansError.message}</div>;
  }

  return (
    <section className="bg-white shadow-lg rounded-lg w-full md:w-3/4 mx-auto font-poppins my-20 py-5">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-poppins font-semibold p-4">
          Your Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Weight Progress</h3>
            <p>Current: {progress.currentWeight} kg</p>
            <p>Target: {progress.targetWeight} kg</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Workouts Completed</h3>
            <p>{progress.completedWorkouts} sessions</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Next Session</h3>
            <p>Tomorrow at 10:00 AM</p>
          </div>
        </div>

        <div className="mt-8 px-5">
          <h2 className="font-bold text-xl mb-4">Weekly Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detailedProgress.weeklyGoals.map((goal, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="checkbox" checked={goal.completed} />
                <span className={goal.completed ? 'line-through' : ''}>
                  {goal.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 px-5">
          <h2 className="font-bold text-xl mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {detailedProgress.recentActivities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">{activity.name}</p>
                <p className="text-gray-600">{activity.date}</p>
                <p className="text-gray-600">{activity.duration} minutes</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-poppins font-semibold p-4">
          Active training plans
        </h2>

        <div className="h-32">
          {activeTrainingPlansLoading ? (
            <Spinner />
          ) : (
            activeTrainingPlans?.map((plan) => (
              <div key={plan.id} className="p-2 border-b">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm">{plan.description}</p>
                <p className="text-sm">Price: ${plan.price}</p>
                <p className="text-sm">
                  Instructor: {plan.instructor.username}
                </p>
              </div>
            ))
          )}
        </div>

        <h2 className="text-xl font-poppins font-semibold p-4">
          Check out these training plans
        </h2>
        <div className=" flex-col sm: flex">
          {trainingPlansLoading ? (
            <Spinner />
          ) : (
            trainingPlans?.map((plan) => (
              <TrainingPlanEntry
                key={plan.id}
                id={plan.id}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                instructor={plan.instructor}
                addClientToPlan={addClientToPlan}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;
