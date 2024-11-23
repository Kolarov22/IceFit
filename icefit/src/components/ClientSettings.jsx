import Personal from "./Personal";
import ClientPhysical from "./ClientPhysical";
import { useState } from "react";

const ClientSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    fitnessGoals: "",
    nutritionalPreferences: "",
    height: "",
    weight: "",
    bodyFat: "",
    aboutMe: "",
    medicalHistory: "",
    activityLevel: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", JSON.stringify(formData));

    try {
      const response = await fetch("http://localhost:8080/v1/update/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="overflow-auto max-h-max my-5">
      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 py-16 px-10 items-center justify-center">
          <Personal onInputChange={handleInputChange} />
          <ClientPhysical onInputChange={handleInputChange} />
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

export default ClientSettings;
