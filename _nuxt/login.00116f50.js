import{_ as x}from"./OffCanvas.7fd537d1.js";import{F as v,a as L,E,c as F,b as g}from"./index.esm.3d539a0c.js";import{d as m,_ as d,r as n,o as p,c as h,w as _,b as e,a as o,e as u,g as y,i as k}from"./entry.af507ca5.js";import{L as B}from"./Layout.0527441e.js";import{B as N}from"./BreadcrumbArea.058d377e.js";import"./Header.e0835909.js";import"./Footer.8a73a38b.js";import"./Social.1d572929.js";const S=m({components:{Field:v,Form:L,ErrorMessage:E},setup(){const s=F({email:g().required().email().label("Email"),password:g().required().min(6).label("Password")});function a(r,{resetForm:c}){alert(JSON.stringify(r,null,2)),c()}return{schema:s,onSubmit:a}}}),A={class:"mb-20"},C=e("label",{for:"email-id"},[u("Email Address "),e("span",null,"**")],-1),M={class:"mb-20"},V=e("label",{for:"pass"},[u("Password "),e("span",null,"**")],-1),q=e("div",{class:"login-action mb-20 fix"},[e("span",{class:"log-rem f-left"},[e("input",{id:"remember",type:"checkbox"}),e("label",{for:"remember"},"Remember me!")]),e("span",{class:"forgot-login f-right"},[e("a",{href:"#"},"Lost your password?")])],-1),H=e("button",{class:"os-btn w-100"},"Login Now",-1),P=e("div",{class:"or-divide"},[e("span",null,"or")],-1);function R(s,a,r,c,f,b){const t=n("Field"),i=n("ErrorMessage"),l=x,w=n("Form");return p(),h(w,{"validation-schema":s.schema,onSubmit:s.onSubmit},{default:_(()=>[e("div",A,[C,o(t,{name:"email",id:"email-id",type:"text",placeholder:"Email address..."}),o(i,{name:"email",class:"text-danger"})]),e("div",M,[V,o(t,{name:"password",id:"pass",type:"password",placeholder:"Enter password..."}),o(i,{name:"password",class:"text-danger"})]),q,H,P,o(l,{href:"/register",class:"os-btn os-btn-black w-100"},{default:_(()=>[u(" Register Now ")]),_:1})]),_:1},8,["validation-schema","onSubmit"])}const J=d(S,[["render",R]]),O=m({components:{LoginForm:J},setup(){return{}}}),T={class:"login-area pt-100 pb-100"},j={class:"container"},z={class:"row"},D={class:"col-lg-8 offset-lg-2"},G={class:"basic-login"},I=e("h3",{class:"text-center mb-60"},"Login From Here",-1);function K(s,a,r,c,f,b){const t=n("login-form");return p(),y("section",T,[e("div",j,[e("div",z,[e("div",D,[e("div",G,[I,o(t)])])])])])}const $=d(O,[["render",K]]),Q=m({components:{Layout:B,BreadcrumbArea:N,LoginArea:$},setup(){k({title:"Login"})}});function U(s,a,r,c,f,b){const t=n("breadcrumb-area"),i=$,l=n("layout");return p(),h(l,{transparent:!0},{default:_(()=>[o(t,{title:"Login",subtitle:"Login"}),o(i)]),_:1})}const ne=d(Q,[["render",U]]);export{ne as default};
