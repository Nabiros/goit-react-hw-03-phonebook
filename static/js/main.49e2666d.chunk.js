(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,l,u,d,b,m,j=n(1),h=n.n(j),p=n(9),f=n.n(p),O=(n(18),n(12)),x=n(4),g=n(5),v=n(7),C=n(6),y=n(25),w=n(2),S=n(3),k=S.a.h1(a||(a=Object(w.a)(["\nmargin-left: 75px;\ncolor: gray;\n"]))),A=S.a.h2(r||(r=Object(w.a)(["\n  margin-left: 75px;\n"]))),F=n(11),z=S.a.form(c||(c=Object(w.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 40px;\n  padding: 30px;\n  border: none;\n  border-radius: 4px;\n"]))),N=S.a.label(i||(i=Object(w.a)(["\n  font-size: 14px;\n"]))),I=S.a.input(o||(o=Object(w.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),J=S.a.button(s||(s=Object(w.a)(["\n  width: fit-content;\n  padding: 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  background-color: #0eebdc;\n  border: none;\n  border-radius: 10px;\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background-color: #15c2b6;\n  }\n"]))),Z=n(0),q=function(e){Object(v.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(F.a)({},t.currentTarget.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;(0,e.props.onSubmit)(a,r),e.setState({name:"",number:""})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.handleSubmit,t=this.handleChange,n=this.state,a=n.name,r=n.number;return Object(Z.jsxs)(z,{action:"",onSubmit:e,children:[Object(Z.jsx)(N,{htmlFor:"name",children:"Name"}),Object(Z.jsx)(I,{onChange:t,type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(Z.jsx)(N,{htmlFor:"number",children:"Number"}),Object(Z.jsx)(I,{onChange:t,type:"tel",name:"number",value:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(Z.jsx)(J,{type:"submit",children:" Add contact"})]})}}]),n}(j.Component),B=S.a.ul(l||(l=Object(w.a)(["\n  list-style-type: circle;\n  margin-left: 20px;\n"]))),D=S.a.li(u||(u=Object(w.a)(["\n  margin-top: 8px;\n  font-size: 18px;\n"]))),E=function(e){var t=e.contacts,n=e.deleteId;return Object(Z.jsx)("div",{children:Object(Z.jsx)(B,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(Z.jsxs)(D,{children:[a," - ",r," ",Object(Z.jsx)(J,{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})})},L=S.a.div(d||(d=Object(w.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 60px;\n"]))),M=S.a.input(b||(b=Object(w.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),T=S.a.label(m||(m=Object(w.a)(["\n  font-weight: 500;\n"]))),H=function(e){Object(v.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getFilterName=function(t){return(0,e.props.onChange)(t.currentTarget.value)},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props.value;return Object(Z.jsxs)(L,{children:[Object(Z.jsx)(T,{htmlFor:"filter",children:"Find contacts by name"}),Object(Z.jsx)(M,{type:"text",name:"filter",value:e,onChange:this.getFilterName})]})}}]),n}(j.Component),K=function(e){Object(v.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleFilter=function(t){e.setState({filter:t})},e.addContact=function(t,n){var a=e.state.contacts,r={id:Object(y.a)(),name:t,number:n};a.some((function(e){return e.name===r.name}))?alert("".concat(r.name," is already in contacts")):e.setState({contacts:[r].concat(Object(O.a)(a))})},e.showContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.removeContact=function(t){var n=e.state.contacts;e.setState({contacts:n.filter((function(e){return e.id!==t}))})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.handleFilter,t=this.addContact,n=this.showContacts,a=this.removeContact,r=this.state;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(k,{children:"Phonebook"}),Object(Z.jsx)(q,{onSubmit:t}),Object(Z.jsx)(A,{children:"Contacts"}),Object(Z.jsx)(H,{onChange:e,value:r.filter}),Object(Z.jsx)(E,{contacts:n(),deleteId:a})]})}}]),n}(j.Component);f.a.render(Object(Z.jsx)(h.a.StrictMode,{children:Object(Z.jsx)(K,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.49e2666d.chunk.js.map