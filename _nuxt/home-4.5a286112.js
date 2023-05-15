import{_ as x}from"./CategoryArea.63f1bcbf.js";import{_ as C}from"./ShopBanner.05ae2da1.js";import{_ as S}from"./SubscribeArea.5be01e95.js";import{d as m,_ as p,o,g as c,b as t,F as v,j as w,e as d,t as u,a as e,w as _,r as s,y as B,C as L,c as T,z as D,i as I}from"./entry.fd82bdf9.js";import{_ as M,b as H}from"./OffCanvas.e0a2b461.js";import{H as O}from"./Header.b947b8e7.js";import{_ as A}from"./Social.297d618e.js";import{C as z,S as R,P as q}from"./carousel.es.0933fe8b.js";import{s as N,a as U}from"./slider-3.0f9399f5.js";import{T as V}from"./TrendingProducts.5279b315.js";import{O as j}from"./OfferProductsSlider.56165bdc.js";import{B as Q}from"./BlogArea.6029f96a.js";import"./categoryData.055f225a.js";import"./ProductModal.e529f431.js";import"./avater-2.4ba26e80.js";import"./avater-3.bb615705.js";import"./ProductItem.6d92de4d.js";import"./useWishlist.eef8efc0.js";import"./useCompare.6eaa02e1.js";import"./blogData.1fea4a6e.js";import"./BlogItem.c2034e48.js";const E=m({components:{Social:A},setup(){return{widget_data:[{id:1,title:"My Account",links:[{link:"#",list:"My Account"},{link:"#",list:"Checkout"},{link:"#",list:"Shopping Cart"},{link:"#",list:"Wishlist"},{link:"#",list:"Custom Link"}]},{id:2,title:"Quick Links",links:[{link:"#",list:"Store Location"},{link:"#",list:"My Account"},{link:"#",list:"Orders Tracking"},{link:"#",list:"Size Guide"},{link:"#",list:"FAQs"}]},{id:3,title:"information",links:[{link:"#",list:"About Us"},{link:"#",list:"Careers"},{link:"#",list:"Delivery Information"},{link:"#",list:"Privacy Policy"},{link:"#",list:"Terms & Condition"}]},{id:4,title:"Customer Service",links:[{link:"#",list:"Shipping Policy"},{link:"#",list:"Help & Contact Us"},{link:"#",list:"Returns & Refunds"},{link:"#",list:"Online Stores"},{link:"#",list:"Terms & Conditions"}]}]}}}),G={class:"footer__area grey-bg p-relative"},W={class:"footer__top pt-75 pb-60"},Y={class:"container"},J={class:"row"},K={class:"footer__widget mb-30"},X={class:"footer__widget-title footer__widget-title-2 mb-25"},Z={class:"footer__widget-content"},tt={class:"footer__links footer__links-2"},et={href:"#"},ot={class:"footer__bottom footer__bottom-2"},st={class:"container"},it={class:"footer__bottom-inner footer__bottom-inner-2"},nt={class:"row"},rt={class:"col-xl-6 col-lg-7"},lt={class:"footer__copyright footer__copyright-2"},ct={class:"col-xl-6 col-lg-5"},at={class:"footer__social footer__social-2 f-right"},_t=t("li",null,[t("a",{href:"#"},[t("i",{class:"fas fa-share-alt"})])],-1);function dt(i,h,f,g,y,k){const n=M,a=A;return o(),c("section",G,[t("div",W,[t("div",Y,[t("div",J,[(o(!0),c(v,null,w(i.widget_data,(r,l)=>(o(),c("div",{key:l,class:"col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12"},[t("div",K,[t("div",X,[t("h5",null,u(r.title),1)]),t("div",Z,[t("div",tt,[t("ul",null,[(o(!0),c(v,null,w(r.links,(b,$)=>(o(),c("li",{key:$},[t("a",et,u(b.list),1)]))),128))])])])])]))),128))])])]),t("div",ot,[t("div",st,[t("div",it,[t("div",nt,[t("div",rt,[t("div",lt,[t("p",null,[d("Copyright "+u(new Date().getFullYear())+" © ",1),e(n,{href:"/"},{default:_(()=>[d("Outstock")]),_:1}),d(" all rights reserved. Powered by "),e(n,{href:"/"},{default:_(()=>[d("Theme_pure")]),_:1})])])]),t("div",ct,[t("div",at,[t("ul",null,[e(a),_t])])])])])])])])}const ut=p(E,[["render",dt]]),mt=m({components:{Header:O,BackToTop:H,FooterTwo:ut}}),pt={class:"box-white grey-bg pt-50"},ht={class:"container"},ft={class:"box-white-inner"},gt={class:"row"},yt={class:"col-xl-12"};function kt(i,h,f,g,y,k){const n=s("Header"),a=s("footer-two"),r=H;return o(),c("div",null,[e(n),t("main",pt,[t("div",ht,[t("div",ft,[t("div",gt,[t("div",yt,[B(i.$slots,"default")])])])])]),e(a),e(r)])}const bt=p(mt,[["render",kt]]),$t=""+new URL("slider-01.5e732360.jpg",import.meta.url).href,vt=m({components:{Carousel:z,Slide:R,Pagination:q},setup(){return{slider_data:L([{id:1,bgImg:$t,title:"Face Detection System <br /> Hand carved Coffee",subtile:"Face Recognition is a technology that recognizes the characteristics of a human face and identifies a human using the characteristics.Face recognition technology is one of the existing authentication methods, and it is used in various fields such as security systems, traffic systems, and medical systems, and uses technologies such as deep learning, artificial intelligence, computer vision, and machine learning. Most of the technologies described below are using deep learning techniques"},{id:2,bgImg:N,title:"Think Different &<br /> Do it otherwise",subtile:"As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day."},{id:3,bgImg:U,title:"High Beam<br /> by Tom Chung",subtile:"As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day."}])}}}),wt={class:"slider__area slider__area-4 tp_hero p-relative"},xt={class:"container"},Ct={class:"row"},St={class:"col-xl-7 col-lg-7 col-md-9 col-sm-11 col-12"},Tt={class:"slider__content slider__content-4"},Ht=["innerHTML"],At=t("a",{href:"#",class:"os-btn os-btn-2 hero-slider-btn"},"Discover now",-1);function Ft(i,h,f,g,y,k){const n=s("Slide"),a=s("Pagination"),r=s("Carousel");return o(),c("section",wt,[e(r,{"items-to-show":1,"wrap-around":!0,class:"slider-active"},{addons:_(()=>[e(a)]),default:_(()=>[(o(!0),c(v,null,w(i.slider_data,l=>(o(),T(n,{key:l.id,class:"single-slider single-slider-2 slider__height-4 d-flex align-items-center",style:D({backgroundImage:`url(${l.bgImg})`})},{default:_(()=>[t("div",xt,[t("div",Ct,[t("div",St,[t("div",Tt,[t("h2",{innerHTML:l.title},null,8,Ht),t("p",null,u(l.subtile),1),At])])])])]),_:2},1032,["style"]))),128))]),_:1})])}const Pt=p(vt,[["render",Ft]]),Bt=m({components:{LayoutFour:bt,HomeFourHeroSlider:Pt,CategoryArea:x,TrendingProducts:V,ShopBanner:C,OfferProductsSlider:j,BlogArea:Q,SubscribeArea:S},setup(){I({title:"Home Four"})}});function Lt(i,h,f,g,y,k){const n=s("home-four-hero-slider"),a=x,r=s("trending-products"),l=C,b=s("offer-products-slider"),$=s("blog-area"),F=S,P=s("layout-four");return o(),T(P,null,{default:_(()=>[e(n),e(a,{style_3:!0}),e(r,{style_2:!0}),e(l,{style_2:!0,style_3:!0}),e(b,{style_2:!0}),e($,{style_3:!0}),e(F,{style_3:!0})]),_:1})}const ee=p(Bt,[["render",Lt]]);export{ee as default};
