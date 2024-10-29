import React from 'react'
import Courses from '../courses/Courses'
import list from '../../public/list.json'
import Card from '../components/Card'
import {Link} from 'react-router-dom'


const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 '>

      <div className='mt-28 items-center justify-ccenter text-center'>

  
     <h1>We are Delighted waiting for you {" "}
      <span className='text-green-500'></span>!</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid qui iste? Exercitationem cupiditate eligendi cumque hic dolor, voluptatem tempore iste eaque, dolores ipsa totam, reprehenderit accusantium. Accusantium, ducimus dignissimos.</p>

     <Link to="/">
     <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 transition-slow'>
      Back
     </button>
     </Link>
    

     <div className='mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

      {list.map((item)=>(
        <Card key={item.id} item={item}/>
      ))}
     </div>
  
     </div>
       </div>
       
       </>
  )
}

export default Course
