import React from "react";
import { connect } from "react-redux";
import AsyncCounter from "../components/async_counter";
import { asyncIncrement, asyncDecrement} from "../actions";

function mapStateToProps(state) {
  return {async_value: state.async_value};
}

function mapDispatchToProps(dispatch) {
  return {
    onAsyncIncrement: () => { dispatch(asyncIncrement()) },
    onAsyncDecrement: () => { dispatch(asyncDecrement()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncCounter);
