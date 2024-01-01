import { Link } from 'react-router-dom';
import React from 'react';

const TaskList = ({tasks}) => {
    return ( 
     <>
    <div><p>You have the following tasks:</p>
      <hr />
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="list">
          <label>
            <input type="checkbox"  />
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