import React from "react"
import PropTypes from "prop-types"
class EntryPoint extends React.Component {
  render () {
    return (
      <React.Fragment>
        Welcome Message: {this.props.welcomeMessage}
      </React.Fragment>
    );
  }
}

EntryPoint.propTypes = {
  welcomeMessage: PropTypes.string
};
export default EntryPoint
