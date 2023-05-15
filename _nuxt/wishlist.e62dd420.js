import{d as u,u as S,_ as p,o,g as c,b as t,a as i,w as r,t as b,q as w,r as l,c as _,e as W,l as v,F as B,j as N,i as L}from"./entry.fd82bdf9.js";import{L as T}from"./Layout.5ee56dc6.js";import{B as q}from"./BreadcrumbArea.ed720af8.js";import{_ as y,a as V}from"./OffCanvas.e0a2b461.js";import{u as k}from"./useWishlist.eef8efc0.js";import"./Header.b947b8e7.js";import"./Footer.f9042b0d.js";import"./Social.297d618e.js";const A=u({props:{item:{type:Object,default:{},required:!0}},setup(){const s=S(),e=k();return{cartState:s,wishlistState:e}}}),H={class:"product-thumbnail"},M=["src"],j={class:"product-name"},F=["innerHTML"],I={class:"product-price"},O={class:"amount"},P=t("button",{class:"os-btn os-btn-black",type:"submit"},"Add TO Cart",-1),D=[P],E={class:"product-subtotal"},Q={class:"amount"},R=t("a",{href:"#"},[t("i",{class:"fa fa-times"})],-1),U=[R];function z(s,e,m,h,f,$){const n=y;return o(),c("tr",null,[t("td",H,[i(n,{href:`/product-details/${s.item.id}`},{default:r(()=>[t("img",{src:s.item.img,alt:""},null,8,M)]),_:1},8,["href"])]),t("td",j,[i(n,{href:`/product-details/${s.item.id}`},{default:r(()=>[t("span",{innerHTML:s.item.title},null,8,F)]),_:1},8,["href"])]),t("td",I,[t("span",O,"$"+b(s.item.price),1)]),t("td",{class:"product-quantity",onClick:e[0]||(e[0]=w(a=>s.cartState.add_cart_product(s.item),["prevent"]))},D),t("td",E,[t("span",Q,"$"+b(s.item.price),1)]),t("td",{class:"product-remove",onClick:e[1]||(e[1]=w(a=>s.wishlistState.removeWishlist(s.item),["prevent"]))},U)])}const G=p(A,[["render",z]]),J=u({components:{WishlistItem:G},setup(){return{state:k()}},created(){this.state.get_wishlist_products}}),K={class:"cart-area pt-100 pb-100"},X={class:"container"},Y={class:"row"},Z={class:"col-12"},x={key:0,class:"text-center"},tt=t("h3",null,"No wishlist product",-1),st={key:1,action:"#"},et={class:"table-content table-responsive"},ot={class:"table"},nt=t("thead",null,[t("tr",null,[t("th",{class:"product-thumbnail"},"Images"),t("th",{class:"cart-product-name"},"Product"),t("th",{class:"product-price"},"Unit Price"),t("th",{class:"product-quantity"},"Quantity"),t("th",{class:"product-subtotal"},"Total"),t("th",{class:"product-remove"},"Remove")])],-1);function at(s,e,m,h,f,$){const n=y,a=l("wishlist-item"),d=V;return o(),_(d,null,{default:r(()=>[t("section",K,[t("div",X,[t("div",Y,[t("div",Z,[s.state.wishlists.length===0?(o(),c("div",x,[tt,i(n,{class:"os-btn os-btn-black mt-20",to:"/shop"},{default:r(()=>[W(" Shop Now ")]),_:1})])):v("",!0),s.state.wishlists.length>0?(o(),c("form",st,[t("div",et,[t("table",ot,[nt,t("tbody",null,[(o(!0),c(B,null,N(s.state.wishlists,(g,C)=>(o(),_(a,{key:C,item:g},null,8,["item"]))),128))])])])])):v("",!0)])])])])]),_:1})}const it=p(J,[["render",at]]),rt=u({components:{Layout:T,BreadcrumbArea:q,WishlistArea:it},setup(){L({title:"Wishlist"})}});function ct(s,e,m,h,f,$){const n=l("breadcrumb-area"),a=l("wishlist-area"),d=l("layout");return o(),_(d,{transparent:!0},{default:r(()=>[i(n,{title:"Wishlist",subtitle:"Wishlist"}),i(a)]),_:1})}const $t=p(rt,[["render",ct]]);export{$t as default};
