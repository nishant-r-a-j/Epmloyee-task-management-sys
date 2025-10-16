import React, { useContext, useEffect, useState } from "react";
import Login from "./component/auth/Login";
import Empdash from "./component/dashboard/employeedashoboard";
import Admindash from "./component/dashboard/admindashboard";
import Tasks from "./component/dashboard/tasks";
import { getlocalstorage, setlocalstorage } from "./utils/localstorage";
import { AuthContext } from "./context/authprovider";
const App=()=>{
  const [user,setUser]=useState(null)
  const [LoggedInUserdata,setLoggedInUserData]=useState(null);
  const [userdata,setUserData]=useContext(AuthContext);
  useEffect(function(){
    const LoggedInUser=localStorage.getItem('LoggedInUser')
    if(LoggedInUser){
     const UserData=JSON.parse(LoggedInUser)
     setUser(UserData.role)
     setLoggedInUserData(UserData.data)
    }
  },[])



  // useEffect(()=>{
  //   if(Authdata){
  //     const LoggedInUser=localStorage.getItem("LoggedInUser")
  //     if(LoggedInUser){
  //       setUser(LoggedInUser.role)
  //     }
  //   }
  // },[Authdata])

  const handleLogin=(email,password)=>{
  
      if(email=="admin@gmail.com" && password==123){
        setUser('Admin')
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'Admin',data:{firstName:"Admin"}}))
      }else if(userdata){
        const employee=userdata.find((e)=>email==e.email && e.password==password);
        if(employee){
            setUser('employee')
            setLoggedInUserData(employee)
          localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employee}))
        }else{
        alert('invalid credentials')
      }
      }else{
        alert('invalid credentials')
      }
  }


  // useEffect(()=>{
  //   getlocalstorage()
  // })
  return <>
      {!user ?<Login handleLogin={handleLogin} />: ''}
      {user=="Admin"?<Admindash changeuser={setUser} />: user=="employee" ? <Empdash changeuser={setUser} data={LoggedInUserdata}/> :null }
     {user=="Admin"? <Tasks/>:''}
  </>
}
export default App