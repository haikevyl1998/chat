(this.webpackJsonpchat_react=this.webpackJsonpchat_react||[]).push([[0],{23:function(e,t,s){},25:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(6),a=s.n(n),r=s(10),c=s.n(r),i=(s(23),s(16)),u=s(9),l=s.n(u),d=s(11),o=s(12),m=s(13),h=s(4),p=s(18),b=s(17),j=(s(25),s(14).a.initializeApp({apiKey:"AIzaSyB2ptnzIB_-UETQ0KtGN1byxfl6_927OK8",authDomain:"startdeveloper-4a037.firebaseapp.com",databaseURL:"https://startdeveloper-4a037.firebaseio.com",projectId:"startdeveloper-4a037",storageBucket:"startdeveloper-4a037.appspot.com",messagingSenderId:"2851619995",appId:"1:2851619995:web:e9a10ed717029d79c7b23e",measurementId:"G-XW8733KZB1"})),v=(s(27),s(2)),g=function(e){Object(p.a)(s,e);var t=Object(b.a)(s);function s(e){var n,a;return Object(o.a)(this,s),(a=t.call(this,e)).state={username:null!==(n=localStorage.getItem("username"))&&void 0!==n?n:null,inputUsername:"",messages:[],inputMess:""},a.getMess=a.getMess.bind(Object(h.a)(a)),a.onMess=a.onMess.bind(Object(h.a)(a)),a.renderMess=a.renderMess.bind(Object(h.a)(a)),a.renderInputUsername=a.renderInputUsername.bind(Object(h.a)(a)),a.submit=a.submit.bind(Object(h.a)(a)),a.sendMess=a.sendMess.bind(Object(h.a)(a)),a.getMess(),a.onMess(),a}return Object(m.a)(s,[{key:"getMess",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.database().ref("messages").get().then((function(e){var s=[];e.forEach((function(e){s.push({key:e.key,username:e.val().username,content:e.val().content})})),t.setState({messages:s})})).catch((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onMess",value:function(){var e=this;j.database().ref("messages").on("child_added",(function(t){e.setState({messages:[].concat(Object(i.a)(e.state.messages),[{key:t.key,username:t.val().username,content:t.val().content}])})}))}},{key:"renderMess",value:function(){return this.state.messages.map((function(e){return Object(v.jsx)("div",{className:"w-100 d-flex justify-content-start",children:Object(v.jsxs)("div",{className:"msg mb-2",children:[Object(v.jsx)("span",{className:"msg-user",children:e.username}),Object(v.jsx)("span",{className:"msg-body",children:e.content})]})},e.key)}))}},{key:"renderInputUsername",value:function(){var e=this;return null!=this.state.username?"":Object(v.jsx)("input",{onChange:function(t){return e.setState({inputUsername:t.target.value})},value:this.state.inputUsername,type:"text",className:"form-control",placeholder:"Username"})}},{key:"submit",value:function(e){e.preventDefault(),null!=this.state.username?this.sendMess():this.state.inputUsername.trim().length>4?(localStorage.setItem("usernane",this.state.inputUsername),this.setState({username:this.state.inputUsername}),this.sendMess()):alert("username is required!.")}},{key:"sendMess",value:function(){this.state.inputMess.trim().length>0?(j.database().ref("messages").push({username:this.state.username,content:this.state.inputMess}),this.setState({inputMess:""})):alert("Message content is required")}},{key:"render",value:function(){var e=this;return Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row justify-content-center min-vh-100",children:Object(v.jsx)("div",{className:"col-10 col-md-8 col-lg-6",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card-header",children:[Object(v.jsx)("h3",{className:"card-title mb-1",children:"Messages Using ReactJS"}),Object(v.jsxs)("span",{className:"card-text",children:[this.state.messages.length," messages"]})]}),Object(v.jsx)("div",{className:"card-body ",children:Object(v.jsx)("div",{className:"w-100",children:this.renderMess()})}),Object(v.jsx)("div",{className:"card-footer",children:Object(v.jsxs)("form",{onSubmit:this.submit,children:[this.renderInputUsername(),Object(v.jsxs)("div",{className:"input-group",children:[Object(v.jsx)("input",{onChange:function(t){return e.setState({inputMess:t.target.value})},value:this.state.inputMess,type:"text",className:"form-control",placeholder:"Typing..."}),Object(v.jsx)("div",{className:"input-group-append",children:Object(v.jsx)("button",{className:"btn btn-primary",children:"send"})})]})]})})]})})})})}}]),s}(a.a.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,33)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.00438049.chunk.js.map