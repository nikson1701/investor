(this.webpackJsonpinvestor=this.webpackJsonpinvestor||[]).push([[0],{76:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),r=c(45),i=c.n(r),s=(c(76),c(19)),o=c(60),l=c(68),d=c(97),u=c(14),b=c(26),j=c(17),p="TICKERS::ADD_TICKER_WITH_SAGA",x="TICKERS::ADD_STOCK_TICKER_WITH_SAGA",O="TICKERS::ADD_PIFS_TICKER_WITH_SAGA",f="TICKERS::ADD_BONDS_TICKER_WITH_SAGA",h="TICKERS::ADD_FOREX_TICKER_WITH_SAGA",k=c(98),m=c(5),v=Object(k.a)((function(e){return{searchListContainer:{maxWidth:"500px"},searchList:{listStyle:"none",padding:"0",margin:"0"},addButton:{border:"none","&:hover":{color:"#fff",backgroundColor:"#222"}}}}));var g=function(e){var t=v();return Object(m.jsx)("div",{className:t.searchListContainer,children:Object(m.jsx)("ul",{className:t.searchList,children:e.searchResult.map((function(c){return Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){return e.submitTicker(c.ticker)},className:t.addButton,children:c.descr})},c.ticker+c.classcode)}))})})},y=Object(k.a)((function(e){return{form:{maxWidth:"400px",border:"1px solid black",borderRadius:"10px",display:"flex",flexDirection:"column",margin:"10px"},formSubmit:{display:"block"},searchItem:{margin:"5px 10px",marginBottom:"5px"}}}));var C=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(n.useState)(""),b=Object(u.a)(d,2),j=b[0],p=b[1],k=Object(n.useState)(""),v=Object(u.a)(k,2),C=v[0],D=v[1],N=Object(n.useState)([]),S=Object(u.a)(N,2),w=S[0],I=S[1],T=Object(s.b)(),E=y();return Object(m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t="https://api.bcs.ru/udfdatafeed/v1/history?symbol=".concat(c,"&resolution=d&from=").concat(+new Date(j)/1e3,"&to=").concat((+new Date(j)+828e5)/1e3),n="https://api.bcs.ru/udfdatafeed/v1/symbols?symbol=".concat(c);fetch(t).then((function(e){return e.json()})).then((function(e){fetch(n).then((function(e){return e.json()})).then((function(t){if("stock"===t.type){var n=e.c[0],a=e.c[0]*o;T(function(e,t,c,n,a,r){return{type:x,ticker:e,description:t,date:c,quantity:n,cost:a,total:r}}(c,t.description,j,o,n.toFixed(2),a.toFixed(2)))}else if("pif"===t.type){var r=e.c[0],i=e.c[0]*o;T(function(e,t,c,n,a,r){return{type:O,ticker:e,description:t,date:c,quantity:n,cost:a,total:r}}(c,t.description,j,o,r.toFixed(2),i.toFixed(2)))}else if("bonds"===t.type){var s=10*e.c[0],l=e.c[0]*o*10;T(function(e,t,c,n,a,r){return{type:f,ticker:e,description:t,date:c,quantity:n,cost:a,total:r}}(c,t.description,j,o,s.toFixed(2),l.toFixed(2)))}else if("forex"===t.type){var d=e.c[0],u=e.c[0]*o;T(function(e,t,c,n,a,r){return{type:h,ticker:e,description:t,date:c,quantity:n,cost:a,total:r}}(c,t.description,j,o,d.toFixed(2),u.toFixed(2)))}})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},className:E.form,label:"Ticker",children:[Object(m.jsx)("input",{type:"text",disabled:!0,className:E.searchItem,value:c,onChange:function(e){a(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"number",className:E.searchItem,value:o,onChange:function(e){l(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"date",className:E.searchItem,value:j,onChange:function(e){p(e.target.value)},required:!0}),Object(m.jsx)("input",{type:"submit",className:E.formSubmit+" "+E.searchItem,value:"Add"}),Object(m.jsx)("input",{type:"text",className:E.searchItem,value:C,onChange:function(e){D(e.target.value);var t="https://api.bcs.ru/udfdatafeed/v1/search?query=".concat(e.target.value,"&limit=10");fetch(t).then((function(e){return e.json()})).then((function(e){var t=[];e.forEach((function(e,c){t.push({ticker:e.symbol,descr:e.description,classcode:e.classcode})})),I(t)})).catch((function(e){console.log(e)}))}}),Object(m.jsx)(g,{className:E.searchItem,searchResult:w,submitTicker:function(e){a(e)}})]})},D="TICKERS::DEL_TICKER_WITH_SAGA",N=function(e,t){return{type:D,ticker:e,marketType:t}},S=Object(k.a)((function(e){return{table:{},ticker:{display:"flex",flexDirection:"row",border:"1px solid black",margin:"10px"},tickerName:{display:"flex",flexDirection:"column",width:"110px",alignItems:"center",justifyContent:"space-around",padding:"5px"},tickerTable:{display:"flex",flexDirection:"row"},tickerDate:{display:"flex",flexDirection:"column",borderLeft:"1px solid black","&:last-child":{borderRight:"1px solid black"}},tickerDateCell:{borderBottom:"1px solid black",margin:"0",padding:"5px","&:last-child":{borderBottom:"none"}}}}));var w=function(e){var t=Object(s.b)(),c=S(),n=Object.keys(e.forex||{});return Object(m.jsx)("div",{className:"my-list-container",children:Object(m.jsx)("div",{className:c.table,children:n.map((function(n){return Object(m.jsxs)("div",{className:c.ticker,children:[Object(m.jsxs)("div",{className:c.tickerName,children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("p",{children:e.forex[n].description}),Object(m.jsx)("button",{onClick:function(){return function(e,c){t(N(e,c))}(n,"forex")},children:"del"})]}),Object(m.jsx)("div",{className:c.tickerTable,children:Object.keys(e.forex[n].data).map((function(t){return Object(m.jsxs)("div",{className:c.tickerDate,children:[Object(m.jsx)("p",{className:c.tickerDateCell,children:t}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.forex[n].data[t].quantity}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.forex[n].data[t].cost}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.forex[n].data[t].total})]},e.forex[n].data[t].ticker+t)}))})]},n)}))})})},I=Object(k.a)((function(e){return{table:{maxWidth:"100%"},ticker:{display:"flex",flexDirection:"row",border:"1px solid black",margin:"10px",overflow:"auto"},tickerName:{display:"flex",flexDirection:"column",width:"110px",alignItems:"center",justifyContent:"space-around",padding:"5px",flexShrink:"0"},tickerTable:{display:"flex",flexDirection:"row"},tickerDate:{display:"flex",flexDirection:"column",borderLeft:"1px solid black","&:last-child":{borderRight:"1px solid black"}},tickerDateCell:{borderBottom:"1px solid black",margin:"0",padding:"5px","&:last-child":{borderBottom:"none"}}}}));var T=function(e){var t=Object(s.b)(),c=I(),n=Object.keys(e.stocks||{});return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:c.table,children:n.map((function(n){return Object(m.jsxs)("div",{className:c.ticker,children:[Object(m.jsxs)("div",{className:c.tickerName,children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("p",{children:e.stocks[n].description}),Object(m.jsx)("button",{onClick:function(){return function(e,c){t(N(e,c))}(n,"stocks")},children:"del"})]}),Object(m.jsx)("div",{className:c.tickerTable,children:Object.keys(e.stocks[n].data).map((function(t){return Object(m.jsxs)("div",{className:c.tickerDate,children:[Object(m.jsx)("p",{className:c.tickerDateCell,children:t}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.stocks[n].data[t].quantity}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.stocks[n].data[t].cost}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.stocks[n].data[t].total})]},e.stocks[n].data[t].ticker+t)}))})]},n)}))})})},E=Object(k.a)((function(e){return{table:{},ticker:{display:"flex",flexDirection:"row",border:"1px solid black",margin:"10px"},tickerName:{display:"flex",flexDirection:"column",width:"110px",alignItems:"center",justifyContent:"space-around",padding:"5px"},tickerTable:{display:"flex",flexDirection:"row"},tickerDate:{display:"flex",flexDirection:"column",borderLeft:"1px solid black","&:last-child":{borderRight:"1px solid black"}},tickerDateCell:{borderBottom:"1px solid black",margin:"0",padding:"5px","&:last-child":{borderBottom:"none"}}}}));var _=function(e){var t=Object(s.b)(),c=E(),n=Object.keys(e.pifs||{});return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:c.table,children:n.map((function(n){return Object(m.jsxs)("div",{className:c.ticker,children:[Object(m.jsxs)("div",{className:c.tickerName,children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("p",{children:e.pifs[n].description}),Object(m.jsx)("button",{onClick:function(){return function(e,c){t(N(e,c))}(n,"pifs")},children:"del"})]}),Object(m.jsx)("div",{className:c.tickerTable,children:Object.keys(e.pifs[n].data).map((function(t){return Object(m.jsxs)("div",{className:c.tickerDate,children:[Object(m.jsx)("p",{className:c.tickerDateCell,children:t}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.pifs[n].data[t].quantity}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.pifs[n].data[t].cost}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.pifs[n].data[t].total})]},e.pifs[n].data[t].ticker+t)}))})]},n)}))})})},R=Object(k.a)((function(e){return{table:{},ticker:{display:"flex",flexDirection:"row",border:"1px solid black",margin:"10px"},tickerName:{display:"flex",flexDirection:"column",width:"110px",alignItems:"center",justifyContent:"space-around",padding:"5px"},tickerTable:{display:"flex",flexDirection:"row"},tickerDate:{display:"flex",flexDirection:"column",borderLeft:"1px solid black","&:last-child":{borderRight:"1px solid black"}},tickerDateCell:{borderBottom:"1px solid black",margin:"0",padding:"5px","&:last-child":{borderBottom:"none"}}}}));var q=function(e){var t=Object(s.b)(),c=R(),n=Object.keys(e.bonds||{});return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:c.table,children:n.map((function(n){return Object(m.jsxs)("div",{className:c.ticker,children:[Object(m.jsxs)("div",{className:c.tickerName,children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("p",{children:e.bonds[n].description}),Object(m.jsx)("button",{onClick:function(){return function(e,c){t(N(e,c))}(n,"bonds")},children:"del"})]}),Object(m.jsx)("div",{className:c.tickerTable,children:Object.keys(e.bonds[n].data).map((function(t){return Object(m.jsxs)("div",{className:c.tickerDate,children:[Object(m.jsx)("p",{className:c.tickerDateCell,children:t}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.bonds[n].data[t].quantity}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.bonds[n].data[t].cost}),Object(m.jsx)("p",{className:c.tickerDateCell,children:e.bonds[n].data[t].total})]},e.bonds[n].data[t].ticker+t)}))})]},n)}))})})},A="TICKERS::INIT_TICKERS",F=function(e){return{type:A,tickers:e}},K="TICKERS::INIT_TICKERS_WITH_SAGA";function B(e){return e.tickers.stocks}function L(e){return e.tickers.pifs}function W(e){return e.tickers.bonds}function H(e){return e.tickers.forex}var G=Object(k.a)((function(e){return{App:{margin:"0 auto"},mainContainer:{display:"flex",flexDirection:"column",backgroundColor:"#EEE"}}}));var P=function(){var e=Object(s.b)(),t=Object(s.c)(H),c=Object(s.c)(B),a=Object(s.c)(L),r=Object(s.c)(W);Object(n.useEffect)((function(){e({type:K})}),[]);var i=G();return Object(m.jsxs)("div",{className:i.App+i.mainContainer,children:[Object(m.jsx)(C,{}),Object(m.jsx)("div",{children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(m.jsx)(w,{forex:t}),Object(m.jsx)("div",{children:"\u0410\u043a\u0446\u0438\u0438"}),Object(m.jsx)(T,{stocks:c}),Object(m.jsx)("div",{children:"\u0424\u043e\u043d\u0434\u044b"}),Object(m.jsx)(_,{pifs:a}),Object(m.jsx)("div",{children:"\u041e\u0431\u043b\u0438\u0433\u0430\u0446\u0438\u0438"}),Object(m.jsx)(q,{bonds:r})]})},M=c(39),X=c(53),z="/investor",J=["authenticated"];function U(e){var t=e.authenticated,c=Object(X.a)(e,J);return t?Object(m.jsx)(j.b,Object(M.a)({},c)):Object(m.jsx)(j.a,{to:{pathname:"".concat(z,"/login")}})}var V=["authenticated"];function Y(e){var t=e.authenticated,c=Object(X.a)(e,V);return t?Object(m.jsx)(j.a,{to:"".concat(z,"/")}):Object(m.jsx)(j.b,Object(M.a)({},c))}var Q=c(48),Z=c(15),$=c(66),ee=(Object($.a)({apiKey:"AIzaSyAS0Sazo-Bbg-TouSxSrenj5hTYa5bnjN8",authDomain:"investor-8a0c2.firebaseapp.com",projectId:"investor-8a0c2",storageBucket:"investor-8a0c2.appspot.com",messagingSenderId:"949350207446",appId:"1:949350207446:web:c6cf85c9033c3ed2491e77"}),Object(Q.b)()),te=Object(Z.a)(),ce=c(37),ne=c(0),ae=c.n(ne),re=c(3);var ie=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),s=i[0],o=i[1],l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],p=d[1],x=Object(n.useCallback)((function(e){o(e.target.value)}),[]),O=Object(n.useCallback)((function(e){a(e.target.value)}),[]),f=function(){var e=Object(re.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(""),e.prev=2,e.next=5,Object(ce.a)(ee,c,s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),p(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:f,children:[Object(m.jsx)("p",{children:"Fill in the form below to register new account."}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:O,value:c})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{placeholder:"Password",name:"password",onChange:x,value:s,type:"password"})}),Object(m.jsxs)("div",{children:[j&&Object(m.jsx)("p",{children:j}),Object(m.jsx)("button",{type:"submit",children:"Login"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:["Already have an account? ",Object(m.jsx)(b.b,{to:"/gbCourse5Hw/login",children:"Sign in"})]})]})})};var se=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),s=i[0],o=i[1],l=Object(n.useState)(""),d=Object(u.a)(l,2),j=d[0],p=d[1],x=function(){var e=Object(re.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(""),e.prev=2,e.next=5,Object(ce.c)(ee,c,s);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),p(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:x,children:[Object(m.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:function(e){a(e.target.value)},value:c})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{placeholder:"Password",name:"password",onChange:function(e){o(e.target.value)},value:s,type:"password"})}),Object(m.jsxs)("div",{children:[j&&Object(m.jsx)("p",{children:j}),Object(m.jsx)("button",{type:"submit",children:"Login"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:["Don't have an account? ",Object(m.jsx)(b.b,{to:"/gbCourse5Hw/signup",children:"Sign up"})]})]})})};var oe=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){return Object(ce.b)(ee,(function(e){a(!!e)}))}),[]);var r=Object(n.useCallback)((function(){Object(ce.d)(ee).then((function(){})).catch((function(e){}))}),[]);return Object(m.jsxs)(b.a,{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)(b.b,{to:"".concat(z,"/"),children:"Main"}),Object(m.jsx)(b.b,{to:"".concat(z,"/signup"),children:"Registration"}),Object(m.jsx)(b.b,{to:"".concat(z,"/login"),children:"Login"}),Object(m.jsx)("button",{onClick:r,children:"Sign Out"})]}),Object(m.jsxs)(j.d,{children:[Object(m.jsx)(U,{authenticated:c,exact:!0,path:"".concat(z,"/"),children:Object(m.jsx)(P,{})}),Object(m.jsx)(Y,{authenticated:c,path:"".concat(z,"/signup"),children:Object(m.jsx)(ie,{})}),Object(m.jsx)(Y,{authenticated:c,path:"".concat(z,"/login"),children:Object(m.jsx)(se,{})}),Object(m.jsx)(j.b,{children:Object(m.jsx)("h4",{children:"404"})})]})]})},le=c(28),de=c(69),ue=c(58),be=c(67),je=c.n(be),pe={tickers:{}},xe=c(35),Oe=ae.a.mark((function e(){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers");case 3:return t=e.sent,e.next=6,Object(Z.b)(t,(function(e){var t=e.val();qe.dispatch(F(t||{}))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),fe=ae.a.mark((function e(t){var c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/".concat(t.ticker,"/").concat(t.date));case 3:return c=e.sent,e.next=6,Object(Z.e)(c,{ticker:t.ticker,quantity:t.quantity,cost:t.cost,total:t.total});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})),he=ae.a.mark((function e(t){var c,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/stocks/".concat(t.ticker,"/data/").concat(t.date));case 3:return c=e.sent,e.next=6,Object(Z.e)(c,{ticker:t.ticker,description:t.description,quantity:t.quantity,cost:t.cost,total:t.total});case 6:return e.next=8,Object(Z.c)(te,"tickers/stocks/".concat(t.ticker,"/description"));case 8:return n=e.sent,e.next=11,Object(Z.e)(n,t.description);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})),ke=ae.a.mark((function e(t){var c,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/pifs/".concat(t.ticker,"/data/").concat(t.date));case 3:return c=e.sent,e.next=6,Object(Z.e)(c,{ticker:t.ticker,description:t.description,quantity:t.quantity,cost:t.cost,total:t.total});case 6:return e.next=8,Object(Z.c)(te,"tickers/pifs/".concat(t.ticker,"/description"));case 8:return n=e.sent,e.next=11,Object(Z.e)(n,t.description);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})),me=ae.a.mark((function e(t){var c,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/bonds/".concat(t.ticker,"/data/").concat(t.date));case 3:return c=e.sent,e.next=6,Object(Z.e)(c,{ticker:t.ticker,description:t.description,quantity:t.quantity,cost:t.cost,total:t.total});case 6:return e.next=8,Object(Z.c)(te,"tickers/bonds/".concat(t.ticker,"/description"));case 8:return n=e.sent,e.next=11,Object(Z.e)(n,t.description);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})),ve=ae.a.mark((function e(t){var c,n;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/forex/".concat(t.ticker,"/data/").concat(t.date));case 3:return c=e.sent,e.next=6,Object(Z.e)(c,{ticker:t.ticker,description:t.description,quantity:t.quantity,cost:t.cost,total:t.total});case 6:return e.next=8,Object(Z.c)(te,"tickers/forex/".concat(t.ticker,"/description"));case 8:return n=e.sent,e.next=11,Object(Z.e)(n,t.description);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})),ge=ae.a.mark((function e(t){var c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Z.c)(te,"tickers/".concat(t.marketType,"/").concat(t.ticker));case 3:return c=e.sent,e.next=6,Object(Z.d)(c);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})),ye=ae.a.mark(Ce);function Ce(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)(K,Oe);case 2:return e.next=4,Object(xe.a)(p,fe);case 4:return e.next=6,Object(xe.a)(x,he);case 6:return e.next=8,Object(xe.a)(O,ke);case 8:return e.next=10,Object(xe.a)(f,me);case 10:return e.next=12,Object(xe.a)(h,ve);case 12:return e.next=14,Object(xe.a)(D,ge);case 14:case"end":return e.stop()}}),ye)}var De=Ce,Ne=pe.tickers;var Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(M.a)({},t.tickers);default:return e}},we=Object(le.b)({tickers:Se}),Ie={onError:function(e,t){console.log("qqq"+e),console.log(t)}},Te=Object(de.a)(Ie),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.c,_e={key:"root",storage:je.a},Re=Object(ue.a)(_e,we),qe=Object(le.d)(Re,pe,Ee(Object(le.a)(Te)));Te.run(De);var Ae=Object(ue.b)(qe),Fe=Object(l.a)({palette:{primary:{main:"#708238"},secondary:{main:"#0098FF"}}});var Ke=function(){return Object(m.jsx)(s.a,{store:qe,children:Object(m.jsx)(o.a,{persistor:Ae,children:Object(m.jsx)(d.a,{theme:Fe,children:Object(m.jsx)(oe,{})})})})},Be=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,99)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Ke,{})}),document.getElementById("root")),Be()}},[[86,1,2]]]);
//# sourceMappingURL=main.5f7f1ca9.chunk.js.map