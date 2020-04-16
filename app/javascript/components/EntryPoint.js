import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './others/About';
import Report from './reports/Report';
import TaskBoard from './tasks/TaskBoard';

import { AppProvider, AppConsumer, InitialState } from '../context/store';


const EntryPoint = () => {
  
    const addNewTask = (task) => {
      const tasks = store.tasks;
      tasks.push(task);
      setStore({ ...store, tasks: tasks});
    }

    const completeTheTask = (task) => {
      const tasks = store.tasks;
      const taskIndex = tasks.findIndex((item => item.id == task.id));
      if (taskIndex > -1){
        tasks[taskIndex].status = 1;
        setStore({ ...store, tasks: tasks});
      }
    }
    const [store, setStore] = useState({...InitialState, addNewTask: addNewTask, completeTheTask: completeTheTask });

    return (
        <AppProvider value={store}>
            <Router>
              <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/report">Report</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">React context</Link>
                      </li>
                    </ul>
                  </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/report">
                      <Report />
                    </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <TaskBoard />
                  </Route>
                </Switch>
              </div>
            </Router>
        </AppProvider>
    );
}

export default EntryPoint
