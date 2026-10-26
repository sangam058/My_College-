import React from 'react'
import  {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className = 'bg-blue-700 text-white px-8 py-4'>
    <div className='max-w-7xl ma-auto flex justify-between item-center'>
      <h1 className='text-2xl font-bold'> My College</h1>
      <div className='flex gap-6'>

      <Link to ="/">Home</Link> 
      <Link to ="/about">About</Link>
      <Link to ="/courses">Courses</Link>
      <Link to ="/admission">Admission</Link>
      <Link to ="/faculty">Faculty</Link>
      <Link to ="/contact">Contact</Link>
      
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
