import React, { Component } from "react";

function preCondition(condition, WrappedComponent) {
    return class Aaaa extends Component {
        UNSAFE_componentWillMount(){
            condition();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default preCondition;