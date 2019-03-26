const initState = { value: 0 };

export default (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        value: state.value + 1
      });
    case 'DECREMENT':
      return Object.assign({}, state, {
          value: state.value - 1
      });
    default:
      return state;
  }
};
