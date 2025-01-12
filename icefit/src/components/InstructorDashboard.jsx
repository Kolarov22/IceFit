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
    startTime: "",
    frequency: "weekly"
  });

  const [stats, setStats] = useState({
    totalClients: 0,
    activeClients: 0,
    completedSessions: 0
  });

  const [clientStats, setClientStats] = useState({
    recentlyJoined: [],
    upcomingSessions: [],
    clientProgress: {}
  });

  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
          startTime: "",
          frequency: "weekly"
        });
      } else {
        console.error("Failed to create training plan");
      }
    } catch (error) {
      console.error("Error creating training plan:", error);
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-lg w-full md:w-3/4 mx-auto font-poppins my-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-semibold">Total Clients</h3>
          <p className="text-2xl font-bold">{stats.totalClients}</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-semibold">Active Clients</h3>
          <p className="text-2xl font-bold">{stats.activeClients}</p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="font-semibold">Completed Sessions</h3>
          <p className="text-2xl font-bold">{stats.completedSessions}</p>
        </div>
      </div>

      <div className="mt-8 px-5">
        <h2 className="font-bold text-xl mb-4">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clientStats.upcomingSessions.map((session, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">{session.clientName}</p>
              <p className="text-gray-600">{session.date}</p>
              <p className="text-gray-600">{session.planName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 px-5 mt-6">
        <h1 className="font-bold text-black">Clients</h1>
        <div className="flex justify-between gap-4">
          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input
              className="bg-inherit w-full focus:outline-none"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
            />
          </span>

          <div className="flex gap-2">
            <button 
              className={`px-3 py-1 rounded ${filterStatus === 'all' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setFilterStatus('all')}
            >
              All
            </button>
            <button 
              className={`px-3 py-1 rounded ${filterStatus === 'active' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setFilterStatus('active')}
            >
              Active
            </button>
          </div>

          <span className="bg-gray-100 rounded-lg flex p-1 gap-1 items-center text-gray-500">
            <p>Last 30 days</p>
            <ChevronDownIcon className="h-5 w-5" />
          </span>
        </div>
      </div>

      <div className="mt-8">
        <ul className="flex justify-between items-center gap-4 text-gray-400 text-sm py-2 border-b border-gray-300 px-5">
          <li className="basis-1/4">Client name</li>
          <div className="flex justify-around gap-3 basis-3/4">
            <li>Training Plan</li>
            <li>Progress</li>
            <li>Last Session</li>
            <li>Actions</li>
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

      <div className="mt-8">
        <h2 className="font-bold text-xl mb-4 px-5">Create Training Plan</h2>
        <form className="px-5" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
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
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Schedule
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                className="shadow border rounded px-3 py-2"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
              <select 
                className="shadow border rounded px-3 py-2"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Training Plan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InstructorDashboard;
