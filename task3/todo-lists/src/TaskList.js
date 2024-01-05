import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';
import React from 'react';

const TaskList = ({tasks}) => {
  const { id } = useParams();
  const { data: task, error, isPending } = useFetch('http://localhost:8000/tasks/' + id);
  const history = useHistory();

  const handleDelete = (taskId) => {

    fetch('http://localhost:8000/tasks/' + taskId, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  // const handleCompletion = (taskId, e) => {
  //   e.preventDefault();
  //       const task = { title, description };
    
  //       fetch('http://localhost:8000/tasks/', {
  //         method: 'POST',
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(task)
  //       }).then(() => {
  //         history.push('/');
  //       })

  // }

    return ( 
     <>
    <div className="hieader"><p>You have the following tasks:</p>
      <hr />
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="list">
          <label>
            <input type="checkbox" onChange={() => handleDelete(task.id)} />
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </label>
        </div>
      ))}
    <div className="addtaskhome">
        <p> Want to add a task?<Link to="/create"> Click here.</Link></p>
    </div>
    </>
     );
}
 
export default TaskList;