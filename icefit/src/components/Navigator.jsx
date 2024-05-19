import React from 'react'
import {Link} from 'react-router-dom'

const Navigator = () => {
  return (
    <nav className="flex py-3 items-center justify-center  bg-primary h-16">
        <ul className="flex gap-16 md:gap-32 text-white md:text-xl font-poppins font-semibold">
            <li><Link to="/instructor/dashboard">Dashboard</Link></li>
            <li><a href="">Chat</a></li>
            <li><Link to="/instructor/settings">Settings</Link></li>
            <li><Link to="/support">Support</Link></li>
        </ul>
    </nav>
  )
}

export default Navigator