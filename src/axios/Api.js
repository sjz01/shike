//接口的配置
 const showapi_appid = '100960'
 const showapi_sign = '7eb84dcfcebe47f09a88af220a551b7a'
 const classpath = 'http://route.showapi.com/1164-2'
 const imgpath = 'http://route.showapi.com/1164-1'
//配置路径

//api接口实现的get  post 公用方法

// post方法总入口
function myPost(vue){
    var param = new URLSearchParams();
    param.append('showapi_appid', "101064");
    param.append("showapi_sign", "aac7679ea2754daab3c11ee13a135a37");
    return vue.axios.post(classpath,param);
}

function getcmenu(vue) {
    return myPost(vue,classpath,{});
}

export default {
    getcmenu
}