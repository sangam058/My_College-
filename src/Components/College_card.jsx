import React from 'react'

const College_card = ({tittle,description}) => {
  return (
    <>
    <div className='bg-amber-300'>
      <h2 className='text-2xl font-bold text-blue-700'>{tittle}</h2>
      <p className='text-grey-600 mt-3'>{description}</p>
      <button className='bg-blue-600 text-white px-4 pt-2  rounded mt-4'>Learn More</button>
    </div>
    </>
  )
}

export default College_card
