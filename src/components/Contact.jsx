import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <Link to="/">Go back to Home</Link>
        <Link to="/about">Go to About Page</Link>
        <Link to="/contact">Go to Contact Page</Link>
    </div>
  )
}

export default Contact