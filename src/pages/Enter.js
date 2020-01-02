import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentPath } from "./../redux/actions";
import MyTabBar from "./../components/MyTabBar";
import tabBarMapConfig from "./../components/MyTabBar/config";
class Enter extends Component {
    state = {  }
    componentDidMount() {
        console.log(this.context);
        this.props.dispatch(getCurrentPath(this.props.location.pathname));
        this.props.history.listen((route) => {
            this.props.dispatch(getCurrentPath(route.pathname));
        });
    }
    render() {
        const { currentPath } = this.props;
        let isShowTabBar = tabBarMapConfig.some(v => v.path === currentPath);
        return (
            <>
                {this.props.children}
                {/* tabbar */}
                {
                    isShowTabBar&&<MyTabBar {...this.props}/>
                }
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        currentPath: state.currentPath
    };
};
export default connect(mapStateToProps)(Enter);

