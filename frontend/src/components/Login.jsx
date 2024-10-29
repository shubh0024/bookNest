import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-lg flex justify-center align-center text-green-500">
            Login
          </h3>
          <div className="">
            <div className="flex">
              <label className="block text-sm text-gray-500">
                Email
                <input
                
                  className="input w-full px-3 py-2 text-gray-700 border-b-2 
        border-gray-700 focus:outline-none focus:border-green-500"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </label>
            </div>
            <div className="flex mt-4">
              <label className="block text-sm text-gray-500">
                Password
                <input
                 
                  className="input w-full px-3 py-2 text-gray-700 border-b-2 border-gray-700 focus:outline-none focus:border-green-600"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}

                />
                <br/>
                {errors.password&& (<span className="text-sm text-red-500">This field is required</span>)}
              </label>
              
            </div>
            <div className="flex mt-4 flex justify-between">
              <button className="bg-green-500 rounded-md m-1  p-2 text-white hover:bg-green-700 duration-300 transition-300">
                Login
              </button>

              <p className="text-gray-500 my-3 hover:text-green-800 ">
                Not regsitered ?{" "}
                <Link to={"/signup"} className="text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
           
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
