//接口的配置
 const showapi_appid = '101105'
 const showapi_sign = '61383dfe18e6445c92815d23a219b39b'
 const classpath = 'http://route.showapi.com/1164-2'
 const imgpath = 'http://route.showapi.com/1164-1'
//配置路径

//api接口实现的get  post 公用方法

// post方法总入口
function myPost(vue){
    var param = new URLSearchParams();
    param.append('showapi_appid',showapi_appid);
    param.append("showapi_sign", showapi_sign);
    return vue.axios.post(classpath,param);
}
function getcmenu(vue) {
    return myPost(vue,classpath,{});
}
function getDetail(vue,type){
    // var id = id;
    var type = type;
    var param = new URLSearchParams();
<<<<<<< HEAD
    param.append('showapi_appid', "101064");
    param.append("showapi_sign", "61383dfe18e6445c92815d23a219b39b");
=======
    param.append('showapi_appid', showapi_appid);
    param.append("showapi_sign", showapi_sign);
>>>>>>> bedc423260fd5e8806e6e7e30f3b33e80d229036
    param.append('type', type);
    // param.append("id", id);
    return vue.axios.post(imgpath,param);
}
function getVdetail (vue,type,id){
    var id = id;
    var type = type;
    var param = new URLSearchParams();
    param.append('showapi_appid', showapi_appid);
    param.append("showapi_sign", showapi_sign);
    param.append('type', type);
    param.append("id", id);
    return vue.axios.post(imgpath,param);
}
export default {
    getcmenu,getDetail,getVdetail
}