import{a as e,I as a,f as r,k as t,o as s,m as n,w as o,u as l,N as c,q as i,x as u,O as m,D as f,v as d,J as p}from"./ant-design-vue-Dq45QoeV.js";import{_ as v,u as b,a as g,b as y}from"./index-CO5y_9KP.js";var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};function h(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?Object(arguments[a]):{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(a){O(e,a,r[a])}))}return e}function O(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var j=function(r,t){var s=h({},r,t.attrs);return e(a,h({},s,{icon:w}),null)};j.displayName="LockOutlined",j.inheritAttrs=!1;var _={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function x(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?Object(arguments[a]):{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(a){P(e,a,r[a])}))}return e}function P(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}var S=function(r,t){var s=x({},r,t.attrs);return e(a,x({},s,{icon:_}),null)};S.displayName="UserOutlined",S.inheritAttrs=!1;const z={class:"login-wrapper"},k={class:"system-title"},q={class:"flex justify-center"},A=v({__name:"index",setup(a){const v=b(),w=g(),h=y(),O=h.state.system,_={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"密码长度必须在8-16位之间",trigger:"blur"},{validator:(e,a)=>/^(?=.*\d+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[`~!@#$%^&()_+\-={}|:"<>?[\];',./\\]+)[A-Za-z\d`~!@#$%^&()_+\-={}|:"<>?[\];',./\\]{8,16}$/.test(a)?Promise.resolve():Promise.reject(new Error("密码必须包含至少一位大写字母、一位小写字母、一个特殊字符、一个数字")),trigger:"blur"}]},x=r({username:"admin",password:"A123456@qq.com"}),P=t(),A=async()=>{await P.value.validate(),await h.dispatch("user/login",{});const e={...w.query},a=e.from;a?(delete e.from,v.replace({path:decodeURIComponent(a),query:e})):v.replace("/"),p.success("登录成功")};return(a,r)=>(s(),n("div",z,[e(l(c),{model:x,rules:_,ref_key:"formRef",ref:P,"label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",class:"login-form"},{default:o((()=>[i("div",k,u(l(O).systemName),1),e(l(c).Item,{label:"用户名",name:"username"},{default:o((()=>[e(l(m),{value:x.username,"onUpdate:value":r[0]||(r[0]=e=>x.username=e),placeholder:"请输入用户名",allowClear:""},{prefix:o((()=>[e(l(S))])),_:1},8,["value"])])),_:1}),e(l(c).Item,{label:"密码",name:"password"},{default:o((()=>[e(l(m),{type:"password",value:x.password,"onUpdate:value":r[1]||(r[1]=e=>x.password=e),"show-password":"",placeholder:"请输入密码",allowClear:""},{prefix:o((()=>[e(l(j))])),_:1},8,["value"])])),_:1}),i("div",q,[e(l(f),{class:"login-btn",type:"primary",onClick:A},{default:o((()=>[d(" 登录 ")])),_:1})])])),_:1},8,["model"])]))}},[["__scopeId","data-v-fee05cb8"]]);export{A as default};
