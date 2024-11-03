import React,{createContext, useContext,useState} from 'react'

export const AuthContext=createContext()
export default function Auth({children}) {
 const Authuser= localStorage.getItem('Users');

 const [authUser,setAuthUser] = useState(
    Authuser?JSON.parse(Authuser) : undefined
 );
 return (
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
 )
}
export const useAuth = () =>useContext(AuthContext);









// import React, { createContext, useContext, useState, useEffect } from 'react';

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//     const [authUser, setAuthUser] = useState();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('User');
//         if (storedUser) {
//             setAuthUser(JSON.parse(storedUser));
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={[authUser, setAuthUser]}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);
