(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{7845:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return b}});var s=n(4051),t=n.n(s),a=n(5893),o=n(3517),i=n.n(o),d=n(7294),c=n(9669),u=n.n(c),l=n(6727),_=n.n(l),h=n(7920),p=n(2057),f=n.n(p);function v(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,s=new Array(r);n<r;n++)s[n]=e[n];return s}function m(e,r,n,s,t,a,o){try{var i=e[a](o),d=i.value}catch(c){return void n(c)}i.done?r(d):Promise.resolve(d).then(s,t)}function y(e){return function(){var r=this,n=arguments;return new Promise((function(s,t){var a=e.apply(r,n);function o(e){m(a,s,t,o,i,"next",e)}function i(e){m(a,s,t,o,i,"throw",e)}o(void 0)}))}}function x(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return v(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e){var r=e.dishType,n=e.dishes,s=e.dishCompany,t=function(e){var r=0,s=!0,t=!1,a=void 0;try{for(var o,i=n[Symbol.iterator]();!(s=(o=i.next()).done);s=!0){e===o.value.name&&r++}}catch(d){t=!0,a=d}finally{try{s||null==i.return||i.return()}finally{if(t)throw a}}return r},o=(0,d.useState)([]),c=o[0],u=o[1];return(0,d.useEffect)((function(){!function(){var e=[],r=!0,s=!1,t=void 0;try{for(var a,o=function(r,n){var s=n.value;e.some((function(e){return e.name===s.name}))||e.push(s)},i=n[Symbol.iterator]();!(r=(a=i.next()).done);r=!0)o(0,a)}catch(d){s=!0,t=d}finally{try{r||null==i.return||i.return()}finally{if(s)throw t}}u(e)}()}),[n]),(0,a.jsxs)("div",{style:{display:"\u041d\u0430\u043f\u0438\u0442\u043e\u043a"===r||"\u0421\u043e\u0443\u0441"===r?"flex":"block"},children:[(0,a.jsxs)("h2",{className:i().orders_item_header,children:[r,": ",c.filter((function(e){return e.type===r})).length," "]}),(0,a.jsx)("ul",{style:{listStyle:"none",paddingInlineStart:"0"},children:c.filter((function(e){return e.type===r&&("\u0412\u0441\u0435"===s||e.company===s)})).map((function(e){return(0,a.jsxs)("li",{children:[e.name," x ",t(e.name)," "]},Math.random())}))})]})}function b(){var e=(0,d.useState)([]),r=e[0],n=e[1],s=new Date;s.setDate(s.getDate()+1);var o=(0,d.useState)(s.toLocaleDateString().split(".").reverse().join("-")),c=o[0],l=o[1],h=(0,d.useState)([]),p=h[0],v=h[1],m=[],b=(0,d.useState)([]),g=(b[0],b[1]),k=(0,d.useState)("\u0412\u0441\u0435"),N=k[0],w=k[1],S=[],C=(0,d.useState)();C[0],C[1];function O(){return(O=y(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/company");case 2:r=e.sent,n(r.data.map((function(e){return Object.assign({},{name:e.name,id:e._id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=y(t().mark((function e(r){var n,s,a,o,i,d,u,l,_,h,p,f,y,j,b,k,N,w,S,C,O,A,D,T,B,E,I,M,Q,P,R,U,V;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new Set(r.map((function(e){return e.company}))),s=!0,a=!1,o=void 0,e.prev=2,i=n[Symbol.iterator]();!(s=(d=i.next()).done);s=!0)u=d.value,m.push(Object.assign({},{company_id:u,orders:[]}));e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,s||null==i.return||i.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:l=!0,_=!1,h=void 0,e.prev=19,p=m[Symbol.iterator]();case 21:if(l=(f=p.next()).done){e.next=43;break}for(y=f.value,j=!0,b=!1,k=void 0,e.prev=24,N=r[Symbol.iterator]();!(j=(w=N.next()).done);j=!0)S=w.value,y.company_id===S.company&&y.orders.push(S);e.next=32;break;case 28:e.prev=28,e.t1=e.catch(24),b=!0,k=e.t1;case 32:e.prev=32,e.prev=33,j||null==N.return||N.return();case 35:if(e.prev=35,!b){e.next=38;break}throw k;case 38:return e.finish(35);case 39:return e.finish(32);case 40:l=!0,e.next=21;break;case 43:e.next=49;break;case 45:e.prev=45,e.t2=e.catch(19),_=!0,h=e.t2;case 49:e.prev=49,e.prev=50,l||null==p.return||p.return();case 52:if(e.prev=52,!_){e.next=55;break}throw h;case 55:return e.finish(52);case 56:return e.finish(49);case 57:g(m),C=[],O=!0,A=!1,D=void 0,e.prev=60,T=m[Symbol.iterator]();case 62:if(O=(B=T.next()).done){e.next=84;break}for(E=B.value,I=!0,M=!1,Q=void 0,e.prev=65,P=E.orders[Symbol.iterator]();!(I=(R=P.next()).done);I=!0)(U=R.value).date===c.split("-").reverse().join(".")&&(V=C).push.apply(V,x(U.dish));e.next=73;break;case 69:e.prev=69,e.t3=e.catch(65),M=!0,Q=e.t3;case 73:e.prev=73,e.prev=74,I||null==P.return||P.return();case 76:if(e.prev=76,!M){e.next=79;break}throw Q;case 79:return e.finish(76);case 80:return e.finish(73);case 81:O=!0,e.next=62;break;case 84:e.next=90;break;case 86:e.prev=86,e.t4=e.catch(60),A=!0,D=e.t4;case 90:e.prev=90,e.prev=91,O||null==T.return||T.return();case 93:if(e.prev=93,!A){e.next=96;break}throw D;case 96:return e.finish(93);case 97:return e.finish(90);case 98:v(C);case 99:case"end":return e.stop()}}),e,null,[[2,6,10,18],[11,,13,17],[19,45,49,57],[24,28,32,40],[33,,35,39],[50,,52,56],[60,86,90,98],[65,69,73,81],[74,,76,80],[91,,93,97]])})))).apply(this,arguments)}function T(){return B.apply(this,arguments)}function B(){return(B=y(t().mark((function e(){var r,n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,u().get("194.58.122.115/order").then((function(e){return e.data}));case 3:n=e.sent,(r=S).push.apply(r,x(n)),A(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){T(S)}),[c]),(0,d.useEffect)((function(){!function(){O.apply(this,arguments)}(),T()}),[]),(0,a.jsxs)("div",{className:i().orders_container,children:[(0,a.jsxs)("div",{className:i().orders_header,children:[(0,a.jsx)("div",{className:i().orders_orders_header,children:"\u0412\u0441\u0435"===N?"\u0412\u0441\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":N}),(0,a.jsxs)("div",{className:i().orders_date_container,children:[(0,a.jsx)("input",{className:i().orders_date,type:"date",onChange:function(e){return l(e.target.value)},value:c}),(0,a.jsxs)("select",{value:N,onChange:function(e){return w(e.target.value)},className:i().orders_companies,children:[(0,a.jsx)("option",{children:"\u0412\u0441\u0435"}),r.map((function(e){return(0,a.jsx)("option",{children:e.name},Math.random())}))]}),(0,a.jsx)("button",{className:i().orders_choose,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c"})]})]}),(0,a.jsxs)("div",{className:i().orders_positions,children:["\u0412\u0441\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u0438: ",p.length]}),(0,a.jsxs)("div",{id:"orders",className:i().orders_orders,children:[(0,a.jsx)("div",{style:{background:"#BADBA5"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u0421\u0430\u043b\u0430\u0442",dishes:p})})})}),(0,a.jsx)("div",{style:{background:"#DBC5A5"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u041f\u0435\u0440\u0432\u043e\u0435",dishes:p})})})}),(0,a.jsx)("div",{style:{background:"#B29898"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u0413\u0430\u0440\u043d\u0438\u0440",dishes:p})})})}),(0,a.jsx)("div",{style:{background:"#DADBA5"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u0412\u0442\u043e\u0440\u043e\u0435",dishes:p})})})}),(0,a.jsx)("div",{style:{gridColumn:"1 / 3",width:"100%",height:"",background:"#98ACB2"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u041d\u0430\u043f\u0438\u0442\u043e\u043a",dishes:p})})})}),(0,a.jsx)("div",{style:{gridColumn:"3 / 5",width:"100%",height:"",background:"#A0B298"},className:i().orders_orders_result_container,children:(0,a.jsx)("div",{className:i().orders_orders_result_header,children:(0,a.jsx)("div",{children:(0,a.jsx)(j,{dishCompany:N,dishType:"\u0421\u043e\u0443\u0441",dishes:p})})})})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("button",{className:i().orders_refresh,children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"}),(0,a.jsx)("div",{className:i().orders_print_container,children:(0,a.jsx)("button",{onClick:function(){return function(e,r){var n=f()(document.getElementById("orders").innerHTML);console.log(n);var s={content:n};_().createPdf(s).print()}()},className:i().orders_print_button,children:"\u041e\u0442\u0447\u0435\u0442"})})]})]})}_().vfs=h.I.vfs},3517:function(e){e.exports={orders_container:"Orders_orders_container__4G6UV",orders_header:"Orders_orders_header__xQzZb",orders_refresh:"Orders_orders_refresh__dsMXQ",orders_print_container:"Orders_orders_print_container__aOaUS",orders_print_button:"Orders_orders_print_button___8Ipy",orders_date_container:"Orders_orders_date_container__lwsY2",orders_date:"Orders_orders_date__Qcfzl",orders_companies:"Orders_orders_companies__qR4CS",orders_choose:"Orders_orders_choose__jJ11v",orders_orders:"Orders_orders_orders__yRKVA",orders_orders_header:"Orders_orders_orders_header__GDAQV",orders_orders_result_header:"Orders_orders_orders_result_header__Ck3Rc",orders_orders_result_container:"Orders_orders_orders_result_container__6ds4x",orders_positions:"Orders_orders_positions__4j6le",orders_item_header:"Orders_orders_item_header__QJ_Sb"}}}]);