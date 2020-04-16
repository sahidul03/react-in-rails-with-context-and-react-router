import React from "react"

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
            task: {
                id: new Date().valueOf(),
                title: '',
                status: 0
            }
        };
    }

    handleChange = (e) => {
        const task = this.state.task;
        task[e.target.name] = e.target.value;
        this.setState({task})
    }
  
    submitForm = () => {
        if (!this.state.task.title) {
            return alert("Title can't be empty!");
        }

        this.props.context.addNewTask(this.state.task);

        this.setState({ task: { id: new Date().valueOf(), title: '', status: 0 } });
        document.getElementById('title').value='';
    }
    render () {
        return (
            <div className="card">
                <div className="card-header text-center">Add a new task</div>
                <div className="card-body">
                    <div className="form-group">
                        <input name="title" id="title" type="text" onChange={this.handleChange} className="input-sm form-control" placeholder="Task Title"/>
                    </div>
                    <button type="button"
                        onClick={this.submitForm}
                        disabled={!this.state.task.title} 
                        className="btn-sm btn btn-primary">Add Task</button>
                </div>
            </div>
        );
    }
}

export default AddTask;
