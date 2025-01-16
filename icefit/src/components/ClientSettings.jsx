import Personal from "./Personal";
import ClientPhysical from "./ClientPhysical";
import { useState, useEffect } from "react";

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

  const [profilePicture, setProfilePicture] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
  });

  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  // Clear message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const showMessage = (type, text) => {
    setMessage({ type, text });
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal("");
      showMessage("success", "Goal added successfully!");
    } else {
      showMessage("error", "Please enter a goal first");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.firstName || !formData.lastName) {
        throw new Error("First name and last name are required");
      }

      const response = await fetch("http://localhost:8080/v1/update/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          ...formData,
          // Convert numeric fields
          height: parseFloat(formData.height) || 0,
          weight: parseFloat(formData.weight) || 0,
          bodyFat: parseFloat(formData.bodyFat) || 0,
        }),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to update settings");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      // Only try to parse JSON if we have a successful response
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Settings updated successfully:", data);
      }

      // Show success message
      showMessage("success", "Settings updated successfully!");
    } catch (error) {
      console.error("Error:", error);
      showMessage("error", error.message || "Failed to update settings");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {message.text && (
        <div
          className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white transition-opacity duration-500 z-50`}
        >
          {message.text}
        </div>
      )}

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Profile Settings
          </h1>
        </div>

        <div className="flex justify-center mt-20">
          <div className="relative group">
            <img
              src={profilePicture || "/default-avatar.png"}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform group-hover:scale-105"
            />
            <label className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-primary-dark transition-all transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  setProfilePicture(URL.createObjectURL(e.target.files[0]));
                  showMessage("success", "Profile picture updated!");
                }}
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
              <Personal onInputChange={handleInputChange} />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
              <ClientPhysical onInputChange={handleInputChange} />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Notification Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(notifications).map(([key, value]) => (
                <label
                  key={key}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => {
                      setNotifications({
                        ...notifications,
                        [key]: e.target.checked,
                      });
                      showMessage(
                        "success",
                        `${key} notifications ${
                          e.target.checked ? "enabled" : "disabled"
                        }`
                      );
                    }}
                    className="w-4 h-4 text-primary cursor-pointer"
                  />
                  <span className="text-gray-700">
                    {key.charAt(0).toUpperCase() + key.slice(1)} notifications
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-all hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Fitness Goals
            </h3>
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Add a new goal"
                onKeyPress={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addGoal())
                }
              />
              <button
                type="button"
                onClick={addGoal}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Goal
              </button>
            </div>
            <ul className="space-y-3">
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => {
                      const newGoals = [...goals];
                      newGoals[index].completed = !newGoals[index].completed;
                      setGoals(newGoals);
                      showMessage(
                        "success",
                        `Goal marked as ${
                          newGoals[index].completed ? "completed" : "incomplete"
                        }`
                      );
                    }}
                    className="w-5 h-5 text-primary cursor-pointer"
                  />
                  <span
                    className={`flex-1 transition-all ${
                      goal.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {goal.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const newGoals = goals.filter((_, i) => i !== index);
                      setGoals(newGoals);
                      showMessage("success", "Goal removed");
                    }}
                    className="text-red-500 hover:text-red-700 p-1 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-6">
            <button
              type="reset"
              className="px-8 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-all transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-confirmGreen text-white rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ClientSettings;
