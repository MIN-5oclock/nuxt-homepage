import{Z as L,$ as I,d as w,K as N,a0 as U,C as A,H as E,T as j,N as q,r as F,a1 as z,a2 as W,a3 as Q,a4 as G,a5 as Y,_ as M,o as r,g as s,b as t,F as v,j as C,n as y,a as d,w as h,e as p,t as b,l as x,z as K,u as X,h as Z,q as D}from"./entry.af507ca5.js";const H=globalThis.requestIdleCallback||(e=>{const o=Date.now(),_={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-o))};return setTimeout(()=>{e(_)},1)}),J=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),ee=e=>{const o=L();o.isHydrating?o.hooks.hookOnce("app:suspense:resolve",()=>{H(e)}):H(e)};async function O(e,o=I()){const{path:_,matched:i}=o.resolve(e);if(!i.length||(o._routePreloaded||(o._routePreloaded=new Set),o._routePreloaded.has(_)))return;const a=o._preloadPromises=o._preloadPromises||[];if(a.length>4)return Promise.all(a).then(()=>O(e,o));o._routePreloaded.add(_);const c=i.map(n=>{var l;return(l=n.components)==null?void 0:l.default}).filter(n=>typeof n=="function");for(const n of c){const l=Promise.resolve(n()).catch(()=>{}).finally(()=>a.splice(a.indexOf(l)));a.push(l)}await Promise.all(a)}const te=(...e)=>e.find(o=>o!==void 0),le="noopener noreferrer";function ne(e){const o=e.componentName||"NuxtLink",_=(i,a)=>{if(!i||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return i;const c=e.trailingSlash==="append"?Q:G;if(typeof i=="string")return c(i,!0);const n="path"in i?i.path:a(i).path;return{...i,name:void 0,path:c(n,!0)}};return w({name:o,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:a}){const c=I(),n=N(()=>{const f=i.to||i.href||"";return _(f,c.resolve)}),l=N(()=>i.external||i.target&&i.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||U(n.value,{acceptRelative:!0})),m=A(!1),u=A(null),S=f=>{var $;u.value=i.custom?($=f==null?void 0:f.$el)==null?void 0:$.nextElementSibling:f==null?void 0:f.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!ie()){const $=L();let P,k=null;E(()=>{const R=oe();ee(()=>{P=H(()=>{var B;(B=u==null?void 0:u.value)!=null&&B.tagName&&(k=R.observe(u.value,async()=>{k==null||k(),k=null;const g=typeof n.value=="string"?n.value:c.resolve(n.value).fullPath;await Promise.all([$.hooks.callHook("link:prefetch",g).catch(()=>{}),!l.value&&O(n.value,c).catch(()=>{})]),m.value=!0}))})})}),j(()=>{P&&J(P),k==null||k(),k=null})}return()=>{var R,B;if(!l.value){const g={ref:S,to:n.value,activeClass:i.activeClass||e.activeClass,exactActiveClass:i.exactActiveClass||e.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(m.value&&(g.class=i.prefetchedClass||e.prefetchedClass),g.rel=i.rel),q(F("RouterLink"),g,a.default)}const f=typeof n.value=="object"?((R=c.resolve(n.value))==null?void 0:R.href)??null:n.value||null,$=i.target||null,P=i.noRel?null:te(i.rel,e.externalRelAttribute,f?le:"")||null,k=()=>Y(f,{replace:i.replace});return i.custom?a.default?a.default({href:f,navigate:k,get route(){if(!f)return;const g=z(f);return{path:g.pathname,fullPath:g.pathname,get query(){return W(g.search)},hash:g.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:f}},rel:P,target:$,isExternal:l.value,isActive:!1,isExactActive:!1}):null:q("a",{ref:u,href:f,rel:P,target:$},(B=a.default)==null?void 0:B.call(a))}}})}const T=ne({componentName:"NuxtLink"});function oe(){const e=L();if(e._observer)return e._observer;let o=null;const _=new Map,i=(c,n)=>(o||(o=new IntersectionObserver(l=>{for(const m of l){const u=_.get(m.target);(m.isIntersecting||m.intersectionRatio>0)&&u&&u()}})),_.set(c,n),o.observe(c),()=>{_.delete(c),o.unobserve(c),_.size===0&&(o.disconnect(),o=null)});return e._observer={observe:i}}function ie(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const ae=w({mounted(){const e=document.querySelector(".scroll-top");e&&(document.addEventListener("scroll",()=>{window.scrollY>200?e.style.display="block":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}}),se={class:"scroll-top",id:"scroll",style:{display:"none"}},re=t("a",{href:"#"},[t("i",{class:"fas fa-level-up-alt"})],-1),ce=[re];function ue(e,o,_,i,a,c){return r(),s("div",se,ce)}const ut=M(ae,[["render",ue]]),dt=w({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:o,attrs:_}){const i=A(!1);return E(()=>{i.value=!0}),a=>{var m;if(i.value)return(m=o.default)==null?void 0:m.call(o);const c=o.fallback||o.placeholder;if(c)return c();const n=a.fallback||a.placeholder||"",l=a.fallbackTag||a.placeholderTag||"span";return s(l,_,n)}}}),de=""+new URL("mega-menu-bg.42b5c4fd.jpg",import.meta.url).href,V={data(){return{menuData:[{link:"/",title:"Home",hasDropdown:!0,megamenu:!1,dropdownItems:[{link:"/",title:"Home Style 1"},{link:"/home-2",title:"Home Style 2"},{link:"/home-3",title:"Home Style 3"},{link:"/home-4",title:"Home Style 4"},{link:"/home-5",title:"Home Style 5"},{link:"/home-6",title:"Home Style 6"},{link:"/home-7",title:"Home Style 7"}]},{link:"/shop",title:"Shop",hasDropdown:!0,megamenu:!0,dropdownItems:[{link:"/shop",title:"Shop Pages",dropdownMenu:[{link:"/shop",title:"Standard Shop Page"},{link:"/shop-right",title:"Shop Right Sidebar"},{link:"/shop-4-col",title:"Shop 4 Column"},{link:"/shop-3-col",title:"Shop 3 Column"},{link:"/shop",title:"Shop Page"},{link:"/shop",title:"Shop Page"},{link:"/shop",title:"Shop Infinity"}]},{link:"/shop",title:"Products Pages",dropdownMenu:[{link:"/product-details",title:"Product Details"},{link:"/product-details",title:"Product Page V2"},{link:"/product-details",title:"Product Page V3"},{link:"/product-details",title:"Product Page V4"},{link:"/product-details",title:"Simple Product"},{link:"/product-details",title:"Variable Product"},{link:"/product-details",title:"External Product"}]},{link:"/shop",title:"Other Shop Pages",dropdownMenu:[{link:"/wishlist",title:"Wishlist"},{link:"/compare",title:"Compare"},{link:"/cart",title:"Shopping Cart"},{link:"/checkout",title:"Checkout"},{link:"/register",title:"Register"},{link:"/login",title:"Login"}]}]},{link:"/blog",title:"Blog",hasDropdown:!0,megamenu:!1,dropdownItems:[{link:"/blog",title:"Blog"},{link:"/blog-left-sidebar",title:"Blog Left Sidebar"},{link:"/blog-no-sidebar",title:"Blog No Sidebar"},{link:"/blog-2-col",title:"Blog 2 Column"},{link:"/blog-2-col-mas",title:"Blog 2 Column Masonary"},{link:"/blog-3-col",title:"Blog 3 Column"},{link:"/blog-details",title:"Blog Details"}]},{link:"/shop",title:"Pages",hasDropdown:!0,megamenu:!1,dropdownItems:[{link:"/wishlist",title:"Wishlist"},{link:"/cart",title:"Shopping Cart"},{link:"/checkout",title:"Checkout"},{link:"/account",title:"Account"},{link:"/register",title:"Register"},{link:"/login",title:"Login"},{link:"/404",title:"Error 404"}]},{link:"/contact",title:"Contact"}]}}},he=w({mixins:[V],data(){return{bg:de}},setup(){}}),fe={key:0,class:"submenu transition-3"};function pe(e,o,_,i,a,c){const n=T;return r(),s("ul",null,[(r(!0),s(v,null,C(e.menuData,(l,m)=>(r(),s("li",{key:m,class:y(`${l.hasDropdown&&!l.megamenu?"active has-dropdown":l.megamenu&&"mega-menu has-dropdown"}`)},[d(n,{href:`${l.link}`},{default:h(()=>[p(b(l.title),1)]),_:2},1032,["href"]),l!=null&&l.hasDropdown&&!l.megamenu?(r(),s("ul",fe,[(r(!0),s(v,null,C(l.dropdownItems,(u,S)=>(r(),s("li",{key:S},[d(n,{href:`${u.link}`},{default:h(()=>[p(b(u.title),1)]),_:2},1032,["href"])]))),128))])):x("",!0),l.hasDropdown&&l.megamenu?(r(),s("ul",{key:1,class:"submenu transition-3",style:K({backgroundImage:`url(${e.bg})`})},[(r(!0),s(v,null,C(l.dropdownItems,(u,S)=>(r(),s("li",{key:S,class:"has-dropdown"},[d(n,{href:`${u.link}`},{default:h(()=>[p(b(u.title),1)]),_:2},1032,["href"]),t("ul",null,[(r(!0),s(v,null,C(u.dropdownMenu,(f,$)=>(r(),s("li",{key:$},[d(n,{href:`${f.link}`},{default:h(()=>[p(b(f.title),1)]),_:2},1032,["href"])]))),128))])]))),128))],4)):x("",!0)],2))),128))])}const ht=M(he,[["render",pe]]),_e=w({setup(){return{store:X()}}}),me={class:"mini-cart"},ke={key:0},ge=t("h5",null,"Your cart is empty",-1),ve=[ge],be={key:1,class:"mini-cart-inner"},$e={class:"cart-img f-left"},Se=["src"],ye={class:"cart-content f-left text-left"},we=["innerHTML"],Ce={class:"cart-price"},Pe={class:"ammount"},xe=t("i",{class:"fal fa-times"},null,-1),Me={class:"price"},Be=["onClick"],Te=t("a",{href:"#"},[t("i",{class:"fal fa-times"})],-1),Re=[Te],Ae={class:"total-price d-flex justify-content-between mb-30"},De=t("span",null,"Subtotal:",-1),He={class:"checkout-link"};function Le(e,o,_,i,a,c){const n=T;return r(),s("div",me,[e.store.cart_products.length===0?(r(),s("div",ke,ve)):x("",!0),e.store.cart_products.length>0?(r(),s("div",be,[t("ul",{class:y(`mini-cart-list ${e.store.cart_products.length===1?"slider-height_1":e.store.cart_products.length===2?"slider-height_2":"slider-height"}`)},[(r(!0),s(v,null,C(e.store.cart_products,(l,m)=>(r(),s("li",{key:m},[t("div",$e,[d(n,{href:`/product-details/${l.id}`},{default:h(()=>[t("img",{src:l.img,alt:""},null,8,Se)]),_:2},1032,["href"])]),t("div",ye,[t("h5",null,[d(n,{href:`/product-details/${l.id}`},{default:h(()=>[t("span",{innerHTML:l.title},null,8,we)]),_:2},1032,["href"])]),t("div",Ce,[t("span",Pe,[p(b(l.orderQuantity),1),xe]),t("span",Me,"$ "+b(l.price),1)])]),t("div",{class:"del-icon f-right mt-30",onClick:u=>e.store.remover_cart_products(l)},Re,8,Be)]))),128))],2),t("div",Ae,[De,t("span",null,"$"+b(e.store.totalPriceQuantity.total.toFixed(2)),1)]),t("div",He,[d(n,{href:"/cart",class:"os-btn"},{default:h(()=>[p("view Cart")]),_:1}),d(n,{class:"os-btn os-btn-black",href:"/checkout"},{default:h(()=>[p("Checkout")]),_:1})])])):x("",!0)])}const ft=M(_e,[["render",Le]]),Ne=w({data(){return{showSearch:!1}},methods:{openSearchPopup(){console.log("first"),this.showSearch=!0}}}),qe={class:"container"},Ie={class:"row"},Ee={class:"col-xl-12"},Oe={class:"header__search-inner text-center"},Ve={action:"#"},Ue=t("a",{href:"#",class:"header__search-btn-close"},[t("i",{class:"fal fa-times"})],-1),je=[Ue],Fe=t("div",{class:"header__search-header"},[t("h3",null,"Search")],-1),ze={class:"header__search-categories"},We={class:"search-category"},Qe=t("div",{class:"header__search-input p-relative"},[t("input",{type:"text",placeholder:"Search for products... "}),t("button",{type:"submit"},[t("i",{class:"far fa-search"})])],-1);function Ge(e,o,_,i,a,c){const n=T;return r(),s(v,null,[t("section",{class:y(`header__search white-bg transition-3 ${e.showSearch?"search-opened":""}`)},[t("div",qe,[t("div",Ie,[t("div",Ee,[t("div",Oe,[t("form",Ve,[t("div",{class:"header__search-btn",onClick:o[0]||(o[0]=l=>e.showSearch=!1)},je),Fe,t("div",ze,[t("ul",We,[t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("All Categories")]),_:1})]),t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("Accessories")]),_:1})]),t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("Chair")]),_:1})]),t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("Tablet")]),_:1})]),t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("Men")]),_:1})]),t("li",null,[d(n,{href:"/shop"},{default:h(()=>[p("Women")]),_:1})])])]),Qe])])])])])],2),t("div",{onClick:o[1]||(o[1]=l=>e.showSearch=!1),class:y(`body-overlay transition-3 ${e.showSearch?"opened":""}`)},null,2)],64)}const pt=M(Ne,[["render",Ge]]),Ye=w({setup(){return{}}}),Ke={class:"extra-info"},Xe={class:"my-account"},Ze=t("div",{class:"extra-title"},[t("h5",null,"My Account")],-1),Je=Z('<li><div class="lang"><div class="extra-title"><h5>Language</h5></div><ul><li><a href="#">English</a></li><li><a href="#">France</a></li><li><a href="#">Germany</a></li><li><a href="#">Bangla</a></li></ul></div></li><li><div class="currency"><div class="extra-title"><h5>currency</h5></div><ul><li><a href="#">USD - US Dollar</a></li><li><a href="#">EUR - Ruro</a></li><li><a href="#">GBP - Britis Pound</a></li><li><a href="#">INR - Indian Rupee</a></li></ul></div></li>',2);function et(e,o,_,i,a,c){const n=T;return r(),s("ul",Ke,[t("li",null,[t("div",Xe,[Ze,t("ul",null,[t("li",null,[d(n,{href:"/account"},{default:h(()=>[p("My Account")]),_:1})]),t("li",null,[d(n,{href:"/wishlist"},{default:h(()=>[p("Wishlist")]),_:1})]),t("li",null,[d(n,{href:"/cart"},{default:h(()=>[p("Cart")]),_:1})]),t("li",null,[d(n,{href:"/checkout"},{default:h(()=>[p("Checkout")]),_:1})]),t("li",null,[d(n,{href:"/register"},{default:h(()=>[p("Create Account")]),_:1})])])])]),Je])}const _t=M(Ye,[["render",et]]),tt=w({mixins:[V],data(){return{activeMenu:"",showSidebar:!1}},methods:{OpenOffcanvas(){this.showSidebar=!0},handleOpenMenu(e){e===this.activeMenu?this.activeMenu="":this.activeMenu=e}},setup(){return{mobile_menus:A([{title:"Home",dropdown:!0,dropdownMenu:[{link:"/",title:"Home Style 1"},{link:"/home-2",title:"Home Style 2"},{link:"/home-3",title:"Home Style 3"},{link:"/home-4",title:"Home Style 4"},{link:"/home-5",title:"Home Style 5"},{link:"/home-6",title:"Home Style 6"},{link:"/home-7",title:"Home Style 7"}]},{title:"Shop",dropdown:!0,dropdownMenu:[{link:"/shop",title:"Standard Shop Page"},{link:"/shop-right",title:"Shop Right Sidebar"},{link:"/shop-4-col",title:"Shop 4 Column"},{link:"/shop-3-col",title:"Shop 3 Column"},{link:"/product-details",title:"Shop Details"}]},{title:"Other Pages",dropdown:!0,dropdownMenu:[{link:"/wishlist",title:"Wishlist"},{link:"/cart",title:"Cart"},{link:"/compare",title:"Compare"},{link:"/checkout",title:"Checkout"},{link:"/register",title:"Register"},{link:"/login",title:"Login"},{link:"/account",title:"Account"}]},{title:"Blog",dropdown:!0,dropdownMenu:[{link:"/blog",title:"Blog"},{link:"/blog-left-sidebar",title:"Blog Left Sidebar"},{link:"/blog-no-sidebar",title:"Blog No Sidebar"},{link:"/blog-2-col",title:"Blog 2 Column"},{link:"/blog-3-col",title:"Blog 3 Column"},{link:"/blog-2-col-mas",title:"Blog 2 Col Masonry"},{link:"/blog-details",title:"Blog Details"}]},{title:"Contact",dropdown:!1,link:"/contact"}])}}}),lt={class:"extra__info-inner"},nt=t("i",{class:"fal fa-times"},null,-1),ot=[nt],it={class:"side-mobile-menu d-block d-lg-none mm-menu"},at=["onClick"],st={key:1};function rt(e,o,_,i,a,c){const n=T;return r(),s(v,null,[t("section",{class:y(`extra__info transition-3 ${e.showSidebar?"info-opened":""}`)},[t("div",lt,[t("div",{class:"extra__info-close text-end",onClick:o[1]||(o[1]=l=>e.showSidebar=!1)},[t("a",{onClick:o[0]||(o[0]=D(l=>e.showSidebar=!1,["prevent"])),href:"#",class:"extra__info-close-btn"},ot)]),t("nav",it,[t("ul",null,[(r(!0),s(v,null,C(e.mobile_menus,(l,m)=>(r(),s(v,{key:m},[l.dropdownMenu?(r(),s("li",{key:0,class:y(`menu-item-has-children has-droupdown 
              ${e.activeMenu===l.title?"active":""}`)},[t("a",{onClick:D(u=>e.handleOpenMenu(l.title),["prevent"])},b(l.title),9,at),t("ul",{onClick:o[2]||(o[2]=D(u=>e.showSidebar=!1,["prevent"])),class:y(`sub-menu ${e.activeMenu===l.title?"active":""}`)},[(r(!0),s(v,null,C(l.dropdownMenu,(u,S)=>(r(),s("li",{key:S},[d(n,{href:`${u.link}`},{default:h(()=>[p(b(u.title),1)]),_:2},1032,["href"])]))),128))],2)],2)):x("",!0),l.dropdownMenu?x("",!0):(r(),s("li",st,[d(n,{href:`${l.link}`},{default:h(()=>[p(b(l.title),1)]),_:2},1032,["href"])]))],64))),128))])])])],2),t("div",{onClick:o[3]||(o[3]=l=>e.showSidebar=!1),class:y(`body-overlay transition-3 ${e.showSidebar?"opened":""}`)},null,2)],64)}const mt=M(tt,[["render",rt]]);export{ft as C,_t as E,ht as M,mt as O,pt as S,T as _,dt as a,ut as b};
