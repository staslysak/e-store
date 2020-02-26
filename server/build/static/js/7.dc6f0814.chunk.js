(this["webpackJsonpstore-final"]=this["webpackJsonpstore-final"]||[]).push([[7],{431:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n=function(e){return e?void 0:null},r=function(e){var a={},t=e.zip,n=e.city,r=e.email,l=e.phone,i=e.country,s=e.address,c=e.password,o=e.lastname,m=e.firstname,u=e.cardnumber,d=e.exp,p=e.cvv;return m?m.length<2&&(a.firstname="Entry is too short, please lengthen your entry"):a.firstname="Please enter your first name",o?o.length<2&&(a.lastname="Entry is too short, please lengthen your entry"):a.lastname="Please enter your last name",i?i.length<2&&(a.country="Please enter a valid country"):a.country="Please enter country",n?n.length<2&&(a.city="Please enter a valid city"):a.city="Please enter city",t?t.length<3&&(a.zip="Please enter a valid postal code"):a.zip="Please enter your postal code",s?s.length<2&&(a.address="Please enter a valid address"):a.address="Please enter your address",r?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(r)||(a.email="Please enter a valid email address"):a.email="Please enter your email address",l?l.length<=9&&(a.phone="Please enter a valid phone number"):a.phone="Please enter your phone number",c?c.length<5&&(a.password="Password is too short"):a.password="Please enter your password",(!u||u.length<16)&&(a.cardnumber="Please enter card number"),(!d||d.length<4)&&(a.exp="Please enter expiration date"),(!p||p.length<4)&&(a.cvv="Please enter security code"),a}},432:function(e,a,t){"use strict";var n=t(14),r=t(0),l=t.n(r),i=t(543);a.a=function(e){var a=e.input,t=(e.helperText,e.meta),r=t.touched,s=t.invalid,c=t.error,o=Object(n.a)(e,["input","helperText","meta"]);return l.a.createElement(i.a,Object.assign({fullWidth:!0,variant:"outlined"},a,o,{helperText:c&&r?c:null,error:r&&s}))}},435:function(e,a,t){"use strict";var n=t(439),r={phone:Object(n.createTextMask)({guide:!1,pattern:"9 (99) 999 99 99"}),cardnumber:Object(n.createTextMask)({guide:!1,pattern:"9999 9999 9999 9999"}),cardexp:Object(n.createTextMask)({guide:!1,pattern:"99/99"})};a.a=r},436:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(534),i=t(432),s=t(431),c=t(471);a.a=function(){return r.a.createElement(c.a,{container:!0,spacing:1},r.a.createElement(c.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"firstname",label:"First Name",variant:"outlined",component:i.a,validate:[s.a]})),r.a.createElement(c.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"lastname",label:"Last Name",component:i.a,validate:[s.a]})),r.a.createElement(c.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"address",label:"Address",component:i.a,validate:[s.a]})),r.a.createElement(c.a,{item:!0,xs:12,sm:4},r.a.createElement(l.a,{name:"country",label:"Country",component:i.a,validate:[s.a]})),r.a.createElement(c.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"city",label:"City",component:i.a,validate:[s.a]})),r.a.createElement(c.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"zip",label:"Postal Code",inputProps:{maxLength:12},type:"tel",component:i.a,validate:[s.a]})))}},438:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(534),i=t(432),s=t(471),c=t(435);a.a=function(){return r.a.createElement(s.a,{container:!0,spacing:1},r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"firstname",label:"First Name",component:i.a})),r.a.createElement(s.a,{item:!0,xs:12,sm:6},r.a.createElement(l.a,{name:"lastname",label:"Last Name",component:i.a})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"address",label:"Address",component:i.a})),r.a.createElement(s.a,{item:!0,xs:12,sm:4},r.a.createElement(l.a,{name:"country",label:"Country",component:i.a})),r.a.createElement(s.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"city",label:"City",component:i.a})),r.a.createElement(s.a,{item:!0,xs:6,sm:4},r.a.createElement(l.a,{name:"zip",label:"Postal Code",inputProps:{maxLength:12},type:"tel",component:i.a})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(l.a,{name:"email",label:"Email",type:"email",component:i.a})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(l.a,Object.assign({name:"phone",label:"Phone",inputProps:{maxLength:30},type:"tel",component:i.a},c.a.phone))))}},465:function(e,a,t){},466:function(e,a,t){},468:function(e,a,t){},469:function(e,a,t){},538:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(15),l=t(0),i=t.n(l),s=t(61),c=t(35),o=t(536),m=t(526),u=t(147),d=(t(465),t(67)),p=t(443),b=t(19),v=(t(466),t(16)),f=function(e){var a=e.color,t=e.product,n=e.currency,r=e.quantity,l=e.size,s="/pp/"+t.slug+"/"+a.slug;return i.a.createElement("div",{className:"OrderItem"},i.a.createElement("div",{className:"OrderItem-img"},i.a.createElement(v.b,{to:s},i.a.createElement("img",{src:a.preview_image,alt:"img"}))),i.a.createElement("div",{className:"OrderItem-info"},i.a.createElement(d.a,{component:"div",color:"textPrimary",className:"OrderItem-info-title"},i.a.createElement(v.b,{to:s},t.title)),i.a.createElement(d.a,{variant:"body2",color:"textSecondary"},t.subtitle),i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"div"},"Color: ",a.color),i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"div"},"Size: ",l),i.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"div"},"Qty: ",r," / ",n,a.price),i.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"div"},n,r*a.price)))},E=t(467),y=t.n(E),h=function(e){var a=e.orders,t=e.currency,n=e.getUserOrders;return i.a.useEffect((function(){n()}),[n]),i.a.createElement("div",{className:"orderPage"},i.a.createElement(d.a,{variant:"h5",component:"h2",align:"center",className:"orderPage-title"},"My Orders"),i.a.createElement("div",null,a.length?a.map((function(e,a){var n=e.items,r=e.created_at;return i.a.createElement(p.a,{className:"orderPage-block",key:a},n.map((function(e){var a=e._id,n=e.color,r=e.product,l=e.size,s=e.quantity;return i.a.createElement(f,{key:a,color:n,product:r,size:l,quantity:s,currency:t})})),i.a.createElement(d.a,{variant:"h6",component:"div",className:"orderPage-total"},"Total:"," ",i.a.createElement("span",null,t,Object(b.j)(n))),i.a.createElement(d.a,{align:"left",variant:"caption",style:{margin:"0 0 8px 8px",display:"block"}},y()(r).format("MMM DD, YYYY HH:mm")))})):i.a.createElement(d.a,{variant:"subtitle1",component:"div",align:"center",children:"You don't have any orders yet"})))},g=(t(468),t(533)),x=t(431),P=t(6),O=t.n(P),j=t(37),N=t(14),S=(t(469),t(411)),w=t(436),k=t(438),z=t(173),A=function(e){var a=e.handleSubmit,t=e.invalid,n=e.onSubmit,r=(e.initialValues,e.formType),l=Object(N.a)(e,["handleSubmit","invalid","onSubmit","initialValues","formType"]);return i.a.createElement("div",{className:"ProfileForm"},i.a.createElement(z.a,{title:l.title},i.a.createElement("form",{onSubmit:a((function(e){return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(n(Object(j.a)({},r,e)));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}))}))},"shipping"===r?i.a.createElement(k.a,null):"billing"===r?i.a.createElement(w.a,null):null,i.a.createElement("div",{className:"formBtns"},i.a.createElement(S.a,{onClick:function(){return l.reset()}},"Cancel"),i.a.createElement(S.a,{variant:"contained",color:"primary",type:"submit",disabled:t},"Save")))))},C=Object(g.a)({form:"profile-shipping",validate:x.b,enableReinitialize:!0})(A),T=Object(g.a)({form:"profile-billing",validate:x.b,enableReinitialize:!0})(A),U=function(e){var a=e.fullname,t=e.userShipping,n=e.userBilling,r=e.setUserAddresses;return i.a.createElement("div",{className:"profilePage"},i.a.createElement(d.a,{variant:"h5",component:"h2",align:"center",className:"profilePage-title"},"Hi, ",a),i.a.createElement("div",{className:"profilePage-forms"},i.a.createElement("div",null,i.a.createElement(C,{formType:"shipping",initialValues:t,onSubmit:r,title:"Shipping Address"}),i.a.createElement(T,{formType:"billing",initialValues:n,onSubmit:r,title:"Billing Address"}))))},M=t(30),B=Object(u.a)({profile:{padding:"60px 12px",maxWidth:1200,margin:"0 auto"},tabs:{}});a.default=Object(c.b)((function(e){return{userShipping:e.auth.addresses.shipping,userBilling:e.auth.addresses.billing,fullname:e.auth.fullname,currency:e.products.currency,orders:e.auth.orders}}),{setUserAddresses:M.q,getUserOrders:M.k})((function(e){var a=e.match,t=e.history,c=e.location,u=e.currency,d=e.orders,p=e.userShipping,b=e.userBilling,v=e.fullname,f=e.setUserAddresses,E=e.getUserOrders,y=B(),g=Object(l.useState)({modes:{preview:"",orders:"/orders"},mode:"preview"}),x=Object(r.a)(g,2),P=x[0],O=x[1];return Object(l.useEffect)((function(){O((function(e){return Object(n.a)({},e,{},(a="profile",t=P.modes,l=c.pathname,Object.entries(t).map((function(e){var t=Object(r.a)(e,2),i=t[0],c=t[1];return Object(n.a)({mode:i},Object(s.f)(l,{path:"/".concat(a).concat(c),exact:!0})||{})})).find((function(e){return e.path}))||{}));var a,t,l}))}),[c.pathname,P.modes]),i.a.createElement("div",{className:y.profile},i.a.createElement(o.a,{value:c.pathname,indicatorColor:"primary",onChange:function(e,a){return t.push(a)},centered:!0},i.a.createElement(m.a,{disableRipple:!0,className:y.tabs,value:a.url,label:"Profile"}),i.a.createElement(m.a,{disableRipple:!0,className:y.tabs,value:a.url+"/orders",label:"Orders"})),"preview"===P.mode?i.a.createElement(U,{fullname:v,userShipping:p,userBilling:b,setUserAddresses:f}):P.mode=i.a.createElement(h,{currency:u,orders:d,getUserOrders:E}))}))}}]);
//# sourceMappingURL=7.dc6f0814.chunk.js.map