import React from 'react'

const Navbar = () => {
  return (
    <nav className="lg:mx-20 flex items-center justify-between  border-primary border-b-2 pt-5 mx-2">
        <div className="logo text-primary font-aldrich text-4xl lg:text-5xl">IceFit</div>
            <div className="links flex items-center justify-between gap-10">
                <div>
                    <ul className="flex items-center justify-between px-10 gap-16 text-primary font-poppins text-base font-medium">
                        <li><a href="">About</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div className="buttons flex items-center gap-5 text-primary">
                    <button className='text-sm font-medium'>Sign In</button>
                    <button className="bg-primary rounded text-white font-poppins text-sm font-medium px-1 py-2 md:px-4">Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar