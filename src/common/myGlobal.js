/**
 * @author chenM
 * @description 全局变量
 *
 */


//正式环境api地址
const proApiBaseUrl = "http://api.jiafuyun.com/enterpriseapp/?service=";

//测试环境api地址
const sandboxApiBaseUrl = "http://sandbox.api.jiafuyun.com/enterpriseapp/?service=";

//本地api地址
const devApiBaseUrl = "http://192.168.100.37/jiafuyun_api/enterpriseapp/?service=";
let apiEnter = "";

let apiBaseUrl = "";
let debug = process.env.NODE_ENV;

if(debug === "development"){
    apiBaseUrl = "";
    apiEnter = "/api/enterpriseapp/?service=";
}else{
    apiBaseUrl = proApiBaseUrl;
    apiEnter = "/enterpriseapp/?service=";
}
/**
 * @apiBaseUrl api地址
 */
export{
    apiBaseUrl,
    apiEnter
};
