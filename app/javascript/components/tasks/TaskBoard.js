import React from "react"
import { AppConsumer } from '../../context/store';
import AddTask from './AddTask';

const Tasks = () =>
    <AppConsumer>
        { context =>
            <div className="row mt-4">
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <h4>Tasks List</h4>
                    <ul className="list-group list-group-flush border-grey">
                      {context.tasks.map((task, index) => <TaskItem context={context} key={index} task={task}/>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <AddTask context={context}/>
              </div>
            </div>
        }
    </AppConsumer>


const TaskItem = (props) =>
  <li className={"list-group-item list-group-item-action " + (props.task.status ? 'text-success' : '')}>
    {props.task.title}
      <button type="button" 
        onClick={() => props.context.completeTheTask(props.task)}
        className={"btn btn-sm float-right " + (props.task.status ? 'btn-success' : 'btn-primary')}>
        { props.task.status ? 'Completed' : 'Click to complete' }
      </button>
  </li>

class TaskBoard extends React.Component {
  render () {
    return (
        <Tasks/>
    );
  }
}

export default TaskBoard
