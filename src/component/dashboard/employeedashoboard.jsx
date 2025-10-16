import React from "react";
import Header from "./dashheader";
import Acceptedtask from "../Tasklist/Accepttask";
import Completedtask from "../Tasklist/Completetask";
import Failedtask from "../Tasklist/Failedtask";
import Newtask from "../Tasklist/Newtask";
const Empdash=(props)=>{
    return <>
        <Header changeuser={props.changeuser} data={props.data} />
         <div className="empdash">
             {/* task count strt */}
             <div className="taskscount">
                <div className="countbox new">
                    <h1>{props.data.taskCounts.newTask}</h1>
                    <h3>New Task</h3>
                </div>
                 <div className="countbox comp">
                      <h1>{props.data.taskCounts.completed}</h1>
                    <h3>Completed Task</h3>
                 </div>
                  <div className="countbox acpt">
                      <h1>{props.data.taskCounts.active}</h1>
                    <h3>Accepted Task</h3>
                  </div>
                   <div className="countbox fail">
                      <h1>{props.data.taskCounts.failed}</h1>
                    <h3>Failed Task</h3>
                   </div>
             </div>
              {/* task count end */}

              {/* task details start */}
              <div className="task-card-cont">
                {props.data.tasks.map((elem,idx)=>{
                   if(elem.active){
                     return <Acceptedtask key={idx} data={elem}/>
                   }
                   if(elem.newTask){
                     return <Newtask key={idx} data={elem}/>
                   }
                   if(elem.completed){
                    return <Completedtask key={idx} data={elem}/> 
                   }
                   if(elem.failed){
                    return <Failedtask key={idx} data={elem}/>
                   }
                })}
               {/* <Newtask/>
               <Acceptedtask/>
               <Acceptedtask/>
               <Failedtask/>
               <Completedtask/> */}
              </div>
               {/* task details end */}
         </div>
    </>
}
export default Empdash