(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[10],{117:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(33),r=a(0),o=a.n(r),l=a(311),i=a(341),c=a(342),m=a(325),s=a(337),u=Object(l.a)((function(e){return Object(i.a)({root:{width:"600px"},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},body:{fontFamily:"Abril Fatface"}})}));function f(){var e=u(),t=["Select a treatment","Select a time","Fill in your contact details","Booking summary"],a=Object(r.useState)(0),l=Object(n.a)(a,2),i=l[0],f=l[1];return Object(r.useEffect)((function(){switch(window.location.pathname){case"/treatment":f(0);break;case"/book":f(1);break;case"/confirmation":f(2);break;case"/order":f(3);break;default:f(-1)}}),[]),o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{activeStep:i,alternativeLabel:!0},t.map((function(t){return o.a.createElement(m.a,{key:t},o.a.createElement(s.a,{classes:{alternativeLabel:e.body}},t))}))))}},334:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(0),o=a.n(r),l=a(44),i=a(192),c=a(271),m=a(311),s=a(341),u=a(330),f=a(317),d=a(318),p=a(335),b=Object(m.a)((function(e){return Object(s.a)({root:{"& > *":{margin:e.spacing(1),width:200},input:{fontFamily:"Abril Fatface"}}})})),h=function(e){var t=b(),a=o.a.useState({firstName:"",lastName:"",email:"",phone:"",comments:"",terms:!1}),l=Object(n.a)(a,2),m=l[0],s=l[1],h=function(e){return function(t){s(Object(c.a)(Object(c.a)({},m),{},Object(i.a)({},e,t.target.value)))}};return Object(r.useEffect)((function(){e.parentCallBack(m)}),[m,e]),o.a.createElement("div",null,o.a.createElement("form",{className:t.root,noValidate:!0},o.a.createElement(u.a,{required:!0,id:"first-name",label:"First name",value:m.firstName,onChange:h("firstName")}),o.a.createElement(u.a,{required:!0,id:"last-name",label:"Last name",value:m.lastName,onChange:h("lastName")})),o.a.createElement("form",{className:t.root},o.a.createElement(u.a,{required:!0,id:"email",label:"Email address",value:m.email,onChange:h("email")})),o.a.createElement("form",{className:t.root,noValidate:!0},o.a.createElement(u.a,{required:!0,id:"phone",label:"Phone number",value:m.phone,onChange:h("phone")})),o.a.createElement("form",{className:t.root,noValidate:!0},o.a.createElement(u.a,{id:"comments",label:"Comments",multiline:!0,rows:"4",variant:"outlined",value:m.comments,onChange:h("comments")})),o.a.createElement(f.a,null,o.a.createElement("p",null,o.a.createElement(d.a,{control:o.a.createElement(p.a,{onChange:function(){s(Object(c.a)(Object(c.a)({},m),{},{terms:!m.terms}))}}),label:""}),"I agree to the following cancellation policy: ",o.a.createElement("br",null),"No cancellations or changes allowed within 24 hours of the appointment")))},N=a(23),E=a(9),g=a(27),v=a(15),O=a(19),w=a.n(O),j=a(22),y=a(45),k=a.n(y),C=a(47),S=a(21),x=function(){var e=Object(j.a)(w.a.mark((function e(t,a,n,r,o,l,i,c,m,s){var u,f;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=null,f=function(){var e=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("".concat(C.b),{client:{firstName:l,lastName:i,email:c,phone:m},treatmentId:r,date:"".concat(t,"-").concat(a,"-").concat(n),startTime:"".concat(o),notes:s}).then((function(e){u=JSON.stringify(e.data),console.log(u)})).catch((function(e){return console.log(e),window.location.replace("".concat(S.b,"/error"))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=4,f();case 4:return e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r,o,l,i,c,m,s){return e.apply(this,arguments)}}(),F=a(10);function I(){var e=Object(E.a)(["\n  display: inline;\n  padding-right: 20px;\n\n  &:hover {\n    color: #282c34;\n  }\n"]);return I=function(){return e},e}function B(){var e=Object(E.a)(["\n  padding-top: 20px;\n  text-align: center;\n  list-style: none;\n  font-family: 'Abril Fatface', cursive;\n\n  &:hover {\n    color: #282c34;\n  }\n"]);return B=function(){return e},e}var J=F.a.ul(B()),q=F.a.li(I()),A=function(e){var t=function(e){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||(alert("You have entered an invalid email address!"),!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,null,o.a.createElement(q,null," ",o.a.createElement(v.b,{to:{pathname:"/book",state:{firstName:e.form.firstName,lastName:e.form.lastName,email:e.form.email,phone:e.form.phone,comments:e.form.comments,treatment:e.location.state.treatmentId,date:e.location.state.date,time:e.location.state.time,treatmentName:e.location.state.treatmentName}}},o.a.createElement(g.a,{variant:"outline-secondary",size:"lg"},"Back"))),o.a.createElement(q,null,o.a.createElement(v.b,{to:{pathname:"/order",state:{firstName:e.form.firstName,lastName:e.form.lastName,email:e.form.email,phone:e.form.phone,comments:e.form.comments,treatment:e.location.state.treatmentId,date:e.location.state.date,time:e.location.state.time,treatmentName:e.location.state.treatmentName}}},o.a.createElement(g.a,{variant:"outline-secondary",size:"lg",onClick:function(){var t=e.location.state.date.split("-")[0],a=e.location.state.date.split("-")[1],n=e.location.state.date.split("-")[2];x(t,a,n,e.location.state.treatmentId,e.location.state.time,e.form.firstName,e.form.lastName,e.form.email,e.form.phone,e.form.comments)},disabled:void 0===e.location.state.time||null===e.location.state.time||void 0===e.form.firstName||null===e.form.firstName||""===e.form.firstName||void 0===e.form.email||null===e.form.email||""===e.form.email||void 0===e.form.phone||null===e.form.phone||""===e.form.phone||!1===e.form.terms||!t(e.form.email)},"Next")))))},L=a(117);t.default=function(e){var t=Object(r.useState)({firstName:"",lastName:"string",email:"",phone:"",comments:"",terms:!1}),a=Object(n.a)(t,2),i=a[0],c=a[1],m=JSON.stringify(e.location.state.time),s=JSON.stringify(e.location.state.date),u=e.location.state.treatmentName,f=e.location.state.treatmentId;return o.a.createElement("div",null,o.a.createElement(L.a,null),o.a.createElement(l.a,{title:"Contact details"}),o.a.createElement("h1",{className:"heading"}," Order Summary "),o.a.createElement("p",null,s," - ",m),o.a.createElement("h4",{className:"heading"},"Treatment"),u.map((function(e){return o.a.createElement("p",null,e," ")})),o.a.createElement(N.a,null),o.a.createElement(h,{parentCallBack:function(e){console.log(JSON.stringify(e)),c(e)}}),o.a.createElement(N.a,null),o.a.createElement(A,Object.assign({form:i,treatmentId:f,treatmentName:u},e)))}}}]);
//# sourceMappingURL=10.b20eef95.chunk.js.map