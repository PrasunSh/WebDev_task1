import { useState } from "react";
import 'animate.css';
import React from 'react';
import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Listarea = () => {

  const { error, isPending, data: tasks } = useFetch('http://localhost:8000/tasks')
  
  return (
    <div className="listarea animate__animated animate__backInLeft animate__delay-1s animate__fast" >

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { tasks && <TaskList tasks={tasks} /> }
    </div>
  );
};

export default Listarea;
