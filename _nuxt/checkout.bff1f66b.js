import{_ as S,a as L}from"./OffCanvas.e0a2b461.js";import{d as y,_ as p,o as l,g as n,h as $,r as u,b as e,a as c,l as v,e as d,u as A,F as P,j as T,t as b,p as _,s as w,q as x,v as g,x as F,w as f,i as D,c as O}from"./entry.fd82bdf9.js";import{L as E}from"./Layout.5ee56dc6.js";import{B as U}from"./BreadcrumbArea.ed720af8.js";import"./Header.b947b8e7.js";import"./Footer.f9042b0d.js";import"./Social.297d618e.js";const R=y({}),M={class:"country-select"},Q=$('<label>Country <span class="required">*</span></label><select><option value="bangladesh">bangladesh</option><option value="Algeria">Algeria</option><option value="Afghanistan">Afghanistan</option><option value="Ghana">Ghana</option><option value="Albania">Albania</option><option value="Bahrain">Bahrain</option><option value="Colombia">Colombia</option><option value="Dominican Republic">Dominican Republic</option></select>',2),Y=[Q];function Z(t,o,h,m,r,i){return l(),n("div",M,Y)}const q=p(R,[["render",Z]]),G={components:{CountrySelect:q},data(){return{createAccount:!1}},methods:{handleCreateAccount(){this.createAccount=!this.createAccount}}},H={class:"row"},I={class:"col-md-12"},j=$('<div class="col-md-6"><div class="checkout-form-list"><label>First Name <span class="required">*</span></label><input type="text" placeholder="First Name"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Last Name <span class="required">*</span></label><input type="text" placeholder="Last Name"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Company Name</label><input type="text" placeholder="example LTD."></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Address <span class="required">*</span></label><input type="text" placeholder="Street address"></div></div><div class="col-md-12"><div class="checkout-form-list"><input type="text" placeholder="Apartment, suite, unit etc. (optional)"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Town / City <span class="required">*</span></label><input type="text" placeholder="Town / City"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>State / County <span class="required">*</span></label><input type="text" placeholder="State / County"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Postcode / Zip <span class="required">*</span></label><input type="text" placeholder="Postcode / Zip"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Email Address <span class="required">*</span></label><input type="email" placeholder="Your Email"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Phone <span class="required">*</span></label><input type="text" placeholder="Phone number"></div></div>',10),z={class:"col-md-12"},J={class:"checkout-form-list create-acc"},K=e("label",{for:"cbox"},"Create an account?",-1),W={key:0,id:"cbox_info",class:"checkout-form-list create-account"},X=e("p",null," Create an account by entering the information below. If you are a returning customer please login at the top of the page. ",-1),ee=e("label",null,[d("Account password "),e("span",{class:"required"},"*")],-1),te=e("input",{type:"password",placeholder:"password"},null,-1),oe=[X,ee,te];function se(t,o,h,m,r,i){const a=u("country-select");return l(),n("div",H,[e("div",I,[c(a)]),j,e("div",z,[e("div",J,[e("input",{onClick:o[0]||(o[0]=(...s)=>i.handleCreateAccount&&i.handleCreateAccount(...s)),id:"cbox",type:"checkbox"}),K]),r.createAccount?(l(),n("div",W,oe)):v("",!0)])])}const ae=p(G,[["render",se]]),le={components:{CountrySelect:q},data(){return{shipBox:!1}},methods:{handleShipBox(){this.shipBox=!this.shipBox}}},ne={class:"different-address"},ie={class:"ship-different-title"},ce=e("label",{for:"ship-box"},"Ship to a different address?",-1),de={key:0,id:"ship-box-info"},re={class:"row"},ue={class:"col-md-12"},pe=$('<div class="col-md-6"><div class="checkout-form-list"><label>First Name <span class="required">*</span></label><input type="text" placeholder="First Name"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Last Name <span class="required">*</span></label><input type="text" placeholder="Last Name"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Company Name</label><input type="text" placeholder="example LTD."></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Address <span class="required">*</span></label><input type="text" placeholder="Street address"></div></div><div class="col-md-12"><div class="checkout-form-list"><input type="text" placeholder="Apartment, suite, unit etc. (optional)"></div></div><div class="col-md-12"><div class="checkout-form-list"><label>Town / City <span class="required">*</span></label><input type="text" placeholder="Town / City"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>State / County <span class="required">*</span></label><input type="text" placeholder="State / County"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Postcode / Zip <span class="required">*</span></label><input type="text" placeholder="Postcode / Zip"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Email Address <span class="required">*</span></label><input type="email" placeholder="Your Email"></div></div><div class="col-md-6"><div class="checkout-form-list"><label>Phone <span class="required">*</span></label><input type="text" placeholder="Phone number"></div></div>',10),he=e("div",{class:"order-notes"},[e("div",{class:"checkout-form-list"},[e("label",null,"Order Notes"),e("textarea",{id:"checkout-mess",cols:"30",rows:"10",placeholder:"Notes about your order, e.g. special notes for delivery."})])],-1);function me(t,o,h,m,r,i){const a=u("country-select");return l(),n("div",ne,[e("div",ie,[e("h3",null,[ce,e("input",{onClick:o[0]||(o[0]=(...s)=>i.handleShipBox&&i.handleShipBox(...s)),id:"ship-box",type:"checkbox"})])]),r.shipBox?(l(),n("div",de,[e("div",re,[e("div",ue,[c(a)]),pe])])):v("",!0),he])}const _e=p(le,[["render",me]]),ve=y({data(){return{ship_cost:0}},setup(){return{state:A()}}}),be={class:"your-order mb-30"},fe=e("h3",null,"Your order",-1),ye={class:"your-order-table table-responsive"},$e=e("thead",null,[e("tr",null,[e("th",{class:"product-name"},"Product"),e("th",{class:"product-total"},"Total")])],-1),ke={class:"product-name"},Ce={class:"product-quantity"},ge={class:"product-total"},xe={class:"amount"},we={class:"cart-subtotal"},Se=e("th",null,"Cart Subtotal",-1),Ae={class:"amount"},qe={class:"shipping"},Ve=e("th",null,"Shipping",-1),Ne=e("label",{for:"flat-rate"},[d(" Flat Rate: "),e("span",{class:"amount"},"$7.00")],-1),Be=e("label",{for:"free"},"Free Shipping:",-1),Le={class:"order-total"},Pe=e("th",null,"Order Total",-1),Te={class:"amount"},Fe=$('<div class="payment-method"><div class="accordion" id="accordionExample"><div class="card"><div class="card-header" id="headingOne"><h5 class="mb-0"><button class="btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Direct Bank Transfer </button></h5></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="card-body"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account. </div></div></div><div class="card"><div class="card-header" id="headingTwo"><h5 class="mb-0"><button class="btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Cheque Payment </button></h5></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="card-body"> Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </div></div></div></div><div class="order-button-payment mt-20"><button type="submit" class="os-btn os-btn-black">Place order</button></div></div>',1);function De(t,o,h,m,r,i){return l(),n("div",be,[fe,e("div",ye,[e("table",null,[$e,e("tbody",null,[(l(!0),n(P,null,T(t.state.cart_products,(a,s)=>(l(),n("tr",{key:s,class:"cart_item"},[e("td",ke,[d(b(a.title)+" ",1),e("strong",Ce," × "+b(a.orderQuantity),1)]),e("td",ge,[e("span",xe,"$"+b(a.price),1)])]))),128))]),e("tfoot",null,[e("tr",we,[Se,e("td",null,[e("span",Ae,"$"+b(t.state.totalPriceQuantity.total.toFixed(2)),1)])]),e("tr",qe,[Ve,e("td",null,[e("ul",null,[e("li",null,[_(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t.ship_cost=a),value:7,id:"flat-rate",name:"ship-cost",type:"radio"},null,512),[[w,t.ship_cost]]),Ne]),e("li",null,[_(e("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>t.ship_cost=a),id:"free",value:"free",name:"ship-cost",type:"radio"},null,512),[[w,t.ship_cost]]),Be])])])]),e("tr",Le,[Pe,e("td",null,[e("strong",null,[e("span",Te," $"+b(typeof t.ship_cost=="number"&&t.ship_cost>0?(t.state.totalPriceQuantity.total+t.ship_cost).toFixed(2):t.state.totalPriceQuantity.total.toFixed(2)),1)])])])])])]),Fe])}const Oe=p(ve,[["render",De]]),Ee={components:{OrderArea:Oe,BillingDetails:ae,DifferentAddress:_e},methods:{handleFormSubmit(){console.log("submit form")}}},Ue={class:"checkout-area pb-70"},Re={class:"container"},Me={class:"row"},Qe={class:"col-lg-6"},Ye={class:"checkbox-form"},Ze=e("h3",null,"Billing Details",-1),Ge={class:"col-lg-6"};function He(t,o,h,m,r,i){const a=u("billing-details"),s=u("different-address"),k=u("order-area");return l(),n("section",Ue,[e("div",Re,[e("form",{onSubmit:o[0]||(o[0]=x((...C)=>i.handleFormSubmit&&i.handleFormSubmit(...C),["prevent"]))},[e("div",Me,[e("div",Qe,[e("div",Ye,[Ze,c(a),c(s)])]),e("div",Ge,[c(k)])])],32)])])}const V=p(Ee,[["render",He]]),Ie=y({data(){return{checkoutLogin:!1,checkoutCoupon:!1,formValue:{name_or_email:"",password:"",isChecked:!1},couponVal:""}},methods:{handleCheckoutLogin(){this.checkoutLogin=!this.checkoutLogin},handleCheckoutCoupon(){this.checkoutCoupon=!this.checkoutCoupon},handleSubmit(){this.formValue={}},handleCouponSubmit(){console.log(this.couponVal),this.couponVal=""}}}),je={class:"coupon-area pt-100 pb-30"},ze={class:"container"},Je={class:"row"},Ke={class:"col-md-6"},We={class:"coupon-accordion"},Xe={key:0,id:"checkout-login",class:"coupon-content"},et={class:"coupon-info"},tt=e("p",{class:"coupon-text"}," Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus. ",-1),ot={class:"form-row-first"},st=e("label",null,[d("Username or email "),e("span",{class:"required"},"*")],-1),at={class:"form-row-last"},lt=e("label",null,[d("Password "),e("span",{class:"required"},"*")],-1),nt={class:"form-row"},it=e("button",{class:"os-btn os-btn-black",type:"submit"},"Login",-1),ct={class:"lost-password"},dt={class:"col-md-6"},rt={class:"coupon-accordion"},ut={key:0,id:"checkout_coupon",class:"coupon-checkout-content"},pt={class:"coupon-info"},ht={class:"checkout-coupon"},mt=e("button",{class:"os-btn os-btn-black",type:"submit"},"Apply Coupon",-1);function _t(t,o,h,m,r,i){const a=S;return l(),n("section",je,[e("div",ze,[e("div",Je,[e("div",Ke,[e("div",We,[e("h3",null,[d(" Returning customer? "),e("span",{onClick:o[0]||(o[0]=(...s)=>t.handleCheckoutLogin&&t.handleCheckoutLogin(...s)),id:"showlogin"},"Click here to login")]),t.checkoutLogin?(l(),n("div",Xe,[e("div",et,[tt,e("form",{onSubmit:o[4]||(o[4]=x((...s)=>t.handleSubmit&&t.handleSubmit(...s),["prevent"]))},[e("p",ot,[st,_(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>t.formValue.name_or_email=s)},null,512),[[g,t.formValue.name_or_email]])]),e("p",at,[lt,_(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=s=>t.formValue.password=s)},null,512),[[g,t.formValue.password]])]),e("p",nt,[it,e("label",null,[_(e("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=s=>t.formValue.isChecked=s)},null,512),[[F,t.formValue.isChecked]]),d(" Remember me ")])]),e("p",ct,[c(a,{href:"/login"},{default:f(()=>[d("Lost your password?")]),_:1})])],32)])])):v("",!0)])]),e("div",dt,[e("div",rt,[e("h3",null,[d(" Have a coupon? "),e("span",{onClick:o[5]||(o[5]=(...s)=>t.handleCheckoutCoupon&&t.handleCheckoutCoupon(...s)),id:"showcoupon"},"Click here to enter your code")]),t.checkoutCoupon?(l(),n("div",ut,[e("div",pt,[e("form",{onSubmit:o[7]||(o[7]=x((...s)=>t.handleCouponSubmit&&t.handleCouponSubmit(...s),["prevent"]))},[e("p",ht,[_(e("input",{"onUpdate:modelValue":o[6]||(o[6]=s=>t.couponVal=s),type:"text",placeholder:"Coupon Code"},null,512),[[g,t.couponVal]]),mt])],32)])])):v("",!0)])])])])])}const vt=p(Ie,[["render",_t]]),bt=y({components:{Layout:E,BreadcrumbArea:U,CouponArea:vt,CheckoutArea:V},setup(){const t=A();return D({title:"Checkout"}),{state:t}}}),ft={key:0,class:"text-center pt-100 pb-100"},yt=e("h3",null,"No items found in cart to checkout",-1),$t={key:1};function kt(t,o,h,m,r,i){const a=u("breadcrumb-area"),s=S,k=u("coupon-area"),C=V,N=L,B=u("layout");return l(),O(B,{transparent:!0},{default:f(()=>[c(a,{title:"Checkout",subtitle:"Checkout"}),c(N,null,{default:f(()=>[t.state.cart_products.length===0?(l(),n("div",ft,[yt,c(s,{class:"os-btn os-btn-black mt-15",to:"/shop"},{default:f(()=>[d(" Shop Now ")]),_:1})])):v("",!0),t.state.cart_products.length>0?(l(),n("div",$t,[c(k),c(C)])):v("",!0)]),_:1})]),_:1})}const Vt=p(bt,[["render",kt]]);export{Vt as default};
