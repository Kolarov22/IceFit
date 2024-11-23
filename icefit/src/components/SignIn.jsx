import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/v2/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed: " + response.statusText);
      }

      const data = await response.json();
      console.log("Login successful! JWT:", data.jwt);
      localStorage.setItem("token", data.jwt);
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.ROLES;
        if (userRole === "ROLE_INSTRUCTOR") {
          window.location.href = "/instructor/dashboard";
        } else if (userRole === "ROLE_CLIENT") {
          window.location.href = "/client/dashboard";
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="content-center h-full">
      <div className="flex text-gray-400 justify-center items-center font-poppins">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-left gap-1 w-2/3 lg:w-1/3"
        >
          <h1 className="text-black text-2xl my-3">
            Sign In To Your IceFit Account
          </h1>
          <label htmlFor="email">Username</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50 p-1"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 rounded-md w-full h-10 bg-gray-50 p-1"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <input
            className="bg-primary text-wrap rounded-md text-white font-poppins text-sm font-medium py-3 mt-20"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    </section>
  );
};

export default SignIn;
