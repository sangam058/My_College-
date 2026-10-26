import React from 'react'
import Navbar from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import Admission from "../src/Pages/Admission"
import Contact from "../src/Pages/Contact"
import Courses from "../src/Pages/Courses"
import Faculty from "../src/Pages/Faculty"
import College_card from './Components/College_card'
import Footer from '../src/Components/Footer'


const App = () => {
  return (
    <div>
      
      <Navbar/>
      {/* <College_card/> */}

     
      
      <Routes>

        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element ={<About/>} />
       
        <Route path='/admission' element ={<Admission/>} />
        <Route path='/courses' element ={<Courses/>} />
        <Route path='/contact' element ={<Contact/>} />
        <Route path = '/faculty' element ={<Faculty/>} />



      </Routes>

      <Footer/>
    </div>
  )
}

export default App
