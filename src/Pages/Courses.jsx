import React from 'react'

const Courses = () => {
  const courses =[ "B.Sc Computer Science","B.Com",
    "B.A","B.Sc Information Technology","BBA",
    "M.Sc Computer Science"];
  return (
    <div className='max-w-6xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-blue-700 text-center'>Our Courses</h1>
      <div className='grid md:grid-cols-3 gap-6 mt-10'>
        {courses.map((course,index)=>(
          <div
          key = {index}
          className='bg-white shadow-lg p-6 rounded-lg'>
            <h2 className='text-xl font-bold'>{course}</h2>
            <p className='text-gray-600 mt-3'>
              Learn industry-relevant skills and build 
            </p>
            <button className='bg-blue-600 text-white px-4 py-2 rounded mt-4'>View Course
            </button>
            </div>
        ))}
      </div>
      
    </div>
  );
}

export default Courses
