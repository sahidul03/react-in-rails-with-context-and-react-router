import React from "react"
class About extends React.Component {
  render () {
    return (
      <div className="row mt-4">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
          <h5>Context</h5>
          <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About
