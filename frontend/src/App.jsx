import React from 'react'
import Home from './Home.jsx/Home';
import Course from './components/Course';
import {Routes ,Route, Navigate} from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { useAuth } from '../context/Auth';
import { ToastContainer } from 'react-toastify';

function App() {
  const [authuser,setAuthUser]=useAuth();
console.log(authuser)
  return (
    <>
    <div className='dark:slate-900 dark:text-white'>




       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authuser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        
    </Routes>
  <ToastContainer/>
       </div>

    
    
    </>
 
  )
}

export default App
