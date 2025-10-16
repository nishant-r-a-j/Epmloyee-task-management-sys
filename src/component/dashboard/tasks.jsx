import React, { useContext } from "react";
import { AuthContext } from "../../context/authprovider";
const Tasks=()=>{
    const [userdata,setUserData]=useContext(AuthContext);
    
    return <>
            <div className="tasks">
                <div className="taskhead">
                <h2>Employees</h2>
                 <h2>New Task</h2>
                  <h2>Active</h2>
                   <h2>Completed</h2>
                    <h2>Failed</h2>
                    </div>
                {userdata.map(function(elem,idx){
                   return <div className="tasks-stat" key={idx}>
                    <h2>{elem.firstName}</h2>
                     <h2>{elem.taskCounts.newTask}</h2>
                      <h2>{elem.taskCounts.active}</h2>
                       <h2>{elem.taskCounts.completed}</h2>
                      <h2>{elem.taskCounts.failed}</h2>
                </div>
                })}
             
            </div>
    </>
}
export default Tasks