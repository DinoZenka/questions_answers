(this.webpackJsonp1task=this.webpackJsonp1task||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),s=a.n(r),o=(a(15),a(2)),i=a(6),u=a(9),l=a(7),j=a.n(l),f=a(10),d=a(4),b=(a(17),a(0)),h=function(e){var t=e.question,a=e.id,n=e.changeVal,c=e.value;return Object(b.jsxs)("div",{className:"question-container",children:[Object(b.jsx)("label",{className:"question",htmlFor:"input".concat(a),children:t}),Object(b.jsx)("input",{id:"input".concat(a),className:"answer",type:"text",value:c,onChange:n,name:t,placeholder:"*\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",required:!0})]})};var v=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=c.a.useState({}),s=Object(d.a)(r,2),l=s[0],v=s[1],O=c.a.useState(!0),m=Object(d.a)(O,2),p=m[0],x=m[1];c.a.useEffect((function(){(function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.next=3,fetch("data.json").then((function(e){return e.json()}));case 3:t=e.sent,n(t.data),x(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.useEffect((function(){var e,t={},n=Object(u.a)(a);try{for(n.s();!(e=n.n()).done;){var c=e.value,r=localStorage.getItem(c.question);t[c.question]=r||""}}catch(s){n.e(s)}finally{n.f()}v(t)}),[a]);var g=function(e){var t=Object(i.a)(Object(i.a)({},l),{},Object(o.a)({},e.target.name,e.target.value));v(t)};return Object(b.jsx)("div",{className:"form-container",children:p?Object(b.jsxs)("form",{className:"form",children:[a.map((function(e){var t=l[e.question];return Object(b.jsx)(h,{question:e.question,id:e.id,changeVal:g,value:t||""},e.id)})),Object(b.jsx)("button",{className:"send-button",onClick:function(e){for(var t=!1,a={},n=0,c=Object.keys(l);n<c.length;n++){var r=c[n];""===l[r]&&(t=!0),localStorage.setItem(r,l[r]),a[r]=""}t?(localStorage.clear(),alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")):(alert("\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b!"),v(a)),e.preventDefault()},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}):Object(b.jsx)("h1",{children:"Loading data..."})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.20d8f714.chunk.js.map