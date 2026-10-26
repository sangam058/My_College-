import React from 'react'
import Courses from './Courses';

const About = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 px-6'>
        <h1 className='text-4xl font-bold text-blue-700 text-center '>About our college</h1>
        <p className='mt-6 text-gray-600 text-lg'>

             My College is committed to providing quality education
        and developing students with knowledge, skills and values.

        </p>
        <p className='mt-4 text-gray-300 text-lg'>

              Our college provides modern facilities, experienced faculty
        and various academic and extracurricular activities.

        </p>
        <div className='grid md:grid-cols-3 gap-6 mt-10'>
            <div className='bg-blue-150 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold'>5000+</h2>
                <p>Students</p>


            </div>
            <div className='bg-blue-150 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold '>100+</h2>
                <p>Faculty Members</p>


            </div>
            <div className='bg-blue-150 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold '>25+</h2>
                <p>Courses</p>


            </div>


        </div>

       
      
    </div>
  )
}

export default About
