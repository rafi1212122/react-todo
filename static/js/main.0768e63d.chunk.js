(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n(2),o=n(3),r=n(5),s=n(4),i=n(1),l=n.n(i),d=n(7),u=n.n(d),j=n(0),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={term:""},t.onInputChange=function(e){t.setState({term:e.target.value})},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.onFormSubmit,className:"mb-4 todo",children:[Object(j.jsx)("input",{type:"text",name:"todo",placeholder:"Add Todo..",onChange:this.onInputChange,value:this.state.term,className:"form-control"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(j.jsx)("i",{className:"fa fa-plus"})})]})}}]),n}(l.a.Component),b=m,h=function(t){return t.data.todos.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsx)("input",{onChange:function(){return t.changeHandler(e.id)},className:"form-check-input",type:"checkbox",checked:e.completed}),Object(j.jsxs)("span",{className:e.completed?"completed":null,children:[" ",e.title]}),Object(j.jsxs)("span",{onClick:function(){return t.deleteTodo(e.id)},style:{float:"right",color:"red"},children:[" ",Object(j.jsx)("i",{className:"fa fa-times-circle"})]})]})},e.id)}))},p=function(t){var e=t.data;return Object(j.jsx)("ul",{className:"list-group",children:Object(j.jsx)(h,{deleteTodo:t.deleteTodo,changeHandler:t.changeHandler,data:e})})},f=function(t){return document.title="".concat(t.text),Object(j.jsx)("h1",{className:"bg-dark text-light py-4 text-center",children:t.text})},O=(n(14),n(17)),x=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.onTermSubmit=function(e){var n={id:Object(O.a)(),title:e,completed:!1},c=t.state.todos.concat(n);t.setState({todos:c})},t.changeHandler=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{text:"React Todo App"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{onSubmit:this.onTermSubmit}),Object(j.jsx)(p,{changeHandler:this.changeHandler,deleteTodo:this.deleteTodo,data:this.state})]})]})}}]),n}(l.a.Component);u.a.render(Object(j.jsx)(x,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0768e63d.chunk.js.map