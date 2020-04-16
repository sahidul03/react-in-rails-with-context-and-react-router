import React from "react";
import { AppConsumer } from '../../context/store';

class Report extends React.Component {
  render () {
    return (
      <AppConsumer>
        {
          context =>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="text-primary mb-4">Task Report</h4>
                    <h5 className="text-success">Completed Task: { context.tasks.filter(t => t.status == 1).length }</h5>
                    <h5 className="text-secondary">Inprogress Task: { context.tasks.filter(t => t.status == 0).length }</h5>
                  </div>
                </div>
              </div>
            </div>
        }
      </AppConsumer>
      
    );
  }
}

export default Report
