export function increment() {
  return { type: "INCREMENT" };
}
 
export function decrement() {
  return { type: "DECREMENT" };
}

export function asyncIncrement() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: "ASYNC_INCREMENT"});
    }, 1000);
  };
}

export function asyncDecrement() {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: "ASYNC_DECREMENT"});
    }, 1000);
  };
}
