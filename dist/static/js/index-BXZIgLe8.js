import{_ as e}from"./MainPanel-DfVXhZ_V.js";import{_ as a}from"./MyDrawer-C7j_3iKX.js";import{r as o,o as r,c as n,w as t,x as l,L as s,b as i,T as d,J as p,W as u,S as g,g as c,a1 as m,ae as k,ag as v,ah as f,U as w}from"./element-plus-isXO1GUe.js";import{_}from"./index-F_KMTIgB.js";import"./index-BVedQxmo.js";const h={class:"pb-15"},z={class:"table-wrapper"},b={class:"pagination-wrapper"},y=_({__name:"index",setup(_){const y=o([]),L=o({total:0,current:1,size:10}),C=o(!1),N=e=>{L.value={...L.value,current:e},x()},P=e=>{L.value={...L.value,current:1,size:e},x()},x=()=>{C.value=!0,setTimeout((()=>{const{list:e,pagination:a}={list:[{name:"John Brown",age:32,address:"New York No. 1 Lake Park, New York No. 1 Lake Park"},{name:"Jim Green",age:42,address:"London No. 2 Lake Park, London No. 2 Lake Park"},{name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park, Sidney No. 1 Lake Park"}],pagination:{...l(L),total:400,current:2}};y.value=e,a.value=a,C.value=!1}),1500)},j=o(!1),S=o({}),J=()=>{},U=()=>{};return(o,_)=>{const V=m,B=k,M=v,T=f,Y=a,D=e;return r(),n(D,{loading:l(C)},{default:t((()=>[s("div",h,[i(V,{type:"primary",onClick:x},{default:t((()=>[d(" 搜索 ")])),_:1})]),s("div",z,[i(M,{data:l(y),border:""},{default:t((()=>[i(B,{prop:"name",label:"姓名","min-width":"120","show-overflow-tooltip":"",align:"center"}),i(B,{prop:"age",label:"年龄","min-width":"120","show-overflow-tooltip":"",align:"center"}),i(B,{prop:"address",label:"地址","min-width":"120","show-overflow-tooltip":"",align:"center"}),i(B,{label:"操作",fixed:"right",align:"center"},{default:t((({row:e})=>[i(V,{link:"",type:"primary",onClick:()=>(e=>{j.value=!0,S.value=e})(e)},{default:t((()=>[d(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),s("div",b,[i(T,{"current-page":l(L).current,"onUpdate:currentPage":_[0]||(_[0]=e=>l(L).current=e),"page-size":l(L).size,"onUpdate:pageSize":_[1]||(_[1]=e=>l(L).size=e),total:l(L).total,"page-sizes":[10,20,50,100,200,300],layout:"total, sizes, prev, pager, next, jumper",background:"","hide-on-single-page":"",onCurrentChange:N,onSizeChange:P},null,8,["current-page","page-size","total"])]),i(Y,{modelValue:l(j),"onUpdate:modelValue":_[2]||(_[2]=e=>c(j)?j.value=e:null),title:"弹层",onConfirm:J,onCancel:U},{default:t((()=>[(r(!0),p(g,null,u(l(S),((e,a)=>(r(),p("p",{key:a},w(e),1)))),128))])),_:1},8,["modelValue"])])),_:1},8,["loading"])}}},[["__scopeId","data-v-740e6577"]]);export{y as default};
