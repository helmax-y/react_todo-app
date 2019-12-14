(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(9),c=o.n(l),i=(o(16),o(17),o(10)),r=o(7),d=o(1),s=o(2),u=o(4),m=o(3),p=o(5),f=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todoToAdd:""},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:function(t){e.state.todoToAdd.trim()&&(t.preventDefault(),e.props.addNewTodo(e.state.todoToAdd),e.setState({todoToAdd:""}))}},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.todoToAdd,onChange:function(t){return e.setState({todoToAdd:t.target.value})}})))}}]),t}(a.a.Component),h=o(6),E=o.n(h),v=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={editValue:o.props.title},o.cancelEditing=function(e){"keyup"===e.type&&"Escape"===e.key?o.props.turnOffEditing():"click"===e.type&&e.target!==document.querySelector(".edit")&&(o.props.fixTodo(o.state.editValue,o.props.id),o.props.turnOffEditing())},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".edit").focus(),document.addEventListener("click",this.cancelEditing),document.addEventListener("keyup",this.cancelEditing)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.cancelEditing),document.removeEventListener("keyup",this.cancelEditing)}},{key:"render",value:function(){var e=this;return a.a.createElement("form",{onSubmit:function(){e.props.fixTodo(e.state.editValue,e.props.id),e.setState({editValue:""}),e.props.turnOffEditing()}},a.a.createElement("input",{className:"edit",value:this.state.editValue,onChange:function(t){return e.setState({editValue:t.target.value})}}))}}]),t}(a.a.Component),b=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={editing:!1},o.turnOffEditing=function(){o.setState({editing:!1})},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todo,n=t.isCompleted,l=t.deleteTodo,c=t.fixTodo,i=E()({completed:o.completed},{editing:this.state.editing});return a.a.createElement("li",{className:i},a.a.createElement("div",{className:"view"},a.a.createElement("input",{id:o.id,type:"checkbox",className:"toggle",checked:o.completed,onChange:function(e){return n(e.target.checked,o.id)}}),a.a.createElement("label",{htmlFor:o.id,onDoubleClick:function(){return e.setState({editing:!0})}},o.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(o.id)}})),this.state.editing&&a.a.createElement(v,{title:this.props.todo.title,id:this.props.todo.id,fixTodo:c,turnOffEditing:this.turnOffEditing}))}}]),t}(a.a.Component),g=function(e){var t=e.todos,o=e.isCompleted,n=e.deleteTodo,l=e.fixTodo;return a.a.createElement("ul",{className:"todo-list"},t.map(function(e){return a.a.createElement(b,{key:e.id,todo:e,isCompleted:o,deleteTodo:n,fixTodo:l})}))},y=function(e){var t=e.todos,o=e.selectAll,n=e.todosFiltered,l=e.isCompleted,c=e.deleteTodo,i=e.fixTodo;return a.a.createElement("section",{className:"main",style:t.length>0?{display:"block"}:{display:"none"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.every(function(e){return e.completed}),onChange:function(e){return o(e.target.checked)}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(g,{todos:n,isCompleted:l,deleteTodo:c,fixTodo:i}))},k=function(e){var t=e.show,o=e.setFilter,n=E()({selected:"all"===t}),l=E()({selected:"active"===t}),c=E()({selected:"completed"===t});return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:n,onClick:function(){return o("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:l,onClick:function(){return o("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:c,onClick:function(){return o("completed")}},"Completed")))},O=function(e){var t=e.todos,o=e.clearCompleted,n=e.show,l=e.setFilter;return a.a.createElement("footer",{className:"footer",style:t.length>0?{display:"block"}:{display:"none"}},a.a.createElement("span",{className:"todo-count"},t.reduce(function(e,t){return t.completed?e:e+1},0)," ","items left"),a.a.createElement(k,{show:n,setFilter:l}),t.some(function(e){return e.completed})&&a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:o},"Clear completed"))},T={all:"all",completed:"completed",active:"active"},C=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],show:T.all},o.setFilter=function(e){o.setState({show:T[e]})},o.deleteTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.fixTodo=function(e,t){e.trim()?o.setState(function(o){return{todos:o.todos.map(function(o){return o.id!==t?o:Object(r.a)({},o,{title:e})})}}):o.deleteTodo(t)},o.isCompleted=function(e,t){o.setState(function(o){return{todos:o.todos.map(function(o){return o.id!==t?o:Object(r.a)({},o,{completed:e})})}})},o.selectAll=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return Object(r.a)({},t,{completed:e})})}})},o.addNewTodo=function(e){o.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[{title:e,id:+new Date,completed:!1}])}})},o.clearCompleted=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=function(){switch(e.state.show){case"active":return e.state.todos.filter(function(e){return!e.completed});case"completed":return e.state.todos.filter(function(e){return e.completed});default:return e.state.todos}}();return a.a.createElement("section",{className:"todoapp"},a.a.createElement(f,{addNewTodo:this.addNewTodo}),a.a.createElement(y,{todos:this.state.todos,selectAll:this.selectAll,todosFiltered:t,isCompleted:this.isCompleted,deleteTodo:this.deleteTodo,fixTodo:this.fixTodo}),a.a.createElement(O,{todos:this.state.todos,clearCompleted:this.clearCompleted,show:this.state.show,setFilter:this.setFilter}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a4863162.chunk.js.map