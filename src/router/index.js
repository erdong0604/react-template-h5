import React, { Component } from "react";
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
// import { createBrowserHistory } from "history";
import routerMap from "./config";
import MyTabBar from "./../components/MyTabBar";
import preCondition from "./preCondition";
import Enter from "./../pages/Enter";
import Home from "./../pages/Home";
class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        console.log(this.props);
    }
    handleSetTitle = (title) => {
        document.title = title;
    }
    render() {
        return (
            <BrowserRouter>
                <Route render={
                    (props) => {
                        return(
                            <Enter {...props}>
                                {
                                    routerMap.map((item, index) => {
                                        let RouteCom =  preCondition(() => this.handleSetTitle(item.title), item.component );
                                        return <Route
                                            exact
                                            key={index}
                                            path={item.path}
                                            render={(props) => {
                                                return <RouteCom {...props}/>;
                                            }}
                                            sensitive>
                                        </Route>;
                                    })
                                }
                            </Enter>
                        );
                    }
                }>
                </Route>
            </BrowserRouter>
        );
    }
}

export default RouterComponent;
