"use strict";(self["webpackChunkvue2_element_admin"]=self["webpackChunkvue2_element_admin"]||[]).push([[287],{2287:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var n=function(){var e=this,a=e._self._c;return a("main-panel",{attrs:{loading:e.isPageLoading}},[a("div",{staticClass:"pb-15"},[a("el-button",{attrs:{type:"primary"},on:{click:e.queryTableData}},[e._v(" 搜索 ")])],1),a("div",{staticClass:"table-wrapper"},[a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"120","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄","min-width":"120","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"地址","min-width":"120","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){let{row:n}=t;return[a("el-button",{attrs:{type:"text"},on:{click:()=>e.handleDialogShow(n)}},[e._v("查看详情")])]}}])})],1)],1),a("div",{staticClass:"pagination-wrapper"},[a("el-pagination",{attrs:{"current-page":e.pagination.current,"page-size":e.pagination.size,total:e.pagination.total,"page-sizes":[10,20,50,100,200,300],layout:"total, sizes, prev, pager, next, jumper",background:"","hide-on-single-page":""},on:{"update:currentPage":function(a){return e.$set(e.pagination,"current",a)},"update:current-page":function(a){return e.$set(e.pagination,"current",a)},"update:pageSize":function(a){return e.$set(e.pagination,"size",a)},"update:page-size":function(a){return e.$set(e.pagination,"size",a)},"current-change":e.handlePageChange,"size-change":e.handlePageSizeChange}})],1),a("my-dialog",{attrs:{visible:e.isDialogShow,drawer:"",width:"500px",title:"弹层"},on:{"update:visible":function(a){e.isDialogShow=a},confirm:e.onConfirm,cancel:e.onCancel}},e._l(e.rowDetail,(function(t,n){return a("p",{key:n},[e._v(e._s(t))])})),0)],1)},i=[],o=(t(4780),{data(){return{isPageLoading:!1,tableData:[],pagination:{total:0,current:1,size:10},isDialogShow:!1,rowDetail:{}}},methods:{queryTableData(){this.isPageLoading=!0,setTimeout((()=>{const{list:e,pagination:a}=this.getTableResult();this.tableData=e,this.pagination=a,this.isPageLoading=!1}),1500)},getTableResult(){return{list:[{name:"John Brown",age:32,address:"New York No. 1 Lake Park, New York No. 1 Lake Park"},{name:"Jim Green",age:42,address:"London No. 2 Lake Park, London No. 2 Lake Park"},{name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park, Sidney No. 1 Lake Park"}],pagination:{...this.pagination,total:400,current:2}}},handlePageChange(e){this.pagination.current=e,this.queryTableData()},handlePageSizeChange(e){this.pagination.current=1,this.pagination.size=e,this.queryTableData()},handleDialogShow(e){this.isDialogShow=!0,this.rowDetail=e},onConfirm(){},onCancel(){}}}),r=o,l=t(1001),s=(0,l.Z)(r,n,i,!1,null,"227ddce6",null),g=s.exports}}]);