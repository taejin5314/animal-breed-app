(this["webpackJsonpinsightsgg-assessment"]=this["webpackJsonpinsightsgg-assessment"]||[]).push([[0],{39:function(e,n,r){},67:function(e,n,r){"use strict";r.r(n);var a=r(0),t=r.n(a),c=r(10),o=r.n(c),d=(r(39),r(6)),b=r(7),i=r(5),l=r(15),s=r.n(l),u=r(29),k=r(9),j=r(3);function f(e){var n=[],r={},a={};Object.keys(e).forEach((function(r){0!==e[r].length?e[r].forEach((function(e){n.push("".concat(r,"-").concat(e))})):n.push(r)}));for(var t=1;t<=10;t++){var c=Math.floor(Math.random()*n.length);r["rank".concat(t)]=n[c],n.splice(c,1);var o=Math.floor(Math.random()*n.length);a["rank".concat(t)]=n[o],n.splice(o,1)}return{rank1:r,rank2:a}}function p(e,n,r,a,t){if(r===t){if("Breed 1"===r){if(n>a){for(var c=e.breed1Rank["rank".concat(n+1)],o=n+1;o>a+1;o--)e.breed1Rank["rank".concat(o)]=e.breed1Rank["rank".concat(o-1)];e.breed1Rank["rank".concat(a+1)]=c}else if(n<a){for(var d=e.breed1Rank["rank".concat(n+1)],b=n+1;b<a+1;b++)e.breed1Rank["rank".concat(b)]=e.breed1Rank["rank".concat(b+1)];e.breed1Rank["rank".concat(a+1)]=d}}else if("Breed 2"===r)if(n>a){for(var i=e.breed2Rank["rank".concat(n+1)],l=n+1;l>a+1;l--)e.breed2Rank["rank".concat(l)]=e.breed2Rank["rank".concat(l-1)];e.breed2Rank["rank".concat(a+1)]=i}else if(n<a){for(var s=e.breed2Rank["rank".concat(n+1)],u=n+1;u<a+1;u++)e.breed2Rank["rank".concat(u)]=e.breed2Rank["rank".concat(u+1)];e.breed2Rank["rank".concat(a+1)]=s}}else if("Breed 1"===r){e.breed1Total--;for(var k=e.breed1Rank["rank".concat(n+1)],j=n+1;j<=e.breed1Total;j++)e.breed1Rank["rank".concat(j)]=e.breed1Rank["rank".concat(j+1)];delete e.breed1Rank["rank".concat(e.breed1Total+1)],e.breed2Total++;for(var f=e.breed2Total;f>a+1;f--)e.breed2Rank["rank".concat(f)]=e.breed2Rank["rank".concat(f-1)];e.breed2Rank["rank".concat(a+1)]=k}else if("Breed 2"===r){e.breed2Total--;for(var p=e.breed2Rank["rank".concat(n+1)],O=n+1;O<=e.breed2Total;O++)e.breed2Rank["rank".concat(O)]=e.breed2Rank["rank".concat(O+1)];delete e.breed2Rank["rank".concat(e.breed2Total+1)],e.breed1Total++;for(var h=e.breed1Total;h>a+1;h--)e.breed1Rank["rank".concat(h)]=e.breed1Rank["rank".concat(h-1)];e.breed1Rank["rank".concat(a+1)]=p}return e}var O={breed1Total:0,breed1Rank:{},breed2Total:0,breed2Rank:{}},h="SET_INITIAL_RANK",R="DRAG_AND_DROP",g=function(e){return{type:h,payload:e}};var x=r(30),v=r.n(x);function m(e){return Object.values(e).map((function(e,n){return{rank:n+1,breed:e}}))}var T=r(31),y=r(12),w=r(2);var I,B=function(e){var n=e.columns,r=e.data,a=Object(T.useTable)({columns:n,data:r}),t=a.getTableProps,c=a.headerGroups,o=a.prepareRow,d=a.rows;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("table",Object(j.a)(Object(j.a)({},t()),{},{children:[Object(w.jsx)("thead",{children:c.map((function(e){return Object(w.jsx)("tr",Object(j.a)(Object(j.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(w.jsx)("th",Object(j.a)(Object(j.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(w.jsx)(y.c,{droppableId:n[1].Header,children:function(e,n){return Object(w.jsxs)("tbody",Object(j.a)(Object(j.a)({ref:e.innerRef},e.droppableProps),{},{children:[d.map((function(e,n){return o(e),Object(w.jsx)(y.b,{draggableId:e.original.breed,index:e.index,children:function(n,r){return Object(w.jsx)("tr",Object(j.a)(Object(j.a)(Object(j.a)(Object(j.a)({},e.getRowProps()),n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:e.cells.map((function(e){return Object(w.jsx)("td",Object(j.a)(Object(j.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}},e.original.breed)})),e.placeholder]}))}})]}))})},C=b.a.div(I||(I=Object(d.a)(["\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n    margin: 0 100px;\n    height: 100%;\n    width: 250px;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n      text-align: center;\n      width: 40px;\n\n      :last-child {\n        border-right: 0;\n        width: 210px;\n      }\n    }\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n\n    table {\n      margin-bottom: 50px;\n    }\n  }\n"])));var P,S=function(e){var n=e.state,r=Object(i.c)(),t=Object(a.useMemo)((function(){return[{Header:"Rank",accessor:"rank"},{Header:"Breed 1",accessor:"breed"}]})),c=Object(a.useMemo)((function(){return[{Header:"Rank",accessor:"rank"},{Header:"Breed 2",accessor:"breed"}]}),[]),o=Object(a.useState)(m(n.breed1Rank)),d=Object(k.a)(o,2),b=d[0],l=d[1],s=Object(a.useState)(m(n.breed2Rank)),u=Object(k.a)(s,2),j=u[0],f=u[1];return Object(w.jsx)(C,{children:Object(w.jsxs)(y.a,{onDragEnd:function(e){var a=e.source,t=e.destination;if(t){var c=a.index,o=a.droppableId,d=t.index,b=t.droppableId;if("Breed 1"===o&&o!==b){if(1===Object.keys(n.breed1Rank).length)return void alert("Woof Invalid Action Woof")}else if("Breed 2"===o&&o!==b&&1===Object.keys(n.breed2Rank).length)return void alert("Woof Invalid Action Woof");r({type:R,payload:{startIndex:c,startColumn:o,endIndex:d,endColumn:b}}),l(m(n.breed1Rank)),f(m(n.breed2Rank))}},children:[Object(w.jsx)(B,{columns:t,data:b}),Object(w.jsx)(B,{columns:c,data:j})]})})},E=b.a.button(P||(P=Object(d.a)(["\n  position: absolute;\n  top: 60px;\n  right: -100px;\n"])));var H,M,A,D=function(e){var n=e.state;return Object(w.jsx)(E,{onClick:function(){var e="data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify({dogBreeds:n},null,"\t"))),r=document.createElement("a");r.href=e,r.download="breed.json",r.click();var a=window.open();a.document.open(),a.document.write("<html><body><pre>"+JSON.stringify({dogBreeds:n},null,"\t")+"</pre></body></html>"),a.document.close()},children:"Export!"})},F=b.a.div(H||(H=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]))),N=b.a.div(M||(M=Object(d.a)(["\n  position: relative;\n"]))),J=b.a.div(A||(A=Object(d.a)(["\n  margin: 50px 0;\n  font-weight: 700;\n  font-size: 2rem;\n"])));var L=function(){var e=function(){var e=Object(a.useState)(null),n=Object(k.a)(e,2),r=n[0],t=n[1],c=Object(a.useState)(!1),o=Object(k.a)(c,2),d=o[0],b=o[1],l=Object(a.useState)(null),j=Object(k.a)(l,2),f=j[0],p=j[1],O=Object(i.c)();return Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(null),t(null),b(!0),e.next=6,v.a.get("https://dog.ceo/api/breeds/list/all");case 6:n=e.sent,t(n.data),O(g(n.data.message)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p(e.t0);case 14:b(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{data:r,loading:d,error:f}}(),n=e.data,r=e.loading,t=e.error,c=Object(i.d)((function(e){return{breed1Total:e.breed1Total,breed1Rank:e.breed1Rank,breed2Total:e.breed2Total,breed2Rank:e.breed2Rank}}));return r?Object(w.jsx)("div",{children:"Loading..."}):t?Object(w.jsx)("div",{children:"Error!"}):n?Object(w.jsxs)(F,{children:[Object(w.jsxs)(N,{children:[Object(w.jsx)(J,{children:"Breed Rank"}),Object(w.jsx)(D,{state:c})]}),Object(w.jsx)(S,{state:c})]}):null},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,68)).then((function(n){var r=n.getCLS,a=n.getFID,t=n.getFCP,c=n.getLCP,o=n.getTTFB;r(e),a(e),t(e),c(e),o(e)}))},_=r(8),G=Object(_.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:var r=f(n.payload),a=r.rank1,t=r.rank2;return Object(j.a)(Object(j.a)({},e),{},{breed1Total:10,breed1Rank:a,breed2Total:10,breed2Rank:t});case R:var c=n.payload,o=c.startIndex,d=c.startColumn,b=c.endIndex,i=c.endColumn,l=p(e,o,d,b,i);return Object(j.a)(Object(j.a)({},e),{},{breed1Total:l.breed1Total,breed1Rank:l.breed1Rank,breed2Total:l.breed2Total,breed2Rank:l.breed2Rank});default:return e}}));o.a.render(Object(w.jsx)(t.a.StrictMode,{children:Object(w.jsx)(i.a,{store:G,children:Object(w.jsx)(L,{})})}),document.getElementById("root")),W()}},[[67,1,2]]]);
//# sourceMappingURL=main.4ea6b622.chunk.js.map