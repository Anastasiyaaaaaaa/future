(this["webpackJsonpfuture-app"]=this["webpackJsonpfuture-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),s=a.n(r),c=(a(17),a(7)),o=a.n(c),i=a(10),m=a(2),u=a(3),d=a(4),h=a(6),f=a(5),p=(a(19),a(20),function(e){return l.a.createElement("div",{className:"userChoise"},l.a.createElement("div",{className:"info"}," ","\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445: "),l.a.createElement("div",{className:"mainButtons"},l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-outline-warning"},"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439"),l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")},className:"btn btn-outline-info"},"\u0411\u043e\u043b\u044c\u0448\u043e\u0439")))}),E=(a(21),function(){return l.a.createElement("div",{className:"Loader"},l.a.createElement("div",{className:"lds-heart"},l.a.createElement("div",null)),l.a.createElement("div",{className:"LoaderText"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."))}),b=a(11),N=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1];return l.a.createElement("div",{className:"tableFilter"},l.a.createElement("div",{className:"input-group "},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.onSearch(r)}},"\u041d\u0430\u0439\u0442\u0438")),l.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",className:"form-control",onChange:function(e){s(e.target.value)},value:r})," "))},v=(a(22),function(e){return l.a.createElement("div",{className:"paginator"},e.numberOfPages>1?e.pages.map((function(t){return l.a.createElement("span",{key:t,className:e.currentPage===t?"selectedPage":"notSelectedPage",onClick:e.handleClick},t," ")})):null)}),C=(a(23),function(e){var t=e.row;return l.a.createElement("div",{className:"onRowSelectInfo"},l.a.createElement("p",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,t.firstName+" "+t.lastName)),l.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: ",l.a.createElement("br",null),l.a.createElement("textarea",{defaultValue:t.description})),l.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",l.a.createElement("b",null,t.address.streetAddress)),l.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",l.a.createElement("b",null,t.address.city)),l.a.createElement("p",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",l.a.createElement("b",null,t.address.state)),l.a.createElement("p",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",l.a.createElement("b",null,t.address.zip)))}),S=a(1),g=(a(24),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState({onButtonClick:!0})},n.handleClickCancel=function(){n.setState({onButtonClick:!1,id:"",firstName:"",lastName:"",email:"",phone:""})},n.state={id:"",firstName:"",lastName:"",email:"",phone:"",onButtonClick:!1,onButtonActive:!1},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(m.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t={id:this.state.id,firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,phone:this.state.phone,address:{streetAddress:"",city:"",state:"",zip:""},description:"\u042d\u0442\u043e \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c!"};this.props.addRow(t),this.setState({onButtonClick:!1,id:"",firstName:"",lastName:"",email:"",phone:""}),e.preventDefault()}},{key:"isDisabled",value:function(){var e=this.state,t=e.id,a=e.firstName,n=e.lastName,l=e.email,r=e.phone;return""===t||""===a||""===n||""===l||""===r}},{key:"render",value:function(){return l.a.createElement("div",null,!1===this.state.onButtonClick?l.a.createElement("button",{onClick:this.handleClick,className:"btn btn-success"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit,className:"tableForm"},l.a.createElement("div",{className:"headerButton"},l.a.createElement("button",{className:"btn navbar-toggle",onClick:this.handleClickCancel},"x")),l.a.createElement("label",{className:"formHeaderlabel"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: "),l.a.createElement("label",{className:"col-form-label-sm"},"id:",l.a.createElement("input",{className:"form-control",required:!0,name:"id",type:"id",pattern:"^[ 0-9]+$",placeholder:"12",value:this.state.id,onChange:this.handleChange})),l.a.createElement("label",{className:"col-form-label-sm"},"firstName:",l.a.createElement("input",{className:"form-control",required:!0,name:"firstName",type:"text",pattern:"^[a-zA-Z]+$",placeholder:"Louis",value:this.state.firstName,onChange:this.handleChange})),l.a.createElement("label",{className:"col-form-label-sm"},"lastName:",l.a.createElement("input",{className:"form-control",required:!0,name:"lastName",type:"text",pattern:"^[a-zA-Z]+$",placeholder:"Gunter",value:this.state.lastName,onChange:this.handleChange})),l.a.createElement("label",{className:"col-form-label-sm"},"email:",l.a.createElement("input",{className:"form-control",required:!0,name:"email",type:"email",placeholder:"example@mail.com",value:this.state.email,onChange:this.handleChange})),l.a.createElement("label",{className:"col-form-label-sm"},"phone:",l.a.createElement("input",{className:"form-control",required:!0,name:"phone",type:"tel",placeholder:"(888)888-8888",pattern:"\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}",value:this.state.phone,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{disabled:this.isDisabled(),type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443",className:"btn btn-success"}))))}}]),a}(l.a.Component)),w=function(e){return l.a.createElement("div",null,l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{onClick:function(){return e.onSort("id")}},"ID","id"===e.sortField?l.a.createElement("small",null,e.sortSymbol):null),l.a.createElement("th",{onClick:function(){return e.onSort("firstName")}},"First Name","firstName"===e.sortField?l.a.createElement("small",null,e.sortSymbol):null),l.a.createElement("th",{onClick:function(){return e.onSort("lastName")}},"Last Name","lastName"===e.sortField?l.a.createElement("small",null,e.sortSymbol):null),l.a.createElement("th",{onClick:function(){return e.onSort("email")}},"E-mail","email"===e.sortField?l.a.createElement("small",null,e.sortSymbol):null),l.a.createElement("th",{onClick:function(){return e.onSort("phone")}},"Phone","phone"===e.sortField?l.a.createElement("small",null,e.sortSymbol):null))),l.a.createElement("tbody",null,e.data.map((function(t){return l.a.createElement("tr",{key:t.id+t.phone,onClick:e.onRowSelect.bind(null,t)},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.firstName),l.a.createElement("td",null,t.lastName),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phone))})))))},k=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).searchHandler=function(e){return n.setState({search:e,currentPage:1})},n.SelectionButtonsHandler=function(e){n.setState({isButtonSelected:!0,isLoading:!0,error:!1}),n.fetchData(e)},n.onSortHandler=function(e){var t=n.state.data.concat(),a="asc"===n.state.sort?"desc":"asc";n.setState({data:t.sort((function(t,n){var l="asc"===a;return t[e]<n[e]?l?-1:1:t[e]>n[e]?l?1:-1:0})),directionSymbol:Object(m.a)({},e,"asc"===n.state.directionSymbol[e]?"desc":"asc"),sortColumn:e,sort:a})},n.onRowSelect=function(e){n.setState({row:e})},n.handleClick=function(e){var t=Number(e.target.innerHTML);n.setState({currentPage:t})},n.addedRow=function(e){var t=n.state.data.concat();t.unshift(e),n.setState({data:t})},n.state={data:[],error:null,isButtonSelected:!1,isLoading:!1,pageSize:50,currentPage:1,search:"",sortColumn:"",sort:"asc",directionSymbol:{symbol:"asc"},row:null},n}return Object(d.a)(a,[{key:"fetchData",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a.setState({data:e,isLoading:!1,search:!1,row:null})}),(function(e){a.setState({isLoading:!0,error:e})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFilteredData",value:function(){var e=this.state,t=e.data,a=e.search,n=t.concat();return a?n.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())})):n}},{key:"render",value:function(){for(var e=this.state,t=e.currentPage,a=e.pageSize,n=t*a,r=n-a,s=this.getFilteredData(),c=Math.ceil(s.length/a),o=s.slice(r,n),i=[],m=1;m<=c;m++)i.push(m);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(p,{onSelect:this.SelectionButtonsHandler})),this.state.isButtonSelected?this.state.error?l.a.createElement("p",null," \u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 :( "):this.state.isLoading?l.a.createElement(E,null):l.a.createElement("div",{className:"mainContent"},l.a.createElement("div",{className:"topFunctions"},l.a.createElement(N,{onSearch:this.searchHandler}),l.a.createElement(g,{addRow:this.addedRow})),0===o.length?l.a.createElement("div",{className:"noSearchResults"}," ","\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. ",l.a.createElement("br",null)," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 :)"," "):l.a.createElement(w,{data:o,onSort:this.onSortHandler,sortSymbol:this.state.sort,sortField:this.state.sortColumn,onRowSelect:this.onRowSelect}),l.a.createElement(v,{numberOfPages:c,pages:i,currentPage:t,handleClick:this.handleClick}),this.state.row&&0!==o.length?l.a.createElement(C,{row:this.state.row}):null):l.a.createElement("div",{className:"startPage"}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.c583223d.chunk.js.map