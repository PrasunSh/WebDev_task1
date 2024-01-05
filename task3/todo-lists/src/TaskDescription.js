import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React from "react";

const TaskDescription = () => {
  const { id } = useParams();
  const { data: task, error, isPending} = useFetch('http://localhost:8000/tasks/' + id);

  // const { data: completedtask, error:error2, isPending:pend2 } = useFetch('http://localhost:8000/completedtasks/');


  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  // const DeleteUpdation = (e) =>{
  //   e.preventDefault();
  //   const task = { title, description };

  //   fetch('http://localhost:8000/deletedtasks/', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(task)
  //   }).then(() => {
  //     history.push('/');
  //   })
  // }

  // const exeFunc = () => {
  //   handleClick();
  //   handleDelete();
  // }

  return (
    <div className="taskdesc">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { task && (
        <>
        <br></br>
          <div className="title"><h2>{ task.title }</h2></div>
          <br></br>
          <hr></hr>

          
          <br></br>
          <div>{task.description}</div>
          <div className="delete"><button onClick={handleClick}>Delete Task</button></div>
          </>
      )}
    </div>
  );
}
 
export default TaskDescription;