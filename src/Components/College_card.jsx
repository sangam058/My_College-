import React from 'react'

const College_card = ({tittle,description}) => {
  return (
    <>
    <div className='bg-amber-300 rounded-lg'>
      <h2 className='text-2xl font-bold text-blue-700 '>{tittle}</h2>
      <p className='text-gray-600  '>{description}</p> <br />
      <button className='bg-blue-600 text-white px-4  rounded-lg mb-2'>Learn More</button>
    </div>
    </>
  )
}

export default College_card
