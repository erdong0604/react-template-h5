import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <span>{this.props.location.pathname}</span>
        );
    }
}

export default List;