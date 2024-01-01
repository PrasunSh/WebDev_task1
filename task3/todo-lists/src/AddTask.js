import { useState } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import React from 'react';


const AddTask = () => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description };
    
        fetch('http://localhost:8000/tasks/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task)
        }).then(() => {
          history.push('/');
        })
      }

    return ( 
        <div className="addtask ">
            <form onSubmit={handleSubmit}>
                <label>Task</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Task description</label>
                <textarea
                value={description}
                placeholder="Add a task description! (optional)"
                onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                <button>Add Task</button>
            </form>
        </div>
     );
}
 
export default AddTask;