(this["webpackJsonpsc-influence"]=this["webpackJsonpsc-influence"]||[]).push([[0],{69:function(t,n,e){},70:function(t,n,e){},72:function(t,n,e){},74:function(t,n,e){},75:function(t,n,e){"use strict";e.r(n);var r=e(2),c=e.n(r),a=e(27),o=e.n(a),i=(e(69),e(9)),u=e(10),s=e(11),f=e(13),d=(e(70),e(3)),l=e(18),h=(e(72),e(0));var p=function(t){var n=Object(r.useState)({id:"",comments:[]}),e=Object(l.a)(n,2),c=e[0],a=e[1],o=Object(r.useCallback)((function(t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})};fetch("https://cogent-dahlia-289109.de.r.appspot.com/get-data/comments",n).then((function(t){return t.json()})).then((function(n){return a({id:t,comments:n})}))}),[]);return t.onAccountChangeRef.current=o,Object(h.jsxs)("div",{className:"comments-wrapper",children:[Object(h.jsx)("div",{children:c.id}),c.comments.map((function(t){return Object(h.jsx)("div",{className:"comment",onClick:function(){return window.open(t.article,"_blank")},children:t.opinion},t.id)}))]})};e(74);var m=function(t){var n=t.data,e=Object(r.useRef)(null),a=function(t,n){var e=c.a.useRef();return c.a.useEffect((function(){return t(d.g(e.current)),function(){}}),n),e}((function(t){t.selectAll("*").remove();var r=d.f().domain([0,1]).range(["#56b6c2","red"]),c=1080,a=1920,o=n.links.map((function(t){return Object.create(t)})),i=n.nodes.map((function(t){return Object.create(t)})),u=d.e(i).force("link",d.c(o).id((function(t){return t.nodeId})).strength((function(t){return.06*t.value}))).force("charge",d.d().strength(-5.3)).force("center",d.b(0,0));t.attr("viewBox",[-960,-540,a,c]);var s,f,l=t.append("g").attr("stroke","#999").attr("stroke-opacity",.7).selectAll("line").data(o).join("line").attr("stroke-width",(function(t){return Math.pow(t.value,-1.5)})),h=t.append("g").attr("stroke","#fff").attr("stroke-width",1.5).selectAll("circle").data(i).join("circle").attr("r",12).attr("fill",(function(t){return r(t.change)})).attr("opacity",1).attr("id",(function(t){return t.nodeId})).call(function(t){return d.a().on("start",(function(n,e){n.active||t.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y})).on("drag",(function(t,n){n.fx=t.x,n.fy=t.y})).on("end",(function(n,e){n.active||t.alphaTarget(0),e.fx=null,e.fy=null}))}(u)).on("mouseover.fade",(s=.1,f=.1,function(t){h.style("stroke-opacity",(function(n){var e,r,c=(e=t.target.id,r=n.nodeId,p["".concat(e,",").concat(r)]||p["".concat(r,",").concat(e)]||e===r?1:s);return this.setAttribute("fill-opacity",c),c})),l.style("stroke-opacity",(function(n){return i[n.source.index].nodeId===t.target.id||i[n.target.index].nodeId===t.target.id?1:f}))})).on("mouseover",(function(){d.g(this).style("cursor","pointer")})).on("click",(function(t){e.current&&e.current(t.target.id)}));h.append("title").text((function(t){return t.nodeId}));var p={};n.links.forEach((function(t){p["".concat(t.source,",").concat(t.target)]=1})),u.on("tick",(function(){l.attr("x1",(function(t){return t.source.x=Math.max(-960,Math.min(960,t.source.x))})).attr("y1",(function(t){return t.source.y=Math.max(-540,Math.min(540,t.source.y))})).attr("x2",(function(t){return t.target.x=Math.max(-960,Math.min(960,t.target.x))})).attr("y2",(function(t){return t.target.y=Math.max(-540,Math.min(540,t.target.y))})),h.attr("cx",(function(t){return t.x=Math.max(-960,Math.min(960,t.x))})).attr("cy",(function(t){return t.y=Math.max(-540,Math.min(540,t.y))}))}))}));return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("svg",{ref:a,style:{height:"100%",width:"auto",marginRight:"0px",marginLeft:"0px"},children:[Object(h.jsx)("g",{className:"plot-area"}),Object(h.jsx)("g",{className:"x-axis"}),Object(h.jsx)("g",{className:"y-axis"})]}),Object(h.jsx)(p,{onAccountChangeRef:e})]})},g=function(t){Object(s.a)(e,t);var n=Object(f.a)(e);function e(t){var r;return Object(i.a)(this,e),(r=n.call(this,t)).state={nodes:[],links:[]},r}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cogent-dahlia-289109.de.r.appspot.com/api/graph/").then((function(t){return t.json()})).then((function(n){t.setState({nodes:n.nodes,links:n.links})}))}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(m,{data:this.state})})})}}]),e}(r.Component),j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,76)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),r(t),c(t),a(t),o(t)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),j()}},[[75,1,2]]]);
//# sourceMappingURL=main.923c9c5c.chunk.js.map