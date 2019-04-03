import React, { Component } from "react";

class AsyncCounter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <p>
            <div className="col">
              Clicked: {this.props.async_value} times
            </div>
          </p>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" id="btn-increment" className="col btn btn-outline-success btn-block" onClick={this.props.onAsyncIncrement}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" id="btn-decrement" className="col btn btn-outline-success btn-block" onClick={this.props.onAsyncDecrement}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AsyncCounter;
