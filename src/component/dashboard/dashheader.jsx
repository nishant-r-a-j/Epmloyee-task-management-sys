import React from "react";
import { setlocalstorage } from "../../utils/localstorage";
const Header=(props)=>{
      const user = JSON.parse(localStorage.getItem("LoggedInUser"));
  const Logout=()=>{
    localStorage.setItem('LoggedInUser','')
   props.changeuser('')
  }  
    return   <div className="emphead">
                <div className="emptexts">
                <h2 id="greet">Hello</h2>
                <h1 id="empname">{user?.data?.firstName || "Guest"}  🖐️</h1>
                </div>
                <button onClick={Logout} id="logoutbtn">Logout</button>
             </div>
}
export default Header