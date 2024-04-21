import React from 'react'

const Contact = () => {
  return (
    <section className="">
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-primary text-3xl font-poppins font-bold pb-20">CONTACT US</h1>
            <form className="flex flex-col w-3/4 lg:w-2/4 font-poppins"action="">
                <label htmlFor="name">Enter Name</label>
                <input className="border-solid border-black border-2" type="text" name="" id="" />
                <br />
                <label htmlFor="email">Enter Email</label>
                <input className="border-solid border-black border-2" type="email" name="" id="" />
                <br />
                <label htmlFor="message">Message</label>
                <textarea className="border-solid border-black border-2" name="" id="" cols="30" rows="10"></textarea>
                <br />
                <input className="bg-primary rounded text-white font-poppins text-sm font-medium  py-2 md:px-4 w-1/6 place-self-center"type="button" value="Send" />
            </form>
        </div>
    </section>
  )
}

export default Contact