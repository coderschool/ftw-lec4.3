import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  increment() {
    const action = {
      type: 'INCREMENT'
    }
    this.props.dispatch(action);
  }
  decrement() {
    const action = {
      type: 'DECREMENT'
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        I've been pressed {this.props.count} times.
        <button onClick={() => this.increment()}> Click Me </button>
        <button onClick={() => this.decrement()}> Click Me </button>
     
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);
