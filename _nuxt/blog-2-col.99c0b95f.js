import{d as p,_ as m,r as a,o as s,g as d,b as e,F as b,j as h,a as n,i as B,c as w,w as $}from"./entry.fd82bdf9.js";import{L as C}from"./Layout.5ee56dc6.js";import{B as P}from"./BreadcrumbArea.ed720af8.js";import{b as v}from"./blogData.1fea4a6e.js";import{P as D}from"./Pagination.3de74f1b.js";import{B as y}from"./BlogStandardItem.4f534b96.js";import"./OffCanvas.e0a2b461.js";import"./Header.b947b8e7.js";import"./Footer.f9042b0d.js";import"./Social.297d618e.js";const S=p({components:{Pagination:D,BlogStandardItem:y},mixins:[v],data(){return{filteredRows:[],pageStart:0,countOfPage:4}},methods:{paginatedData(t,r,l){this.filteredRows=t,this.pageStart=r,this.countOfPage=l}},setup(){return{}}}),k={class:"blog__area pt-100 pb-100"},L={class:"container"},O={class:"row"},R={class:"row"},x={class:"col-xl-12"};function A(t,r,l,_,g,u){const i=a("blog-standard-item"),c=a("pagination");return s(),d("section",k,[e("div",L,[e("div",O,[(s(!0),d(b,null,h(t.filteredRows.slice(t.pageStart,t.pageStart+t.countOfPage),(o,f)=>(s(),d("div",{key:f,class:"col-xl-6 col-lg-6 col-md-6"},[n(i,{blog:o,style_2:!0},null,8,["blog"])]))),128))]),e("div",R,[e("div",x,[n(c,{items:t.blogData.filter(o=>o.blog==="blog-standard"),"count-of-page":4,onPaginatedData:t.paginatedData},null,8,["items","onPaginatedData"])])])])])}const F=m(S,[["render",A]]),N=p({components:{Layout:C,BreadcrumbArea:P,BlogTwoColArea:F},setup(){B({title:"Blog 2 Col"})}});function V(t,r,l,_,g,u){const i=a("breadcrumb-area"),c=a("blog-two-col-area"),o=a("layout");return s(),w(o,{transparent:!0},{default:$(()=>[n(i,{title:"Blog 2 Column",subtitle:"Blog 2 Column"}),n(c)]),_:1})}const M=m(N,[["render",V]]);export{M as default};
