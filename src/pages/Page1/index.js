import React, { Component } from "react";

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
    }
    render() {
        return (
            <span>{this.props.location.pathname}</span>
        );
    }
}

export default Mine;