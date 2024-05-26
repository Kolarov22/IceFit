import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAndPolicies: false,
  });
  const [endpoint, setEndpoint] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!endpoint) {
      console.error("Endpoint not set");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const handleClientSignUp = () => {
    setEndpoint("http://localhost:8080/auth/v2/registerClient");
  };

  const handleInstructorSignUp = () => {
    setEndpoint("http://localhost:8080/auth/v2/registerInstructor");
  };

  return (
    <section className="m-4 content-center">
      <p className="flex justify-end text-gray-400 my-10">
        Already have an account?
        <Link to="/signin" className="text-primary mx-2 font-medium">
          Sign In
        </Link>
      </p>
      <div className="flex text-gray-400 justify-center items-center font-poppins">
        <form className="flex flex-col items-left gap-1 w-3/4 lg:w-2/4" onSubmit={handleSubmit}>
          <h1 className="text-black text-2xl my-3">Create Account</h1>
          <label htmlFor="name">Name</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50"
            type="text"
            name="username"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <span>
            <input
              className="accent-primary"
              type="checkbox"
              name="termsAndPolicies"
              id="TOS"
              checked={formData.termsAndPolicies}
              onChange={handleChange}
            />{" "}
            <span>
              I agree to the{" "}
              <a className="text-primary font-medium" href="">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-primary font-medium" href="">
                Privacy Policy
              </a>
            </span>
          </span>
          <div className="flex justify-between gap-20 mt-16">
            <button
              type="submit"
              className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium py-3"
              onClick={handleClientSignUp}
            >
              Sign Up As Client
            </button>
            <button
              type="submit"
              className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium py-3"
              onClick={handleInstructorSignUp}
            >
              Sign Up As Instructor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
