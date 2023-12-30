import { useState } from "react";

const Listarea = () => {
  const [tasks, setTasks] = useState([
    { title: "Task 1" },
    { title: "Task 2" }
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { title: newTask }];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
    }
  };

  return (
    <div className="listarea">
      <p>You have the following tasks:</p>
      <hr />
      {tasks.map((task, index) => (
        <div key={index} className="list">
          <label>
            <input type="checkbox" />
            {task.title}
          </label>
        </div>
      ))}
      <div className="addtask">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Listarea;
