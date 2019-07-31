//接口的配置
 const showapi_appid = '101226'
 const showapi_sign = '6d4920a562cd4d73a7e1c7c03c056ba6'
 const classpath = 'http://route.showapi.com/1164-2'
 const imgpath = 'http://route.showapi.com/1164-1'
const sc = 'http://123.56.195.82:9999'
const like_path = '/updateFavorite'
const getlike_path = '/getFavorite'
//注册
const regi_path = '/register'
//登录
const login_path = '/login'
//重置密码时验证用户名
const resetpwd_path = '/existUser'
//重置密码
const rewrite_path = '/updatePassword'

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

//收藏
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
//获取收藏
function getV (vue){
    var param = new URLSearchParams();
    param.append('userName', localStorage.userName);
    param.append("password", localStorage.password);
    return vue.axios.post(sc+getlike_path,param);
}
//注册
function register (vue,userName,password,question,answer){
    var userName = userName;
    var password = password;
    var question = question;
    var answer = answer;
    var param = new URLSearchParams();
    param.append('userName',userName);
    param.append('password',password);
    param.append('question',question);
    param.append('answer',answer);

    return vue.axios.post(regi_path,param);
}
//登录
function login (vue,userName,password){
    var userName = userName;
    var password = password;
    var param = new URLSearchParams();
    param.append('userName',userName);
    param.append('password',password);
    return vue.axios.post(login_path,param);
}
//找回密码时验证用户名
function resetpwd(vue,userName){
    var userName = userName;
    var param = new URLSearchParams();
    param.append('userName',userName);
    return vue.axios.post(resetpwd_path,param);
}
//重置密码
function rewrite(vue,userName,password,question,answer,favorite){
    var userName = userName;
    var password = password;
    var question = question;
    var answer = answer;
    var favorite = favorite;
    var param = new URLSearchParams();
    param.append('userName',userName);
    param.append('password',password);
    param.append('question',question);
    param.append('answer',answer);
    param.append('favorite',favorite);
    return vue.axios.post(rewrite_path,param);
}

export default {
    getcmenu,getDetail,getVdetail,getVde,getV,register,login,resetpwd,rewrite
}