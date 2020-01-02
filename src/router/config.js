import Home from "./../pages/Home";
import List from "./../pages/List";
import Mine from "./../pages/Mine";
import Page1 from "./../pages/Page1";

const routerMap = [
    {
        component: Home,
        title: "首页",
        path: "/"
    },
    {
        component: List,
        title: "列表",
        path: "/list"
    },
    {
        component: Mine,
        title: "我的",
        path: "/mine"
    },
    {
        component: Mine,
        title: "page1",
        path: "/page1"
    }

];

export default routerMap;