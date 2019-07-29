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
    param.append('showapi_appid', "100678");
    param.append("showapi_sign", "a3fc1e6d5e9140ff99d86ec74d30fc44");
    return vue.axios.post(classpath,param);
}
function myPostde(vue){
    var param = new URLSearchParams();
    param.append('showapi_appid', "100678");
    param.append("showapi_sign", "a3fc1e6d5e9140ff99d86ec74d30fc44");
    param.append("type",'蛋类');
    param.append('id','5c3dfddfe9b6cc65afc9427e')
    return vue.axios.post(imgpath,param);
}
function getcmenu(vue) {
    return myPost(vue,classpath,{});
}
function getDetail(vue,data){
    return myPostde(vue,imgpath,data);
}
export default {
    getcmenu,getDetail
}