(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=a(7),i=a(8),s=a(11),m=a(10),u=a(21),d=a(22),h=a(23),w=a(24),p=a(17),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).inputStyle={width:"100%",height:"50vh",padding:"10px"},n.outputStyle={width:"100%",height:"50vh",backgroundColor:"#DCDCDC",padding:"10px"},n.state={markdown:""},n}return Object(i.a)(a,[{key:"updateMarkdown",value:function(e){this.setState({markdown:e})}},{key:"clearMarkdown",value:function(){this.setState({markdown:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.a,{variant:"light",className:"mb-0"},r.a.createElement(d.a,{className:"text-center"},r.a.createElement("h1",null,"Markdown Previewer"))),r.a.createElement(h.a,{className:"m-0"},r.a.createElement(w.a,{md:"6",className:"text-center"},r.a.createElement("p",{className:"lead my-4"},"Markdown Input"),r.a.createElement("div",{className:"mark-input"},r.a.createElement("textarea",{className:"input",style:this.inputStyle,value:this.state.markdown,onChange:function(t){return e.updateMarkdown(t.target.value)}})),r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:function(){return e.clearMarkdown()}},"Clear")),r.a.createElement(w.a,{md:"6"},r.a.createElement("p",{className:"lead my-4 text-center"},"Preview"),r.a.createElement("div",{className:"rounded",style:this.outputStyle,dangerouslySetInnerHTML:{__html:p(this.state.markdown)}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2e7df3f0.chunk.js.map