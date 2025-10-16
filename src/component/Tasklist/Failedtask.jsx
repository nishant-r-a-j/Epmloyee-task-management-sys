import React from "react";
const Failedtask=(({data})=>{
    return <div className="task-card">
                    <div className="tsec1">
                        <div className="prior">{data.category}</div>
                        <h3 className="date">{data.taskDate}</h3>
                    </div>
                    <h1>{data.taskTitle}</h1>
                    <p className="task-desc">{data.taskDescription}</p>
                    <div className="mark-btn-sec">
                     <button className="failed-btn">Failed</button>
                      </div>
                </div>
})
export default Failedtask