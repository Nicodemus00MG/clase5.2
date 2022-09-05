import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='error404_container'>
<h1>Content not found! 🥺 </h1>
 <Link to={"/"}>Go to Home!</Link>
    </div>
  )
}

export default Error404