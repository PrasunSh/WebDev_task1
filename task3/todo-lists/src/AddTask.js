import { useState } from "react";
import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
import { useContext } from "react";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const history = useHistory();

    return ( 
        <div className="addtask">
            <form >
                <label>Task</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Task description</label>
                <textarea
                value={body}
                placeholder="Add a task description! (optional)"
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <button>Add Task</button>
            </form>
        </div>
     );
}
 
export default AddTask;