import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup ()  {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
    // console.log(data)
    const userInfo = {
      name :data.name,
      email : data.email,
      password : data.password
    }
    
    await axios.post('http://localhost:3000/user/signup',userInfo)
    .then((res)=>{
     console.log(res.data);
     if(res.data){
       toast.success('User registered successfully');
      
      window.location.href = '/';
     }
     localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
      console.log(err);
      toast.error('Failed to register user :'+ err.response.data.message);
      }
    });


  }
  return (
    <>
    <div className='flex h-screen  justify-center  items-center '>
   <div  className="border-[1px] shadow-md border-green-400 p-5 rounded-tl-lg rounded-br-lg w-[600px]">

  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg flex justify-center align-center text-green-500">Signup</h3>
  <div className=''>
    <div className="flex ">
      <label className="block text-sm text-gray-500">
        Email
        <input {...register("email", { required: true })}
         className="input w-full px-3 py-2 text-gray-700 border-b-2 
        border-gray-700 focus:outline-none focus:border-green-500" 
        type="email"
         placeholder="Enter your email"
          />
          <br/>
          {errors.email && <span className="text-sm text-red-500">This field is required</span>}
      </label>
    </div>
    <div className="flex mt-4">
      <label className="block text-sm text-gray-500">
        Name
        <input {...register("name", { required: true })} 
         className="input w-full px-3 py-2 text-gray-700 border-b-2 
        border-gray-700 focus:outline-none focus:border-green-500" 
        type="Text"
         placeholder="Enter your Name"
          />
          <br/>
          {errors.name && <span className="text-sm text-red-500">This field is required</span>}
      </label>
    </div>
    <div className="flex mt-4">
      <label  
      className="block text-sm text-gray-500">
        Password
        <input {...register("password", { required: true })}
        className="input w-full px-3 py-2 text-gray-700 border-b-2 border-gray-700 focus:outline-none focus:border-green-600" type="password" placeholder="Enter your password" />
        <br/>
        {errors.passoword && <span className="text-sm text-red-500">This field is required</span>}
      </label>
    </div>
    <div className="flex mt-4 flex justify-between">

        <button className='bg-green-500 rounded-md m-1  p-2 text-white hover:bg-green-700 duration-300 transition-300 flex ' >Regsiter</button>
 

<p className='text-xl-gray-500 my-3 hover:text-green-800 '>Already  regsitered ? {" "}
  <button
  className='underline text-blue-500 cursor-pointer'
  onClick={()=>document.getElementById("my_modal_3").showModal()}
  >Login
  </button> 
  <Login/>
</p>
    
    </div>
  </div>
  </form>
  </div>
</div>
</div>
    </>
  )
}

export default Signup;
