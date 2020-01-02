/**
 * @author chenM
 * @description 底部tabbar
 * @date
 */
import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./index.less";
import myRouter from "./../../router/utils";
import tabBarItems from "./config.js";
import { connect } from "react-redux";
class MyTabBar extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            tabBarItems: tabBarItems,
            currentPath: "/"
        };
    }
    componentDidMount() {
    }
    //点击tabbar
    handleClickItem = (path) => {
        this.setState({
            currentPath: path
        });
        myRouter.push({
            vm: this,
            path,
        });
    }

    render() {
        const { tabBarItems } = this.state;
        const { currentPath } = this.props;
        return (
            <footer className={"tabBarItemContainer"}>
                <ul className={"tabBarItemList"}>
                    {
                        tabBarItems.map((item, index) => {
                            let isSelect = currentPath === item.path;
                            return(
                                <li className={`tabBarItem ${isSelect&&"tabBarItemSelect"}`}
                                    key={index}
                                    onClick={() => this.handleClickItem(item.path)}>
                                    <p className={`${isSelect&&"tabBarItemTextSelect"}`}>{item.name}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </footer>
        );
    }
}
const mapStateToProps = state => {
    return {
        currentPath: state.currentPath
    };
};
export default connect(mapStateToProps)(MyTabBar);