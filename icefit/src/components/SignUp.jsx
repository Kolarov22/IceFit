import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className="m-4 content-center">
        <p className="flex justify-end text-gray-400 my-10">Already have an account?<Link to="/signin" className="text-primary mx-2 font-medium"href="">Sign In</Link></p>
        <div className="flex text-gray-400 justify-center items-center font-poppins">
            <form action="" className="flex flex-col items-left gap-1 w-3/4 lg:w-2/4">
                <h1 className="text-black text-2xl my-3">Create Account</h1>
                <label htmlFor="name">Name</label><input className="border border-gray-400 rounded-md w-full h-10 bg-gray-50" type="text" name="" id="name" /><br />
                <label htmlFor="email">Email</label><input className="border border-gray-400 rounded-md w-full h-10 bg-gray-50" type="email" name="" id="email" /><br />
                <label htmlFor="password">Password</label><input className="border border-gray-400 rounded-md w-full h-10 bg-gray-50" type="password" name="" id="password" /><br />
                <span><input className="accent-primary" type="checkbox" name="termsAndPolicies" id="TOS" /> <span>I agree to the <a className="text-primary font-medium"href="">Terms</a> and <a className="text-primary font-medium"href="">Privacy Policy</a></span></span>
                <div className="flex justify-between gap-20 mt-16">
                    <input className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium  py-3"type="button" value="Sign Up As Client" />
                    <input className="bg-primary w-2/3 text-wrap rounded-md text-white font-poppins text-sm font-medium  py-3"type="button" value="Sign Up As Instructor" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default SignIn