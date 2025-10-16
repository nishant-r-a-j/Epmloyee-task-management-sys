import React, { createContext, useEffect, useState } from "react";
import { getlocalstorage, setlocalstorage } from "../utils/localstorage";
export const AuthContext=createContext()
const AuthProvider=({children})=>{
    const [userdata,setUserData]=useState(null);
    useEffect(()=>{
        setlocalstorage()
        const {employee}=getlocalstorage()
        setUserData(employee)
    },[])
    return <div>
        <AuthContext.Provider value={[userdata,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
    
}

export default AuthProvider