import { useState } from "react";

const InstructorSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    speciality: "",
    certifications: "",
    experience: "",
    aboutMe: "",
    availability: {
      monday: { start: "", end: "" },
      tuesday: { start: "", end: "" },
      wednesday: { start: "", end: "" },
      thursday: { start: "", end: "" },
      friday: { start: "", end: "" },
      saturday: { start: "", end: "" },
      sunday: { start: "", end: "" },
    },
    preferredWorkoutTypes: [],
    profilePicture: null,
    socialLinks: {
      linkedin: "",
      instagram: "",
      website: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (day, type, value) => {
    setFormData((prevData) => ({
      ...prevData,
      availability: {
        ...prevData.availability,
        [day]: {
          ...prevData.availability[day],
          [type]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:8080/v1/update/instructor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update settings");
      }

      setMessage({ type: "success", text: "Settings updated successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="overflow-auto max-h-max my-5">
      {message.text && (
        <div
          className={`p-4 mb-4 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 py-16 px-10">
          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Professional Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Speciality"
                className="w-full p-2 border rounded"
                value={formData.speciality}
                onChange={(e) =>
                  handleInputChange("speciality", e.target.value)
                }
              />
              <textarea
                placeholder="Certifications"
                className="w-full p-2 border rounded h-24"
                value={formData.certifications}
                onChange={(e) =>
                  handleInputChange("certifications", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Years of Experience"
                className="w-full p-2 border rounded"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
              />
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="space-y-6 col-span-full">
            <h2 className="text-xl font-semibold">Availability Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(formData.availability).map((day) => (
                <div key={day} className="flex items-center gap-2">
                  <span className="w-24 capitalize">{day}</span>
                  <input
                    type="time"
                    className="p-2 border rounded"
                    value={formData.availability[day].start}
                    onChange={(e) =>
                      handleAvailabilityChange(day, "start", e.target.value)
                    }
                  />
                  <span>to</span>
                  <input
                    type="time"
                    className="p-2 border rounded"
                    value={formData.availability[day].end}
                    onChange={(e) =>
                      handleAvailabilityChange(day, "end", e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
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
            disabled={isSubmitting}
            className="bg-confirmGreen rounded-md text-white font-medium py-2 px-6 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default InstructorSettings;
