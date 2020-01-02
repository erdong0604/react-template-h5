/**
 * @author chenM
 * @description axios拦截器
 */
import axios from "axios";
import { Toast } from "antd-mobile";
import { apiBaseUrl } from "./myGlobal";

Toast.config({ duration: 1, });
// console.log(process.env.BASE_API);

// 请求前拦截
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {

        return Promise.reject(err);
    }
);

// 返回后拦截
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response);
    },
    err => {
        Toast.offline("网络连接失败");
        return Promise.reject(err);
    }
);

/**
 * @description post 请求
 * @url 请求url
 * @params 请求参数
 * @isLoading 是否显示loading状态
 */
const postRequest = ({ url, params = {}, isLoading = true }) => {
    Toast.loading("Loading...", 10);
    url = `${apiBaseUrl}${url}`;
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {

            Toast.hide();
            //这里处理一些状态码
            if(res.data.ret !== 200){
                Toast.fail("网络连接失败");
                reject(res);
            }else{
                resolve(res.data);
                // if(response.data.data.code !== 0){
                //     Toast.info(response.data.data.msg);
                // }
                // return Promise.resolve(response.data);
            }

        }, err => {
            reject(err);
        });
    });
};


export {
    postRequest
};