import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import Hello from "./containers/hello";
import Counter from "./containers/counter";
import AsyncCounter from "./containers/async_counter";
import QiitaButton from "./containers/qiita_button";
import reducer from "./reducers";

import "bootstrap";
import "./index.scss";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
const rootEl = document.getElementById("root");
 
ReactDOM.render(
    <Provider store={store}>
      <Hello />
      <Counter />
      <AsyncCounter />
      <QiitaButton />
    </Provider>,
    rootEl
);
