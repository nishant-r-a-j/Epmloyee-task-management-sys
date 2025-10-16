import React from "react";
const Completedtask=(({data})=>{
    return <div className="task-card">
                    <div className="tsec1">
                        <div className="prior">{data.category}</div>
                        <h3 className="date">{data.taskDate}</h3>
                    </div>
                    <h1>{data.taskTitle}</h1>
                    <p className="task-desc">{data.taskDescription}</p>
                    <div className="mark-btn-sec">
                     <button className="completed-btn">Completed</button>
                      </div>
                </div>
})
export default Completedtask