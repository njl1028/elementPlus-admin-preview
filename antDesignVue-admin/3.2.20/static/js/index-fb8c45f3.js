import{d as a,l as e,g as t,h as l,o,a as s,w as d,t as i,b as n,u as r,K as u,x as c,Z as p,q as v,F as g,A as m,$ as f,Q as y,R as h,n as w,_ as b}from"./ant-design-vue-0954d8bd.js";import{M as k}from"./MainPanel-e655263d.js";import{_}from"./MyDrawer-e11059e9.js";import{g as x,p as z,_ as S}from"./index-0962f18f.js";const I=a=>z("",a);const C={class:"pb-15"},j={class:"table-wrapper"},U={key:0,class:"pagination-wrapper"},D=a({name:"ExamplePage"});var F=S(Object.assign(D,{setup(a){const z=[{title:"ID",key:"ID",dataIndex:"ID"},{title:"数据1",key:"data1",dataIndex:"data1"},{title:"数据2",key:"data2",dataIndex:"data2"},{title:"操作",key:"op",dataIndex:"op"}];z.forEach((a=>a.align="center"));const S=e([]),D=e({total:0,page:1,pageSize:10}),F=a=>{D.value={...D.value,page:a},A()},O=(a,e)=>{D.value={...D.value,page:1,pageSize:e},A()},q=e(!1),A=async()=>{q.value=!0;const{page:a,pageSize:e}=D.value,t={page:a,pageSize:e},l=await(a=>x("",a))(t).catch((a=>{q.value=!1})),o=null==l?void 0:l.data;if(o){const{list:a,...e}=o,{page:t,pageSize:l,total:s}=e;S.value=a,D.value={...D.value,page:t,pageSize:l,total:s}}q.value=!1};A();const M=t({data1:"",data2:""}),$=t({title:l((()=>$[$.method])),method:"",id:"",add:"新增",edit:"修改"}),E=e(),P=e(!1),R=e(!1),B=(a,e)=>{(a=>{if(!a)return;const e=a=>Object.prototype.toString.call(a).slice(8,-1);for(const t in a){const l=a[t];Array.isArray(l)?a[t]=[]:"Object"===e(l)?a[t]={}:"Boolean"===e(l)?a[t]=!1:"Number"===e(l)?a[t]=0:a[t]=""}})(M),$.method=a,P.value=!0,w((()=>{var t;null==(t=E.value)||t.resetFields(),"edit"===a&&(((a={},e={})=>{for(const t in a)a[t]=e[t]})(M,e),$.id=e.id)}))},K=e(!1),N=e({}),Q=async()=>{if(await E.value.validateFields()){R.value=!0;try{"add"===$.method?await(async()=>{const a=await I(M);(null==a?void 0:a.data)&&b.success("新增数据成功")})():"edit"===$.method&&await(async()=>{const a=await I($.id);(null==a?void 0:a.data)&&b.success("修改数据成功")})(),R.value=!1,P.value=!1}catch(a){R.value=!1}}};return(a,e)=>(o(),s(k,{loading:q.value},{default:d((()=>[i("div",C,[n(r(u),{type:"primary",onClick:e[0]||(e[0]=a=>B("add"))},{default:d((()=>[c(" 添加数据 ")])),_:1})]),i("div",j,[n(r(p),{columns:z,"data-source":S.value,"row-key":a=>a.id,pagination:!1,bordered:!0,scroll:{x:!0},"row-class-name":"text-center"},{bodyCell:d((({column:a,record:e})=>["op"===a.dataIndex?(o(),v(g,{key:0},[n(r(u),{type:"link",onClick:()=>{return a=e,K.value=!0,void(N.value=a);var a}},{default:d((()=>[c("查看详情")])),_:2},1032,["onClick"]),n(r(u),{type:"link",onClick:()=>B("edit",e)},{default:d((()=>[c("编辑")])),_:2},1032,["onClick"])],64)):m("",!0)])),_:1},8,["data-source","row-key"]),D.value.total?(o(),v("div",U,[n(r(f),{current:D.value.page,"onUpdate:current":e[1]||(e[1]=a=>D.value.page=a),"page-size":D.value.pageSize,"onUpdate:pageSize":e[2]||(e[2]=a=>D.value.pageSize=a),total:D.value.total,"show-size-changer":"","show-total":a=>`总共 ${a} 条数据`,onChange:F,onShowSizeChange:O},null,8,["current","page-size","total","show-total"])])):m("",!0)]),n(_,{visible:P.value,"onUpdate:visible":e[5]||(e[5]=a=>P.value=a),"get-container":a.$el,width:"500px",title:$.title,onOnConfirm:Q},{default:d((()=>[n(r(y),{model:M,ref_key:"exampleFormRef",ref:E,"label-col":{span:4},"wrapper-col":{span:12},autocomplete:"off"},{default:d((()=>[n(r(y).Item,{label:"数据1",name:"data1",rules:[{required:!0,message:"请输入数据1"}]},{default:d((()=>[n(r(h),{placeholder:"请输入数据1",value:M.data1,"onUpdate:value":e[3]||(e[3]=a=>M.data1=a)},null,8,["value"])])),_:1}),n(r(y).Item,{label:"数据2",name:"data2",rules:[{required:!0,message:"请输入数据2"}]},{default:d((()=>[n(r(h),{placeholder:"请输入数据2",value:M.data2,"onUpdate:value":e[4]||(e[4]=a=>M.data2=a)},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","get-container","title"])])),_:1},8,["loading"]))}}),[["__scopeId","data-v-276f1a57"]]);export{F as default};