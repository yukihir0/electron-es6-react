import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            Clicked: {this.props.value} times
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="col btn btn-outline-primary btn-block" onClick={this.props.onIncrement}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="col btn btn-outline-primary btn-block" onClick={this.props.onDecrement}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
