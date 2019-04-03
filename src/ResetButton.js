import React, { Component } from 'react'
import { connect } from 'react-redux';

 class ResetButton extends Component {
   resetCounter() {
     const action = {
       type: 'RESET'
     }
     this.props.dispatch(action);
   }
  render() {
    return (
      <div>
        <button onClick={() => this.resetCounter()}> Reset Counter From {this.props.count} </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(ResetButton);