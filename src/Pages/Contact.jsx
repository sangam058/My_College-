import React from 'react'

const Contact = () => {
  return (
    <>
     <div className='max-w-4xl mx-auto px-6 py-16 '>
      <h1 className='text-4xl font-bold text-center text-blue-700'>Contact US</h1>
      <div className='grid md:grid-cols-2 gap-8 mt-10'>
        <div>
          <h2 className='text-2xl font-bold'>College Address</h2>
          <p className='mt-4 text-gray-600'>123 College Road,Mumbai,Maharashtra</p>
          <p className='mt-3'>
            📞+91 9876543210
          </p>
          <p className='mt-3'>
            📧info@myCollege.com
          </p>
        </div>

        <form action="">

          <input
           type='text'
           placeholder='Your Name'
           className='w-full border p-3 rounded mb-4'
          />

          <input
          type='email'
          placeholder='Your Email'
          className='w-full border p-3 rounded mb-4'
          />

          <textarea 
           placeholder='Your Message'
           className='w-full border p-3 rounded mb-4'
           rows="5"
          ></textarea>

          <button className='bg-blue-700 text-white px-6 py-3 rounded'>
            Send Message
          </button>

          
        </form>
      </div>
     </div>
    </>
  )
}

export default Contact
