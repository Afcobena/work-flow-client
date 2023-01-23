import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      
      <Link to="/">Home</Link>
      <Link to="/todos">List of To Dos</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>

    </div>
  )
}

export default Navbar