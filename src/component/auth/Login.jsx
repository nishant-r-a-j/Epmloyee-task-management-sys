import React, { useState } from "react";


function Login({handleLogin}){
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const formhand=(e)=>{
            e.preventDefault()
            handleLogin(email,pass) 
          //  setemail('')
           // setpass('')
    }


    return <div className="Login">
        <h1>Log In</h1>
                <form onSubmit={formhand} action="">
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" required className="linp" placeholder="Email"></input>
                    <input value={pass} onChange={(e)=>{setpass(e.target.value)}} type="password" required className="linp" placeholder="Password"></input>
                    <div className="remsec">
                        <div>
                    <input type="checkbox"/>
                    <label> Remember me</label>
                    </div>
                    <label className="forgt">Forgotpass</label>
                    </div>
                    <button id="logbtn">Login</button>
                </form>
    </div>
}
export default Login