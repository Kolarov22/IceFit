import { useState } from "react";

const validateForm = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
};

const submitForm = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  const errors = validateForm(data);
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  fetch("http://localhost:8080/v1/support/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const Contact = () => {
  const [formErrors, setFormErrors] = useState({});

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-primary text-3xl font-poppins font-bold pb-20">
          CONTACT US
        </h1>
        <form
          className="flex flex-col w-3/4 lg:w-2/4 font-poppins"
          onSubmit={submitForm}
          action=""
        >
          <label htmlFor="name">Enter Name</label>
          <input
            className="border-solid border-black border-2"
            type="text"
            name="name"
            id="name"
          />
          {formErrors.name && <span className="text-red-500 text-sm">{formErrors.name}</span>}
          <br />
          <label htmlFor="email">Enter Email</label>
          <input
            className="border-solid border-black border-2"
            type="email"
            name="email"
            id="email"
          />
          {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            className="border-solid border-black border-2"
            name="message"
            id="msg"
            cols="30"
            rows="10"
          ></textarea>
          {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
          <br />
          <input
            className="bg-primary rounded text-white font-poppins text-sm font-medium  py-2 md:px-4 w-1/6 place-self-center"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
