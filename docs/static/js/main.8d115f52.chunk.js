(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(9),r=c.n(n),i=c(2),s=c(10),o=c(0),l=function(e){var t=e.setCategories,c=Object(a.useState)(""),n=Object(i.a)(c,2),r=n[0],l=n[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("form",{className:"row g-3 ",onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),l(""))},children:Object(o.jsx)("input",{className:"form-control",type:"text",value:r,onChange:function(e){l(e.target.value)},placeholder:"Buscar Gif"})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("button",{onClick:function(){localStorage.clear("categories"),t([])},type:"button",className:"btn btn-primary",children:"Limpiar"})})]})})},u=c(8),j=c(3),d=c.n(j),b=c(6),g=function(){var e=Object(b.a)(d.a.mark((function e(t){var c,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.giphy.com/v1/gifs/search?limit=8&q=".concat(t,"&api_key=0FAUWHMsNLzmwzFro6hIvqdcWwJ5VxEj"),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=n.data.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=Object(a.useState)({data:[],loading:!0}),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){Object(b.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:c=t.sent,r({loading:!1,data:c});case 4:case"end":return t.stop()}}),t)})))()}),[e]),n},p=function(e){e.id;var t=e.title,c=e.url;return Object(o.jsxs)("div",{className:"card animate__bounceIn",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("img",{src:c,alt:t})]})},f=function(e){var t=e.category,c=m(t),n=c.data,r=c.loading;return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("h3",{children:t}),r&&"Cargando...",Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[n.length<=0&&Object(o.jsx)("img",{className:"rounded mx-auto d-block pre-show",src:"https://media2.giphy.com/media/26gsxasQCBItsbH4k/giphy.gif?cid=ecf05e474w83uu4282pgbwyc7xjzixsaf6f8mi0v09eun8zv&rid=giphy.gif&ct=g",alt:"Spinner"}),n.map((function(e){return Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("ol",{children:Object(a.createElement)(p,Object(u.a)(Object(u.a)({},e),{},{key:e.id}))})},e.id)}))]})})]})},h=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){if(localStorage.getItem("categories")){var t=localStorage.getItem("categories").split(",");e.length>0&&(console.log(e),t.push(e[0]),localStorage.setItem("categories",t)),r(t)}else{localStorage.setItem("categories",e);var c=localStorage.getItem("categories").split(",");r(c)}}),[e]),n},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=h(c);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GiphyApi-reactjs"}),Object(o.jsx)(l,{setCategories:n}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:r.map((function(e){return Object(o.jsx)(f,{category:e},e)}))})]})};c(17),c(18);r.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8d115f52.chunk.js.map