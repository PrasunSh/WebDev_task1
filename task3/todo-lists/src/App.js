import WalkingMan from "./WalkingMan";
import Header from "./Header";
import Listarea from "./ListArea";
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import TaskDescription from "./TaskDescription";
import CT from "./completedTask";
import DT from "./DeletedTask";


function App() {
  return (
    <Router>
    <div className="App">
      <div className="headnav">
        <Header />
        <NavBar />
      </div>
      <hr></hr>
      <Switch>
      <div className="content">
        <Route exact path="/create">
          <AddTask />
        </Route>
        {/* <Route exact path="/history">
          <CT />
          <DT />
        </Route> */}
        <Route exact path="/">
          <Listarea />
          <WalkingMan />
        </Route>
        <Route path="/tasks/:id">
              <Listarea />
              <TaskDescription  />
            </Route>
        </div>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
