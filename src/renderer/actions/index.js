import axios from "axios";

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

export function requestItem() {
  const url = "https://qiita.com/api/v2/items";

  return dispatch => {
    axios.get(url).then(res => {
      dispatch({type: "REQUEST_ITEM", items: res.data});
    }).catch(error => {
      dispatch({type: "REQUEST_ITEM", items: []});
    });
  };
}
