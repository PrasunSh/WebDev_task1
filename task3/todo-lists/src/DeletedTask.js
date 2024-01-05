import React from "react";
import useFetch from "./useFetch";

const DT = () => {

    const { data: deletedtask, error, isPending } = useFetch('http://localhost:8000/tasks/deletedtasks')


    return ( 
        <div className="compTasks">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { deletedtask && (
                <>
                <br></br>
                <div className="title"><h2>{ deletedtask.title }</h2></div>
                <br></br>
                <hr></hr>

                
                <br></br>
                <div>{deletedtask.description}</div>
                </>
            )}
        </div>
     );
}
 
export default DT;