//接口的配置
 const showapi_appid = '101276'
 const showapi_sign = '3e12d1d7180140bba0400a170d192bc9'
 const classpath = 'http://route.showapi.com/1164-2'
 const imgpath = 'http://route.showapi.com/1164-1'
const sc = 'http://123.56.195.82:9999'
const like_path = '/updateFavorite'
const getlike_path = '/getFavorite'
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
    param.append('showapi_appid', showapi_appid);
    param.append("showapi_sign", showapi_sign);
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


function getVde (vue,type,id){
    var id = id+','+type;
    var param = new URLSearchParams();
    param.append('userName', localStorage.userName);
    param.append("password", localStorage.password);
    param.append('question', localStorage.question);
    param.append("answer", localStorage.answer);
    param.append("id", id);
    return vue.axios.post(sc+like_path,param);
}

function getV (vue){
    var param = new URLSearchParams();
    param.append('userName', localStorage.userName);
    param.append("password", localStorage.password);
    return vue.axios.post(sc+getlike_path,param);
}
export default {
    getcmenu,getDetail,getVdetail,getVde,getV
}