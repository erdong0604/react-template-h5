import React from "react";
import ReactDOM from "react-dom";
import App from "./App";//引入这个组件
import * as serviceWorker from "./serviceWorker";
import "./index.less";
// require("./setupProxy");
ReactDOM.render (<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();