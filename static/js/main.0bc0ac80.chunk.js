(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(26)},,,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(7),c=t.n(o),r=(t(14),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),m=(t(16),t(18),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).state={names:["Yossi","Gabi","Nitta","Roy","Sami","Ofer","Candy"]},t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.names.map(function(e){return i.a.createElement("li",{className:"name-container",key:e},i.a.createElement("h1",null," ",e," "))});return i.a.createElement("section",{className:"name-list"},i.a.createElement("ul",null,e))}}]),n}(a.Component)),d=(t(20),function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).options=e.options,t.isTouchable="undefined"!==typeof window&&"ontouchstart"in window,t.elContainer=i.a.createRef(),t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.addHandlingFuncs()}},{key:"componentWillUnmount",value:function(){this.removeHandlingFuncs()}},{key:"render",value:function(){return i.a.createElement("section",{ref:this.elContainer},this.options)}},{key:"getTouchInfo",value:function(e){return this.isTouchable?e.changedTouches[0]||e.touches[0]:e}},{key:"handleStart",value:function(e){console.log(e),e.cancelable&&e.stopPropagation();this.getTouchInfo(e)}},{key:"handleEnd",value:function(e){console.log("END touch")}},{key:"handleMove",value:function(e){console.log("am moving touch")}},{key:"handleCancel",value:function(e){console.log("canceling touch")}},{key:"handleClick",value:function(e){console.log("moving up or down by one")}},{key:"handleWheel",value:function(e){console.log("i am currently supporting only touchScreens")}},{key:"addHandlingFuncs",value:function(){var e=this.elContainer.current;this.isTouchable?(e.addEventListener("touchstart",this.handleStart.bind(this)),e.addEventListener("touchmove",this.handleMove.bind(this)),e.addEventListener("touchend",this.handleEnd.bind(this)),e.addEventListener("touchcancel",this.handleCancel.bind(this))):console.log("i am, untouchable untouchable")}},{key:"removeHandlingFuncs",value:function(){this.elContainer.current;this.isTouchable?(this.$el.removeEventListener("touchstart",this.handleStart),this.$el.removeEventListener("touchmove",this.handleMove),this.$el.removeEventListener("touchend",this.handleEnd),this.$el.removeEventListener("touchcancel",this.handleCancel)):(this.$el.removeEventListener("mousewheel",this.handleWheel),this.$el.removeEventListener("wheel",this.handleWheel),this.$el.removeEventListener("mousedown",this.handleStart),this.$el.removeEventListener("mousemove",this.handleMove),this.$el.removeEventListener("mouseup",this.handleEnd),this.$el.removeEventListener("mouseleave",this.handleCancel))}}]),n}(a.Component)),v=(t(22),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).picSrc="http://nfic-2016.ieeesiliconvalley.org/wp-content/uploads/sites/17/2017/03/Generic-Person-Image.jpg",t.demoImgs=[{name:"Yossi",src:t.picSrc,_id:1},{name:"Gabi",src:t.picSrc,_id:2},{name:"Nitta",src:t.picSrc,_id:3},{name:"Roy",src:t.picSrc,_id:4},{name:"Sami",src:t.picSrc,_id:5},{name:"Ofer",src:t.picSrc,_id:6},{name:"Candy",src:t.picSrc,_id:7}],t}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.demoImgs.map(function(e){return i.a.createElement("div",{className:"student-container",key:e._id},i.a.createElement("button",{className:"hint"},e.name),i.a.createElement("img",{src:e.src,alt:""}))});return i.a.createElement("section",{className:"pics-list"},i.a.createElement(d,{options:e}))}}]),n}(a.Component)),p=(t(24),function(e){function n(){return Object(r.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("main",{className:"main-container"},i.a.createElement(v,null),i.a.createElement(m,null))}}]),n}(a.Component)),f=function(e){function n(){return Object(r.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.0bc0ac80.chunk.js.map