import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import ClientRow from "./ClientRow";
import { useState } from "react";

const InstructorDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/v1/training/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Training plan created successfully");
        // Clear form after successful submission
        setFormData({
          name: "",
          description: "",
          price: "",
        });
      } else {
        console.error("Failed to create training plan");
      }
    } catch (error) {
      console.error("Error creating training plan:", error);
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-lg  w-full md:w-3/4 mx-auto font-poppins my-20 py-5">
      <div className="flex justify-between items-center gap-5 px-5">
        <h1 className="font-bold text-black">Clients</h1>
        <div className="flex justify-between gap-4">
          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              className="bg-inherit w-full focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </span>

          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center  text-gray-500">
            <p>Last 30 days</p>
            <ChevronDownIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div>
          <ul className="flex justify-between items-center gap-4 text-gray-400 text-sm py-2 border-b border-gray-300 px-5">
            <li className="basis-1/3">Client name</li>
            <div className="flex justify-around gap-3 basis-2/3">
              <li>Training Plan</li>
              <li>Price</li>
              <li>Nutrition</li>
              <li>Medical history</li>
            </div>
          </ul>
          <ClientRow
            client="John"
            name="cariceps"
            nutrition="vegan"
            price={30}
            medicalHistory="illest"
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Training Plan
          </button>
        </div>
      </form>
    </section>
  );
};

export default InstructorDashboard;
