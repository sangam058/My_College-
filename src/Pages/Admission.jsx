import React from 'react'

const Admission = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center text-blue-700">
        Admission Form
      </h1>

      <form className="bg-white shadow-lg p-8 rounded-lg mt-10">

        <label>Student Name</label>
        <input
          type="text"
          className="w-full border p-3 rounded mt-2 mb-5"
          placeholder="Enter your name"
        />


        <label>Email</label>

        <input
          type="email"
          className="w-full border p-3 rounded mt-2 mb-5"
          placeholder="Enter your email"
        />


        <label>Phone</label>

        <input
          type="tel"
          className="w-full border p-3 rounded mt-2 mb-5"
          placeholder="Enter your phone number"
        />


        <label>Select Course</label>

        <select className="w-full border p-3 rounded mt-2 mb-5">

          <option>Select Course</option>
          <option>B.Sc Computer Science</option>
          <option>B.Com</option>
          <option>B.A</option>
          <option>BBA</option>

        </select>
        <button className="bg-blue-700 text-white px-6 py-3 rounded">
          Submit Application
        </button>

      </form>

    </div>
  )
}

export default Admission
