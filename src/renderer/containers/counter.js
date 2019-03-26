import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../actions';

function mapStateToProps(state) {
  return {value: state.value};
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => { dispatch(increment()) },
    onDecrement: () => { dispatch(decrement()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
