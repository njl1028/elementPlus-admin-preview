import{o as e,c as a,w as o,L as l,an as s,T as t,U as n,V as c,_ as d,x as r,y as i,a1 as p,aN as f}from"./element-plus-DF9tb4vq.js";const u={class:"el-drawer-wrapper"},m={class:"footer"},y=i({name:"MyDrawer"}),w=Object.assign(y,{props:{loading:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},confirmText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},closeOnClickModal:{type:Boolean,default:!1}},emits:["update:modelValue","confirm","cancel"],setup(i,{emit:y}){const w=i,{closeOnClickModal:g,closeOnPressEscape:k,value:C}=w,x=y,h=()=>{x("confirm")},b=()=>{x("update:modelValue",!1),x("cancel")};return(y,w)=>{const C=p,x=f;return e(),a(x,d({class:"el-drawer-fixed","close-on-click-modal":r(g),"close-on-press-escape":r(k)},y.$attrs,{onClose:b}),{default:o((()=>[l("div",u,[s(y.$slots,"default")]),i.showFooter?s(y.$slots,"footer",{key:0},(()=>[l("div",m,[i.showConfirm?(e(),a(C,{key:0,loading:i.loading,disabled:i.loading,type:"primary",onClick:h},{default:o((()=>[t(n(i.confirmText),1)])),_:1},8,["loading","disabled"])):c("",!0),i.showCancel?(e(),a(C,{key:1,disabled:i.loading,onClick:b},{default:o((()=>[t(n(i.cancelText),1)])),_:1},8,["disabled"])):c("",!0)])])):c("",!0)])),_:3},16,["close-on-click-modal","close-on-press-escape"])}}});export{w as _};