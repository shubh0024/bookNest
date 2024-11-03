import React from 'react';
import { useAuth } from '../../context/Auth';
import { toast } from 'react-toastify';

function Logout () {
    const [authUser,setAuthUser] = useAuth()
    
    const handleLogout = async () => {
    try{
     if(authUser.user!=null){
       setAuthUser({
    ...authUser,
  user:null
   })
}
   localStorage.removeItem('Users');
   toast.success('User logged out');

   setTimeout(()=>{
    window.location.reload();
   },2000)
    }
    catch(err){
        console.log(err);
    toast.error(err.message+"internal error occurred at logout");
    setTimeout(()=>{},2000)
    }
}

  return (
    <div>
      <button onClick={handleLogout} className='px-3 py-2 bg-red-900 text-white rounded-md cursor-pointer' > Logout</button>
    </div>
  )
}

export default Logout;
