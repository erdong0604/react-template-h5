import React, { Component } from "react";
import "./App.less";
import { Provider } from "react-redux";
import store from "./redux/store";
import RouterComponent from "./router";
class App extends Component {
    state = {  }
    componentDidMount() {
    }
    render() {
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;

