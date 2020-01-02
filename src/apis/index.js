import { postRequest } from "../common/http";
import { apiEnter } from "./../common/myGlobal";

//获取全部服务工种
const serverWorkTypesRequest = (options) => {
    let curl = "EnterpriseApp_Staff_GetWorkType";
    const url = `${apiEnter}${curl}`;
    return postRequest({ ...options, url });
};


export {
    serverWorkTypesRequest
};