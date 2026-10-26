import React from 'react'
import College_card from '../Components/College_card'


const Home = () => {
  return (
    <>
    {/* hero section */}
    <section className='bg-blue-100 py-20 px-6' >
      <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-5xl font-bold text-blue-800 '> Welcom to My College</h1>
        <p className='text-xl text-gray-600 mt-5'>Building future Leaders through Education</p>
        <button className='bg-blue-700 text-white px-6 py-3 rounded-lg mt-8'>Apply Now</button>
      </div>
    </section>
    
    {/* features */}

    <section className='py-16 px-6'>
      <h2 className='text-3xl font-bold text-center'>Why choose our college</h2>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10 text-center'>
        <College_card
        title="Experiance Faculty"
        description="Learn from really experianced teacher from our institue"
        />

        <College_card
        title="Modern Campus"
        description="our classroom provide modern classroom and lab"
        />

        <College_card
        title="Career support"
        description = "we help student develope skills for their future careers"
        />
      </div>
    </section>

    <section className='bg-gray-100 py-16 px-6'>
      <h2 className='text-3xl font-bold text-center'>Popular courses</h2>
      <div className='max-w-6xl mx-auot md:grid-cols-3 gap-6 mt-10 text-center ml-40'>

        <College_card
        title="Btech"
        description="It is provide extreme level of environment of coding "
        />

        <College_card
        title="Bcom"
        description="This course define the business management and accountacy"
        />

      </div>
    </section>
    </>
  )
}

export default Home
