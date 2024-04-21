import React from 'react'

const Navigator = () => {
  return (
    <nav className="flex py-3 items-center justify-center  bg-primary h-16">
        <ul className="flex gap-16 md:gap-32 text-white md:text-xl font-poppins font-semibold">
            <li><a href="">Dashboard</a></li>
            <li><a href="">Chat</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">Support</a></li>
        </ul>
    </nav>
  )
}

export default Navigator