import React from "react";
import Header from "./dashheader";
import CreateTask from "./createtask";
const Admindash=(props)=>{
    return <>
            <Header changeuser={props.changeuser}/>
            <CreateTask/>
               
    </>
}
export default Admindash