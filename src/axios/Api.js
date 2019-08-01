//接口的配置
 const showapi_appid = "101276"
 const showapi_sign = '3e12d1d7180140bba0400a170d192bc9'
 const classpath = 'http://route.showapi.com/1164-2'
 const imgpath = 'http://route.showapi.com/1164-1'
const sc = 'http://123.56.195.82:9999'
//增加收藏或删除收藏
const like_path = '/api/updateFavorite'
//获取收藏
const getlike_path = '/api/getFavorite'
//注册
const regi_path = '/api/register'
//登录
const login_path = '/api/login'
//重置密码时验证用户名
const resetpwd_path = '/api/existUser'
//重置密码
const rewrite_path = '/api/updatePassword'
//拿到用户名对应的问题
const question_path = '/api/getInfo'
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

//增加收藏或删除收藏
function updateshou (vue,favorite){
    var param = new URLSearchParams();
    param.append('userName', localStorage.userName);
    param.append("password", localStorage.password);
    param.append('question', localStorage.question);
    param.append("answer", localStorage.answer);
    param.append("favorite", favorite);
    return vue.axios.post(like_path,param);
}
//获取收藏
function getshou (vue){
    var param = new URLSearchParams();
    param.append('userName', localStorage.userName);
    param.append("password", localStorage.password);
    return vue.axios.post(getlike_path,param);
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
    param.append('favorite','');

    return vue.axios.post(regi_path,param);
}
//登录
function login (vue,userName,password){
    // var userName = userName;
    // var password = password;
    var param = new URLSearchParams();
    param.append('userName',userName);
    param.append('password',password);
    param.append('favoriter',1);
    return vue.axios.post(login_path,param);
}
//找回密码时验证用户名"
function resetpwd(vue,userName){
    var userName = userName;
    var param = new URLSearchParams();
    param.append('userName',userName);
    return vue.axios.post(resetpwd_path,param);
}
//重置密码
function rewrite(vue,userName,password,question,answer){
    var param = new URLSearchParams();
    param.append('userName',userName);
    param.append('password',password);
    param.append('question',question);
    param.append('answer',answer);
    param.append('favorite',"");
    return vue.axios.post(rewrite_path,param);
}
//拿到问题
function question(vue,userName){
    var param = new URLSearchParams();
    param.append('userName',userName);
    return vue.axios.post(question_path,param);
}


export default {
    getcmenu,getDetail,getVdetail,getshou,updateshou,register,login,resetpwd,rewrite,question
}