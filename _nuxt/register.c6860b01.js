import{d as p,_ as u,r as o,o as b,c as g,w as _,b as e,a as s,e as l,g as w,i as v}from"./entry.af507ca5.js";import{L as x}from"./Layout.0527441e.js";import{B as E}from"./BreadcrumbArea.058d377e.js";import{_ as F}from"./OffCanvas.7fd537d1.js";import{F as y,a as N,E as B,c as R,b as d}from"./index.esm.3d539a0c.js";import"./Header.e0835909.js";import"./Footer.8a73a38b.js";import"./Social.1d572929.js";const S=p({components:{Field:y,Form:N,ErrorMessage:B},setup(){const a=R({name:d().required().label("Name"),email:d().required().email().label("Email"),password:d().required().min(6).label("Password")});function r(c,{resetForm:i}){alert(JSON.stringify(c,null,2)),i()}return{schema:a,onSubmit:r}}}),k={class:"mb-20"},q=e("label",{for:"name"},[l("Username "),e("span",null,"**")],-1),A={class:"mb-20"},C=e("label",{for:"email-id"},[l("Email Address "),e("span",null,"**")],-1),M={class:"mb-20"},V=e("label",{for:"pass"},[l("Password "),e("span",null,"**")],-1),H=e("div",{class:"mt-10"},null,-1),L=e("button",{type:"submit",class:"os-btn w-100"},"Register Now",-1),P=e("div",{class:"or-divide"},[e("span",null,"or")],-1);function U(a,r,c,i,f,h){const t=o("Field"),n=o("ErrorMessage"),m=F,$=o("Form");return b(),g($,{"validation-schema":a.schema,onSubmit:a.onSubmit},{default:_(()=>[e("div",k,[q,s(t,{name:"name",id:"name",type:"text",placeholder:"Enter Username"}),s(n,{name:"name",class:"text-danger"})]),e("div",A,[C,s(t,{name:"email",id:"email-id",type:"text",placeholder:"Email address..."}),s(n,{name:"email",class:"text-danger"})]),e("div",M,[V,s(t,{name:"password",id:"pass",type:"password",placeholder:"Enter password..."}),s(n,{name:"password",class:"text-danger"})]),H,L,P,s(m,{href:"/login",class:"os-btn os-btn-black w-100"},{default:_(()=>[l("login Now")]),_:1})]),_:1},8,["validation-schema","onSubmit"])}const J=u(S,[["render",U]]),O=p({components:{RegisterForm:J},setup(){return{}}}),T={class:"login-area pt-100 pb-100"},j={class:"container"},z={class:"row"},D={class:"col-lg-8 offset-lg-2"},G={class:"basic-login"},I=e("h3",{class:"text-center mb-60"},"Signup From Here",-1);function K(a,r,c,i,f,h){const t=o("register-form");return b(),w("section",T,[e("div",j,[e("div",z,[e("div",D,[e("div",G,[I,s(t)])])])])])}const Q=u(O,[["render",K]]),W=p({components:{Layout:x,BreadcrumbArea:E,RegisterArea:Q},setup(){v({title:"Register"})}});function X(a,r,c,i,f,h){const t=o("breadcrumb-area"),n=o("register-area"),m=o("layout");return b(),g(m,{transparent:!0},{default:_(()=>[s(t,{title:"Register",subtitle:"Register"}),s(n)]),_:1})}const re=u(W,[["render",X]]);export{re as default};
