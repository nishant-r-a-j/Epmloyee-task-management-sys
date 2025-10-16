import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authprovider";

const CreateTask=()=>{
   const [userdata,setUserData]=useContext(AuthContext);

      const [taskTitle,settitle]=useState('');
        const [taskDate,setdate]=useState('');
        const [emp,setemp]=useState('');
        const [category,setcat]=useState('');
        const [taskDescription,setdesc]=useState('');


    const submitHandler=(e)=>{
      e.preventDefault();
      
      console.log("task created");

      const newTask=({taskTitle,taskDate,category,taskDescription,active:false,newTask:true,failed:false,completed:false})
     
      const data=userdata;
      data.forEach((elem)=>{
        if(emp==elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask=elem.taskCounts.newTask+1;
        }
      })
      
      console.log(data)
      setUserData(data);
      

       settitle('');
       setdate('');
       setemp('');
       setcat('');
       setdesc('');

    }
    return <>
     <form action="" onSubmit={submitHandler}>
            <div className="task-form">
                <div className="form-left">
                    <label>Task Title</label>
                    <input type="text" placeholder="Make a UI design" value={taskTitle} onChange={(e)=>{settitle(e.target.value)}}  required></input>
                    <label>Date</label>
                    <input type="date"  value={taskDate} onChange={(e)=>{setdate(e.target.value)}} required></input>
                    <label>Assign To</label>
                    <input type="text" placeholder="employee name"  value={emp} onChange={(e)=>{setemp(e.target.value)}} required></input>
                    <label>Category</label>
                    <input type="text" placeholder="Design , Dev etc"  value={category} onChange={(e)=>{setcat(e.target.value)}} required></input>
                </div>
                <div className="form-right">
                     <label>Description</label><br></br>
                    <textarea name="" id=""  value={taskDescription} onChange={(e)=>{setdesc(e.target.value)}} required></textarea>
                    <button id="ctask-btn">Create Task</button>
                </div>
            </div>
                </form>
    </>
}
export default CreateTask