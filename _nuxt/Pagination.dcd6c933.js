import{d as l,_ as g,o as r,g as n,b as t,n as i,q as o,F as p,j as u,t as d}from"./entry.af507ca5.js";const c=l({props:{items:{type:Array,default:[]},countOfPage:{type:Number,default:8},paginationClass:{type:String},style_2:{type:Boolean,default:!1}},data(){return{currPage:1}},computed:{filteredRows(){return this.items},pageStart(){return(this.currPage-1)*this.countOfPage},totalPage(){return Math.ceil(this.filteredRows.length/this.countOfPage)}},methods:{setPage(e){e<=0||e>this.totalPage||(this.currPage=e,window.scrollTo(0,0),this.$emit("paginatedData",this.filteredRows,this.pageStart,this.countOfPage))}},mounted(){this.$emit("paginatedData",this.filteredRows,this.pageStart,this.countOfPage)},setup(){return{}}}),f={class:"basic-pagination"},h=t("a",{href:"#"},[t("i",{class:"fal fa-angle-left"})],-1),P=[h],m=["onClick"],y=t("a",{href:"#"},[t("i",{class:"fal fa-angle-right"})],-1),$=[y];function v(e,s,w,k,_,C){return r(),n("div",{class:i(`shop-pagination-wrapper ${e.style_2?"":"d-md-flex justify-content-between align-items-center"}`)},[t("div",f,[t("ul",null,[t("li",{class:i(["page-item",{disabled:e.currPage===1}]),onClick:s[0]||(s[0]=o(a=>e.setPage(e.currPage-1),["prevent"]))},P,2),(r(!0),n(p,null,u(e.totalPage,a=>(r(),n("li",{class:"page-item",onClick:o(b=>e.setPage(a),["prevent"]),key:a},[t("a",{class:i(["page-link",{active:e.currPage===a}]),href:""},d(a),3)],8,m))),128)),t("li",{class:i(["page-item",{disabled:e.currPage===e.totalPage}]),onClick:s[1]||(s[1]=o(a=>e.setPage(e.currPage+1),["prevent"]))},$,2)])])],2)}const S=g(c,[["render",v]]);export{S as P};
