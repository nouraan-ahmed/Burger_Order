(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{12:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__1UbSh",BreadTop:"BurgerIngredient__BreadTop__d94JO",Seeds1:"BurgerIngredient__Seeds1__1Odq_",Seeds2:"BurgerIngredient__Seeds2__3PsG4",Meat:"BurgerIngredient__Meat__1fXGJ",Cheese:"BurgerIngredient__Cheese__3MB6x",Salad:"BurgerIngredient__Salad__zQem8",Bacon:"BurgerIngredient__Bacon__1El-p"}},16:function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__upDK9",Open:"SideDrawer__Open__18rb-",Close:"SideDrawer__Close__3ko5V",Logo:"SideDrawer__Logo__B4FbZ"}},19:function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__2zYRW",Label:"BuildControl__Label__2mOXk",Less:"BuildControl__Less__20ieq",More:"BuildControl__More__29mgQ"}},20:function(e,t,n){e.exports={Input:"Input__Input__2JD9x",Label:"Input__Label__1BS4V",InputElement:"Input__InputElement__2h6u9",Invalid:"Input__Invalid__3PMZL"}},22:function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2N0TS",Logo:"Toolbar__Logo__LWn5r",DesktopOnly:"Toolbar__DesktopOnly__13qkd"}},25:function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3e0yI",active:"NavigationItem__active__3DeVV"}},28:function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__bpFGs",OrderButton:"BuildControls__OrderButton__L9P-q",enable:"BuildControls__enable__3VXZh"}},29:function(e,t,n){e.exports={Button:"Button__Button__3bi60",Success:"Button__Success__3LPfr",Danger:"Button__Danger__3Zyj7"}},39:function(e,t,n){e.exports={Content:"Layout__Content__2jRP1"}},40:function(e,t,n){e.exports={Logo:"Logo__Logo__2kHbH"}},41:function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3tGJ9"}},43:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1uXwP"}},44:function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__1m7c-"}},45:function(e,t,n){e.exports={Burger:"burger__Burger__3_FWI"}},46:function(e,t,n){e.exports={Modal:"Modal__Modal__3F8O4"}},48:function(e,t,n){e.exports={Loader:"Spinner__Loader__2pG5S",load4:"Spinner__load4__2eyN4"}},49:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__j_q_G"}},50:function(e,t,n){e.exports={ContactData:"ContactData__ContactData__Ol2yT"}},51:function(e,t,n){e.exports={Order:"Order__Order__2n5n7"}},63:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(21),i=n.n(a),c=n(15),o=n(13),s=n(52),l=(n(63),n(4)),d=n(5),u=n(7),p=n(6),j=function(e){return e.children},h=n(39),b=n.n(h),O=n(22),g=n.n(O),m=n.p+"static/media/27.1 burger-logo.png.ec69c7f6.png",_=n(40),v=n.n(_),f=n(0),x=function(e){return Object(f.jsx)("div",{className:v.a.Logo,children:Object(f.jsx)("img",{src:m,alt:"MYBURGER"})})},C=n(41),y=n.n(C),k=n(25),N=n.n(k),S=function(e){return Object(f.jsx)("li",{className:N.a.NavigationItem,children:Object(f.jsx)(c.b,{to:e.link,exact:e.exact,activeClassName:N.a.active,children:e.children})})},B=function(){return Object(f.jsxs)("ul",{className:y.a.NavigationItems,children:[Object(f.jsx)(S,{link:"/",exact:!0,active:!0,children:"Burger Builder"}),Object(f.jsx)(S,{link:"/orders",active:!0,children:"Orders"})]})},I=n(43),w=n.n(I),D=function(e){return Object(f.jsxs)("div",{className:w.a.DrawerToggle,onClick:e.clicked,children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})},T=function(e){return Object(f.jsxs)("header",{className:g.a.Toolbar,children:[Object(f.jsx)(D,{clicked:e.drawerToggleClicked}),Object(f.jsx)("div",{className:g.a.Logo,children:Object(f.jsx)(x,{})}),Object(f.jsx)("nav",{className:g.a.DesktopOnly,children:Object(f.jsx)(B,{})})]})},L=n(16),F=n.n(L),P=n(44),E=n.n(P),H=function(e){return e.show?Object(f.jsx)("div",{className:E.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[F.a.SideDrawer,F.a.Close];return e.open&&(t=[F.a.SideDrawer,F.a.Open]),Object(f.jsxs)(j,{children:[Object(f.jsx)(H,{show:e.open,clicked:e.closed}),Object(f.jsxs)("div",{className:t.join(" "),children:[Object(f.jsx)("div",{className:F.a.Logo,children:Object(f.jsx)(x,{})}),Object(f.jsx)("nav",{children:Object(f.jsx)(B,{})})]})]})},q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!0},e.SideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.SideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(j,{children:[Object(f.jsx)(T,{drawerToggleClicked:this.SideDrawerToggleHandler}),Object(f.jsx)(M,{open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler}),Object(f.jsx)("main",{className:b.a.Content,children:this.props.children})]})}}]),n}(r.Component),R=n(2),V=n(53),A=n(45),U=n.n(A),W=n(12),G=n.n(W),Y=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(f.jsx)("div",{className:G.a.BreadBottom});break;case"bread-top":t=Object(f.jsxs)("div",{className:G.a.BreadTop,children:[Object(f.jsx)("div",{className:G.a.seeds1}),Object(f.jsx)("div",{className:G.a.seeds2})]});break;case"meat":t=Object(f.jsx)("div",{className:G.a.Meat});break;case"cheese":t=Object(f.jsx)("div",{className:G.a.Cheese});break;case"bacon":t=Object(f.jsx)("div",{className:G.a.Bacon});break;case"salad":t=Object(f.jsx)("div",{className:G.a.Salad});break;default:t=null}return t},J=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(V.a)(Array(e.ingredients[t])).map((function(e,n){return Object(f.jsx)(Y,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(f.jsx)("p",{children:"Please Start Adding Ingredients"})),Object(f.jsxs)("div",{className:U.a.Burger,children:[Object(f.jsx)(Y,{type:"bread-top"}),t,Object(f.jsx)(Y,{type:"bread-bottom"})]})},z=n(19),Z=n.n(z),X=function(e){return Object(f.jsxs)("div",{className:Z.a.BuildControl,children:[Object(f.jsx)("div",{className:Z.a.Label,children:e.label}),Object(f.jsx)("button",{className:Z.a.More,onClick:e.added,children:"+"}),Object(f.jsx)("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled,children:"-"})]})},Q=n(28),K=n.n(Q),$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return Object(f.jsxs)("div",{className:K.a.BuildControls,children:[Object(f.jsxs)("p",{children:["Current Price : ",Object(f.jsx)("strong",{children:e.price.toFixed(2)})]}),$.map((function(t){return Object(f.jsx)(X,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(f.jsx)("button",{className:K.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},te=n(46),ne=n.n(te),re=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("component willupdate")}},{key:"render",value:function(){return Object(f.jsxs)(j,{children:[Object(f.jsx)(H,{show:this.props.show,clicked:this.props.modalClosed}),Object(f.jsx)("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component),ae=n(29),ie=n.n(ae),ce=function(e){return Object(f.jsx)("button",{disabled:e.disabled,className:[ie.a.Button,ie.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},oe=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] willupdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(f.jsxs)(j,{children:[Object(f.jsx)("h3",{children:"Your Order"}),Object(f.jsx)("p",{children:"Your Favorite Burger With The Following Ingredients:"}),Object(f.jsx)("ul",{children:t}),Object(f.jsx)("p",{children:Object(f.jsxs)("strong",{children:["Total Price : ",this.props.price]})}),Object(f.jsx)("p",{children:"Continue to Check Out ?!!"}),Object(f.jsx)(ce,{btnType:"Danger",clicked:this.props.purchaseCancelled,children:"CANCEL"}),Object(f.jsx)(ce,{btnType:"Success",clicked:this.props.purchaseContinue,children:"CONTINUE"})]})}}]),n}(r.Component),se=n(47),le=n.n(se).a.create({baseURL:"https://burger-a8a21-default-rtdb.firebaseio.com/"}),de=n(48),ue=n.n(de),pe=function(){return Object(f.jsx)("div",{className:ue.a.Loader,children:"Loading..."})},je=function(e,t){return function(n){Object(u.a)(a,n);var r=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).state={error:null,reqInterceptor:null,resInterceptor:null},e.errorHandler=function(){e.setState({error:null})},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(f.jsxs)(j,{children:[Object(f.jsx)(re,{show:this.state.error,modalClosed:this.errorHandler,children:this.state.error?this.state.error.message:null}),Object(f.jsx)(e,Object(R.a)({},this.props))]})}}]),a}(r.Component)},he="ADD_INGREDIENT",be="REMOVE_INGREDIENT",Oe=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1,loading:!1,error:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.history.push("/checkout")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(R.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.state.error?Object(f.jsx)("p",{children:"Ingredients cannot be loaded"}):Object(f.jsx)(pe,{});return this.props.ings&&(r=Object(f.jsxs)(j,{children:[Object(f.jsx)(J,{ingredients:this.props.ings}),Object(f.jsx)(ee,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),price:this.props.price,ordered:this.purchaseHandler})]}),n=Object(f.jsx)(oe,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler,price:this.props.price.toFixed(2)})),this.state.loading&&(n=Object(f.jsx)(pe,{})),Object(f.jsxs)(j,{children:[Object(f.jsx)(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),ge=Object(o.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}),(function(e){return{onIngredientAdded:function(t){return e({type:he,ingredientName:t})},onIngredientRemoved:function(t){return e({type:be,ingredientName:t})}}}))(je(Oe,le)),me=n(49),_e=n.n(me),ve=function(e){return Object(f.jsxs)("div",{className:_e.a.CheckoutSummary,children:[Object(f.jsx)("h1",{children:"We hope it tastes well!"}),Object(f.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(f.jsx)(J,{ingredients:e.ingredients})}),Object(f.jsx)(ce,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(f.jsx)(ce,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},fe=n(3),xe=n(50),Ce=n.n(xe),ye=n(20),ke=n.n(ye),Ne=function(e){var t=null,n=[ke.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(ke.a.Invalid),e.elementType){case"input":t=Object(f.jsx)("input",Object(R.a)(Object(R.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(f.jsx)("textarea",Object(R.a)(Object(R.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(f.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(f.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(f.jsx)("input",Object(R.a)(Object(R.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(f.jsxs)("div",{className:ke.a.Input,children:[Object(f.jsx)("label",{className:ke.a.Label,children:e.label}),t]})},Se=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elemetConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elemetConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elemetConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elemetConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elemetConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elemetConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},loading:!1,formIsValid:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n};le.post("/orders.json",a).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e.inputChangedHandler=function(t,n){var r=Object(R.a)({},e.state.orderForm),a=Object(R.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var i=!0;for(var c in r)i=r[c].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(d.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=Object(f.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(f.jsx)(Ne,{elementType:t.config.elementType,elementConfig:t.config.elemetConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(f.jsx)(ce,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.state.loading&&(r=Object(f.jsx)(pe,{})),Object(f.jsxs)("div",{className:Ce.a.ContactData,children:[Object(f.jsx)("h4",{children:"Enter your Contact Data"}),r]})}}]),n}(r.Component),Be=Object(o.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(Se),Ie=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).chekoutCancelled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(ve,{ingredients:this.props.ings,chekoutCancelled:this.checkoutCancelled,checkoutContinued:this.checkoutContinued}),Object(f.jsx)(fe.a,{path:this.props.match.path+"/contact-data",component:Be})]})}}]),n}(r.Component),we=Object(o.b)((function(e){return{ings:e.ingredients}}))(Ie),De=n(51),Te=n.n(De),Le=function(e){var t=[];for(var n in e.order.ingredients)t.push({name:n,amount:e.order.ingredients[n]});console.log(e);var r=t.map((function(e){return Object(f.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(f.jsxs)("div",{className:Te.a.Order,children:[Object(f.jsxs)("p",{children:["Ingredients: ",r," "]}),Object(f.jsxs)("p",{children:["Price: ",Object(f.jsxs)("strong",{children:["USD ",Number.parseFloat(e.order.price).toFixed(2)]})]})]})},Fe=je(function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={orders:[],loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;le.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(R.a)(Object(R.a)({},t.data[r]),{},{id:r}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(f.jsx)("div",{children:this.state.orders.map((function(e){return Object(f.jsx)(Le,{order:e},e.id)}))})}}]),n}(r.Component),le),Pe=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(q,{children:[Object(f.jsx)(fe.a,{path:"/",exact:!0,component:ge}),Object(f.jsx)(fe.a,{path:"/checkout",component:we}),Object(f.jsx)(fe.a,{path:"/orders",component:Fe})]})})}}]),n}(r.Component),Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},He=n(18),Me={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4},qe={salad:.5,cheese:.4,meat:1.3,bacon:.7},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(R.a)(Object(R.a)({},e),{},{ingredients:Object(R.a)(Object(R.a)({},e.ingredients),{},Object(He.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+qe[t.ingredientName]});case be:return Object(R.a)(Object(R.a)({},e),{},{ingredients:Object(R.a)(Object(R.a)({},e.ingredients),{},Object(He.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-qe[t.ingredientName]});default:return e}},Ve=Object(s.a)(Re),Ae=Object(f.jsx)(o.a,{store:Ve,children:Object(f.jsx)(c.a,{children:Object(f.jsx)(Pe,{})})});i.a.render(Ae,document.getElementById("root")),Ee()}},[[87,1,2]]]);
//# sourceMappingURL=main.cec83e12.chunk.js.map