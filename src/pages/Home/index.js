import React, { Component } from "react";
import myRouter from "./../../router/utils";
import { serverWorkTypesRequest } from "./../../apis";
import { Button } from "antd-mobile";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {

    }
    goPage1 = () => {
        myRouter.push({
            vm: this,
            path: "/page1"
        });
    }
    render() {
        return (
            <>
                <Button onClick={this.goPage1}
                    type="primary">primary</Button>
                {this.props.location.pathname}
            </>
        );
    }
}

export default Home;