(this["webpackJsonpreact-api-demo"]=this["webpackJsonpreact-api-demo"]||[]).push([[0],{214:function(e,t,a){e.exports=a(432)},432:function(e,t,a){"use strict";a.r(t);a(215),a(216),a(225);var n=a(0),r=a.n(n),l=a(98),c=a.n(l),m=a(210),o=a(51),i=a(79),s=a(78),u=a(433),p=a(434),d=a(435),E=a(436),f=a(437),g={api:{employeesUri:"https://dummy.restapiexample.com/api/v1/employees"},application:{dateModified:"2020-02-19T01:12:55.125Z",debug:"false",gitCommit:"a49b78c3",version:"0.0.0"}},h=a(80),b=Object(n.createContext)(),v=function(){return Object(n.useContext)(b)},x=function(e){var t=e.children,a=Object(n.useState)({pageTitle:"React API demo"}),l=Object(h.a)(a,2),c=l[0],m=l[1];return r.a.createElement(b.Provider,{value:{pageMetadata:c,setPageMetadata:m}},t)},y=function(){return r.a.createElement("div",{className:"text-right",style:{fontSize:"75%"}},r.a.createElement("em",null,r.a.createElement("code",null,"v",g.application.version," (",g.application.gitCommit,", ",g.application.dateModified,")")))},N=function(){var e=v().pageMetadata;return e.pageTitle?r.a.createElement(u.a,{tag:"h1",className:"h4 font-weight-bold"},e.pageTitle):null},j=function(){return r.a.createElement("div",{className:"small text-muted text-right"},"View source on"," ",r.a.createElement("a",{href:"https://github.com/portal-solutions/react-api-demo/",rel:"noopener noreferrer",target:"_blank"},"GitHub",r.a.createElement("sup",null,r.a.createElement(s.a,{icon:i.a,className:"ml-1 small"}))))},O=function(e){var t=e.children;return r.a.createElement(p.a,{className:"py-3"},r.a.createElement(d.a,{md:"10",lg:"8",className:"mx-auto"},r.a.createElement(y,null),r.a.createElement(E.a,{color:"light shadow"},r.a.createElement(N,null),r.a.createElement(f.a,null,t)),r.a.createElement(j,null)))},w=a(133),P=a.n(w),C=a(207),k=Object(n.createContext)(),M=function(e){var t=e.children,a=function(){var e=Object(C.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g.api.employeesUri);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(k.Provider,{value:{getEmployees:a}},t)},T=function(e){var t=e.children;return r.a.createElement(M,null,r.a.createElement(x,null,t))},I=a(208),A=a(440),U=a(439),z=function(e){var t=e.data;return r.a.createElement("pre",{className:"bg-white border overflow-auto small",style:{maxHeight:"250px"}},JSON.stringify(t,null,2))},F=a(63),J=a(438),R=function(e){var t=e.text,a=Object(F.a)(e,["text"]);return r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,t),r.a.createElement(J.a,Object.assign({size:"xl"},a)))},S=function(){var e=Object(n.useContext)(k).getEmployees,t=v().setPageMetadata,a=Object(I.a)(e),l=a.data,c=a.error,m=a.isPending,o=a.reload;return Object(n.useEffect)((function(){t({pageTitle:"React API demo"})}),[t]),m?r.a.createElement(R,{text:"Fetching API data..."}):c?r.a.createElement(A.a,{color:"danger",className:"m-0"},'There was an error fetching data: "',r.a.createElement("em",null,c.message),'".'):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"h6"},"Response from"," ",r.a.createElement("a",{href:g.api.employeesUri,rel:"noopener noreferrer",target:"_blank",title:g.api.employeesUri},"Employees API",r.a.createElement("sup",null,r.a.createElement(s.a,{icon:i.a,className:"ml-1 small"})))),r.a.createElement(z,{data:l}),r.a.createElement("div",{className:"text-right"},r.a.createElement(U.a,{type:"button",className:"shadow-sm",color:"primary",size:"sm",onClick:o},r.a.createElement(s.a,{icon:i.b})," Fetch again...")))},H=function(){return r.a.createElement(T,null,r.a.createElement(O,null,r.a.createElement(m.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:S})))))};c.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.f0c20eda.chunk.js.map