import React from 'react'
import Home from './Home.jsx/Home';
import Course from './components/Course';
import {Routes ,Route} from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Courses from './courses/Courses';
import Signup from './components/Signup';



function App() {
  return (
    <>
    <div className='dark:slate-900 dark:text-white'>




       <Routes>
        <Route path="/" element={  <Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        
      
       </Routes>
  
       </div>

    
    
    </>
 
  )
}

export default App
