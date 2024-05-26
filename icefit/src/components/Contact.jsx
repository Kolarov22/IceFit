import React from 'react'

const  submitForm = async (e) =>{
  e.preventDefault();
 
  const formData = new FormData(e.target);
  const support = Object.fromEntries(formData);
  console.log(JSON.stringify(support));

  fetch("http://localhost:8080/v1/support/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(support),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parsing the response body as JSON
    })
    .then((data) => {
      console.log("Success:", data); // Handling the response data
    })
    .catch((error) => {
      console.error("Error:", error); // Handling any errors that occur
    });
}

const Contact = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-primary text-3xl font-poppins font-bold pb-20">
          CONTACT US
        </h1>
        <form className="flex flex-col w-3/4 lg:w-2/4 font-poppins" onSubmit={submitForm} action="">
          <label htmlFor="name">Enter Name</label>
          <input
            className="border-solid border-black border-2"
            type="text"
            name="name"
            id="name"
          />
          <br />
          <label htmlFor="email">Enter Email</label>
          <input
            className="border-solid border-black border-2"
            type="email"
            name="email"
            id="email"
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            className="border-solid border-black border-2"
            name="message"
            id="msg"
            cols="30"
            rows="10"
          ></textarea>
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
}

export default Contact