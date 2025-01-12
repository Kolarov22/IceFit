import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    termsAndPolicies: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e, role) => {
    e.preventDefault();
    setError("");

    // Form validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (!formData.termsAndPolicies) {
      setError("You must accept the Terms and Privacy Policy");
      return;
    }

    const endpoint = role === 'client' 
      ? "http://localhost:8080/auth/v2/registerClient"
      : "http://localhost:8080/auth/v2/registerInstructor";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type");
      if (!response.ok) {
        const errorMessage = contentType?.includes("application/json") 
          ? (await response.json()).message 
          : "Registration failed";
        throw new Error(errorMessage);
      }

      // Only try to parse JSON if we have JSON content
      if (contentType?.includes("application/json")) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      }
      
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <section className="m-4 content-center">
      <p className="flex justify-end text-gray-400 my-10">
        Already have an account?
        <Link to="/signin" className="text-primary mx-2 font-medium">
          Sign In
        </Link>
      </p>
      
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      <div className="flex text-gray-400 justify-center items-center font-poppins">
        <form className="flex flex-col items-left gap-1 w-3/4 lg:w-2/4">
          <h1 className="text-black text-2xl my-3">Create Account</h1>
          
          <label htmlFor="username">Name</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50 p-1"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50 p-1"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50 p-1"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="my-4">
            <input
              className="accent-primary mr-2"
              type="checkbox"
              name="termsAndPolicies"
              id="termsAndPolicies"
              checked={formData.termsAndPolicies}
              onChange={handleChange}
            />
            <span>
              I agree to the{" "}
              <Link className="text-primary font-medium" to="/terms">
                Terms
              </Link>{" "}
              and{" "}
              <Link className="text-primary font-medium" to="/privacy">
                Privacy Policy
              </Link>
            </span>
          </div>

          <div className="flex justify-between gap-20 mt-16">
            <button
              type="button"
              className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium py-3"
              onClick={(e) => handleSubmit(e, 'client')}
            >
              Sign Up As Client
            </button>
            <button
              type="button"
              className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium py-3"
              onClick={(e) => handleSubmit(e, 'instructor')}
            >
              Sign Up As Instructor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
