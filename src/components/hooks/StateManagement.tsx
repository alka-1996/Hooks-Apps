import React, {  useEffect, useState } from 'react'

type IPROPS={
  name?:string,
  email:string
}

export const StateManagement = () => {
    const [isLoggedIn, setIsLoggedIn]=useState<IPROPS | null>(null)
    // const [isLoggedOut, setIsLoggedOut]=useState<AuthUser | null>(null)
  const [count,setCount]=useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count -  1);
      }, 800);
    });
    
    const handleLogin=()=>{
        setIsLoggedIn({
          name:"Seema",
          email:"seema@gmail.com "
        })
    }
    const handleLogout=()=>{
      //  setIsLoggedOut
      //  ({
      //   name:"karina",
      //   email:"karina@gmail.com"
      //  })
      setIsLoggedIn(null)
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div> User is {isLoggedIn ? 'logged in' : 'logged out'}</div> */}
      <div>User name is {isLoggedIn?.name}</div>
      <div>User email is {isLoggedIn?.email}</div>
      {/* <div> user name is {isLoggedOut?.name}</div>
      <div> User email is {isLoggedOut?.email}</div> */}

      <h1>I have rendered {count} times!</h1>
     
    </div>
  )
}

export default StateManagement
