import TrainingPlanEntry from "./TrainingPlanEntry";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const ClientDashboard = () => {
  const [trainingPlans, setTrainingPlans] = useState([]);

  useEffect(() => {
    const fetchTrainingPlans = async () => {
      try {
        const response = await fetch("http://localhost:8080/v1/training/plans");
        const data = await response.json();
        setTrainingPlans(data);
      } catch (error) {
        console.error("Error fetching training plans:", error);
      }
    };

    fetchTrainingPlans();
  }, []);

  /* useEffect(() => {
    const fetchActiveTrainingPlans = async () => {
      try {
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
        const data = await response.json();
        console.log(data);
        setActiveTrainingPlans(data);
      } catch (error) {
        console.error("Error fetching active training plans:", error);
      }
    };

    fetchActiveTrainingPlans();
  }); */

  const { data: activeTrainingPlans, isLoading } = useQuery({
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
      await Promise((resolve) => setTimeout(resolve, 5000));
      return data;
    },
    refetchInterval: 1000 * 30,
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

      if (response.ok) {
        // Optionally update the state to reflect the changes
        console.log("Client added successfully");
      } else {
        console.error("Failed to add client to the training plan");
      }
    } catch (error) {
      console.error("Error adding client to the training plan:", error);
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-lg  w-full md:w-3/4 mx-auto font-poppins my-20 py-5 ">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-poppins font-semibold p-4">
          Active training plans
        </h2>

        <div className="h-32">
          {isLoading ? (
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
          {trainingPlans.map((plan) => (
            <TrainingPlanEntry
              key={plan.id}
              id={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              instructor={plan.instructor}
              addClientToPlan={addClientToPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;
