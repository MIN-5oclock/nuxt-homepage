import{_ as d}from"./OffCanvas.7fd537d1.js";import{d as i,_,o as b,g as c,b as o,a as l,w as t,n,e as r,t as a}from"./entry.af507ca5.js";const g=i({props:{blog:{type:Object,default:{},required:!0},style_2:{type:Boolean,default:!1},style_3:{type:Boolean,default:!1}}}),f={class:"blog__thumb fix"},p=["src"],m={class:"blog__content"},u=["innerHTML"],h={class:"blog__meta"},y={href:"#"};function $(e,B,v,k,w,C){const s=d;return b(),c("div",{class:n(`blog__item mb-60 ${e.style_2?"":"blog__border-bottom pb-60"}`)},[o("div",f,[l(s,{href:`/blog-details/${e.blog.id}`,class:"w-img"},{default:t(()=>[o("img",{src:e.blog.img,alt:"blog"},null,8,p)]),_:1},8,["href"])]),o("div",m,[o("h4",{class:n(`${e.style_3?"":"blog__title"}`)},[l(s,{href:`/blog-details/${e.blog.id}`},{default:t(()=>[o("span",{innerHTML:e.blog.title},null,8,u)]),_:1},8,["href"])],2),o("div",h,[o("span",null,[r("By "),o("a",y,a(e.blog.author),1)]),o("span",null,"/ "+a(e.blog.date),1)]),o("p",null,a(e.style_3?e.blog.desc.slice(0,80):e.blog.desc)+" [...]",1),l(s,{href:`/blog-details/${e.blog.id}`,class:"os-btn"},{default:t(()=>[r("read more")]),_:1},8,["href"])])],2)}const V=_(g,[["render",$]]);export{V as B};
