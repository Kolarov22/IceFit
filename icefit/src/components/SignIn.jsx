import React from 'react'

const SignIn = () => {
  return (
    <section className="content-center h-full">
        <div className="flex text-gray-400 justify-center items-center font-poppins">
            <form action="" className="flex flex-col items-left gap-1 w-2/3 lg:w-1/3">
                <h1 className="text-black text-2xl my-3">Sign In To Your IceFit Account</h1>
                <label htmlFor="email">Email</label><input className="border border-gray-400 rounded-md w-full h-10 bg-gray-50" type="email" name="" id="email" /><br />
                <label htmlFor="password">Password</label><input className="border border-gray-400 rounded-md w-full h-10 bg-gray-50" type="password" name="" id="password" /><br />
                <input className="bg-primary text-wrap rounded-md text-white font-poppins text-sm font-medium py-3 mt-20"type="button" value="Sign In" />
                   
                
            </form>
        </div>
    </section>
  )
}

export default SignIn