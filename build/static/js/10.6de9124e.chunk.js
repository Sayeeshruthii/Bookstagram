(this.webpackJsonpBookstagram=this.webpackJsonpBookstagram||[]).push([[10],{230:function(e,c,s){"use strict";var t=s(2),i=(s(0),s(24)),a=s(7),n=s(61);c.a=Object(a.i)((function(){return Object(t.jsxs)("div",{class:"sidebar",children:[Object(t.jsx)("div",{class:"brand-logo",children:Object(t.jsx)("a",{href:"index.html",children:Object(t.jsx)("img",{src:n.a,alt:"logo",height:"75px",width:"75px"})})}),Object(t.jsxs)("div",{class:"menu",children:[Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/home","data-toggle":"tooltip","data-placement":"right",title:"Home",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-home"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/my-books","data-toggle":"tooltip","data-placement":"right",title:"My book Shelf",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-library"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/book-list","data-toggle":"tooltip","data-placement":"right",title:"List Of Books",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-book"})})})}),Object(t.jsx)("li",{children:Object(t.jsx)(i.b,{to:"/my-friends","data-toggle":"tooltip","data-placement":"right",title:"My Friends",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-ui-user-group"})})})}),Object(t.jsx)("li",{class:"logout",children:Object(t.jsx)("a",{href:"signin.html","data-toggle":"tooltip","data-placement":"right",title:"Signout",children:Object(t.jsx)("span",{children:Object(t.jsx)("i",{class:"icofont-power"})})})})]}),Object(t.jsxs)("p",{class:"copyright",children:["\xa9 ",Object(t.jsx)("a",{href:"#",children:"Bookstagram INC"})]})]})]})}))},231:function(e,c,s){"use strict";c.a=s.p+"static/media/2.103f6fcc.png"},232:function(e,c,s){"use strict";var t=s(60),i=s.n(t),a=localStorage.getItem("userToken"),n=i.a.create({baseURL:"http://40.80.95.65/store",headers:{Authorization:"token "+a}});c.a=n},233:function(e,c,s){"use strict";var t=s(19),i=s(2),a=s(0),n=s.n(a),l=s(33),j=s(231),r=s(230),o=s(15),d=s(24);c.a=function(){JSON.parse(localStorage.getItem("userData"));var e=Object(a.useState)(!1),c=Object(t.a)(e,2),s=c[0],b=c[1],h=Object(a.useState)(!1),O=Object(t.a)(h,2),x=O[0],m=O[1],u=Object(l.b)();Object(l.c)((function(e){return e}));return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-xxl-12",children:Object(i.jsxs)("div",{className:"header-content",children:[Object(i.jsxs)("div",{className:"header-right",children:[Object(i.jsx)("div",{className:"brand-logo",children:Object(i.jsxs)("a",{href:"index.html",children:[Object(i.jsx)("img",{src:"./images/logo.png",alt:""}),Object(i.jsx)("span",{children:"Bookstagram"})]})}),Object(i.jsx)("div",{className:"search",children:Object(i.jsx)("form",{action:"#",children:Object(i.jsxs)("div",{className:"input-group",children:[Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Here"}),Object(i.jsx)("span",{className:"input-group-text",children:Object(i.jsx)("i",{className:"icofont-search"})})]})})})]}),Object(i.jsxs)("div",{className:"header-right",children:[Object(i.jsxs)("div",{className:"dark-light-toggle",onclick:function(){return console.log("Toggle Clicked")},children:[Object(i.jsx)("span",{className:"dark",children:Object(i.jsx)("i",{className:"icofont-moon"})}),Object(i.jsx)("span",{className:"light",children:Object(i.jsx)("i",{className:"icofont-sun-alt"})})]}),Object(i.jsxs)("div",{className:"notification dropdown",children:[Object(i.jsx)("div",{className:"notify-bell",onClick:function(){return m(!x)},children:Object(i.jsx)("span",{children:Object(i.jsx)("i",{className:"icofont-alarm"})})}),x?Object(i.jsxs)("div",{className:"dropdown-menu dropdown-menu-right notification-list",children:[Object(i.jsx)("h4",{children:"Announcements"}),Object(i.jsxs)("div",{className:"lists",children:[Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon success",children:Object(i.jsx)("i",{className:"icofont-check"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Account created successfully"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon fail",children:Object(i.jsx)("i",{className:"icofont-close"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"2FA verification failed"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon success",children:Object(i.jsx)("i",{className:"icofont-check"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Device confirmation completed"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsx)("a",{href:"#",className:"",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)("span",{className:"mr-3 icon pending",children:Object(i.jsx)("i",{className:"icofont-warning"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Phone verification pending"}),Object(i.jsx)("span",{children:"2020-11-04 12:00:23"})]})]})}),Object(i.jsxs)("a",{href:"./settings-activity.html",children:["More ",Object(i.jsx)("i",{className:"icofont-simple-right"})]})]})]}):null]}),Object(i.jsxs)("div",{className:"profile_log dropdown",children:[Object(i.jsxs)("div",{className:"user",onClick:function(){return b(!s)},children:[Object(i.jsx)("span",{className:"thumb",children:Object(i.jsx)("img",{src:j.a,alt:"profile"})}),Object(i.jsx)("span",{className:"arrow",children:Object(i.jsx)("i",{className:"icofont-angle-down"})})]}),s?Object(i.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(i.jsx)("div",{className:"user-email",children:Object(i.jsxs)("div",{className:"user",children:[Object(i.jsx)("span",{className:"thumb",children:Object(i.jsx)("img",{src:j.a,alt:"profile"})}),Object(i.jsxs)("div",{className:"user-info",children:[Object(i.jsx)("h5",{children:"Dishant Shah"}),Object(i.jsx)("span",{children:"Bookstagram.inc@gmail.com"})]})]})}),Object(i.jsxs)(d.b,{to:"/profile",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-ui-user"}),"Profile"]}),Object(i.jsxs)(d.b,{to:"/settings-profile",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-ui-settings"}),"Settings"]}),Object(i.jsxs)(d.b,{to:"/settings-activity",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-history"}),"Activity"]}),Object(i.jsxs)(d.b,{to:"/lock",className:"dropdown-item",children:[Object(i.jsx)("i",{className:"icofont-lock"}),"Lock"]}),Object(i.jsxs)("a",{className:"dropdown-item logout",onClick:function(){return localStorage.clear(),u(Object(o.f)()),u(Object(o.b)()),void(window.location.href="/")},children:[Object(i.jsx)("i",{className:"icofont-logout"})," Logout"]})]}):null]})]})]})})})})}),Object(i.jsx)(r.a,{})]})}},250:function(e,c,s){"use strict";s.r(c);var t=s(19),i=s(2),a=s(0),n=s.n(a),l=s(232),j=s(44),r=s(230),o=s(233);c.default=function(e){var c=Object(a.useState)([]),s=Object(t.a)(c,2),d=s[0],b=s[1],h=Object(a.useState)(),O=Object(t.a)(h,2),x=(O[0],O[1]);Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=localStorage.getItem("userId");console.log("UserId",e),l.a.get("/ownbookusr/?pk="+e).then((function(e){200===e.status&&(b(e.data),j.a.success("User Books Fetch Successful",{position:"top-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))})).catch((function(e){x(e),console.error("Error",e),x("This Books Fetch Failed")}))};return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(o.a,{}),Object(i.jsx)(r.a,{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"headingstyle",children:Object(i.jsx)("h1",{children:"My Bookshelf"})}),Object(i.jsx)("div",{className:"bookshelf",children:d.length>=1&&d.map((function(e,c){var s=e.bookJSON;return Object(i.jsx)(i.Fragment,{children:c%2==0?Object(i.jsx)("div",{className:"book book-blue",onClick:function(e){},children:Object(i.jsx)("h2",{color:"black",children:s.name})}):Object(i.jsx)("div",{className:"book-tilted",children:Object(i.jsx)("div",{className:"book book-umber",children:Object(i.jsx)("h2",{style:{color:"white"},children:s.name})})})})}))})]})}}}]);
//# sourceMappingURL=10.6de9124e.chunk.js.map