import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import list from '../../public/list.json'
import Course from '../components/Course'

const Courses = () => {

    console.log(list)
  return (
    <>
    <Navbar/>
    <Course/>
    <Footer/>
    </>
  )
}

export default Courses
