import React from "react";
import useFetch from "./useFetch";

const CT = () => {
    
    
    const { data: completedtask, error, isPending } = useFetch('http://localhost:8000/tasks/completedtasks')
    
    return ( 
        <div className="compTasks">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { completedtask && (
                <>
                <br></br>
                <div className="title"><h2>{ completedtask.title }</h2></div>
                <br></br>
                <hr></hr>

                
                <br></br>
                <div>{completedtask.description}</div>
                </>
            )}
        </div>
     );
 }
 
export default CT;