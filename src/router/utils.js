/**
 * @author 路由工具
 *
 */
class myRouter {
    //跳转
    /**
     * @param vm :当前组件
     * @param path :跳转的路由名称
     * @param params :参数
     */
    static push({
        vm,
        path,
        params = {}
    }){
        let paramsObject = Object.entries(params);
        let search = paramsObject.map((v, i) => {
            if(i === 0){
                return `?${v[0]}=${v[1]}`;
            }
            return `&${v[0]}=${v[1]}`;
        }).join("");

        let newPath = `${path}${search}`;
        vm.props.history.push(newPath);
    }

    /**
     * @description 获取url参数值
     * @param name url参数名称
     */
    static getParam(name){
        if(!name) return null;
        let url = new URL(window.location);
        let query = url.searchParams;
        return query.get(name);
    }
    /**
     * @param vm :当前组件
     * @description 获取当前组件路由名称
     */
    static getCurrentRoute(vm){
        return vm.props.location.pathname;
    }
}

export default myRouter;