import{d as p,_,r as e,o as s,g as d,b as o,F as h,j as B,a as c,c as m,i as $,w}from"./entry.af507ca5.js";import{L as S}from"./Layout.0527441e.js";import{B as v}from"./BreadcrumbArea.058d377e.js";import{b as P}from"./blogData.44bd5507.js";import{P as D}from"./Pagination.dcd6c933.js";import{B as y}from"./BlogStandardItem.f83a8801.js";import"./OffCanvas.7fd537d1.js";import"./Header.e0835909.js";import"./Footer.8a73a38b.js";import"./Social.1d572929.js";const N=p({components:{Pagination:D,BlogStandardItem:y},props:{left_side:{type:Boolean,default:!1}},data(){return{filteredRows:[],pageStart:0,countOfPage:9}},mixins:[P],methods:{paginatedData(t,n,r){this.filteredRows=t,this.pageStart=n,this.countOfPage=r}},setup(){return{}}}),k={class:"blog__area pt-100 pb-100"},x={class:"container"},C={class:"row"},L={class:"col-xl-8 col-lg-8 offset-xl-2 offset-lg-2"},O={class:"blog__wrapper"},R={class:"row"},A={class:"col-xl-12"};function F(t,n,r,g,f,u){const i=e("blog-standard-item"),l=e("pagination");return s(),d("section",k,[o("div",x,[o("div",C,[o("div",L,[o("div",O,[(s(!0),d(h,null,B(t.filteredRows.slice(t.pageStart,t.pageStart+t.countOfPage),(a,b)=>(s(),m(i,{key:b,blog:a},null,8,["blog"]))),128)),o("div",R,[o("div",A,[c(l,{items:t.blogData.filter(a=>a.blog==="blog-standard"),"count-of-page":3,onPaginatedData:t.paginatedData},null,8,["items","onPaginatedData"])])])])])])])])}const V=_(N,[["render",F]]),j=p({components:{Layout:S,BreadcrumbArea:v,BlogNoSidebarArea:V},setup(){$({title:"Blog"})}});function E(t,n,r,g,f,u){const i=e("breadcrumb-area"),l=e("blog-no-sidebar-area"),a=e("layout");return s(),m(a,{transparent:!0},{default:w(()=>[c(i,{title:"News & Blog",subtitle:"Blog Standard"}),c(l)]),_:1})}const U=_(j,[["render",E]]);export{U as default};
