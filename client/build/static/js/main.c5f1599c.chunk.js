(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,r){},110:function(e,t,r){},111:function(e,t,r){},116:function(e,t,r){},123:function(e,t,r){},124:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(35),s=r.n(n),o=r(49),i=r(30),l=r(34),j=r(68),u=r(33),d=r(7),b=r(21),h=r.n(b),O=r(31),p=r(40),m=r.n(p),x="/api",f=function(e){return"app/".concat("concerts","/").concat(e)},y=f("START_REQUEST"),v=f("END_REQUEST"),g=f("ERROR_REQUEST"),S=f("LOAD_CONCERTS"),_={data:[],request:{pending:!1,error:null,success:null}};var k=r(28),E=function(e){return e.seats.requests},D=function(e){return"app/".concat("seats","/").concat(e)},A=D("START_REQUEST"),T=D("END_REQUEST"),w=D("ERROR_REQUEST"),N=D("LOAD_SEATS"),q=D("ADD_SEAT"),R=function(e){return{payload:e,type:A}},C=function(e){return{payload:e,type:T}},L=function(e){return{payload:e,type:w}},F=function(e){return{payload:e,type:N}},U=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R({name:"LOAD_SEATS"})),e.prev=1,e.next=4,m.a.get("".concat(x,"/seats"));case 4:r=e.sent,t(F(r.data)),t(C({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(L({name:"LOAD_SEATS",error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},H={data:[],requests:[]};var P=Object(l.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case y:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!0,error:null,success:!1}});case v:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:null,success:!0}});case g:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case q:return Object(d.a)(Object(d.a)({},e),{},{data:[].concat(Object(u.a)(e.data),[t.payload])});case A:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case T:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case w:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),M=Object(l.e)(P,Object(l.d)(Object(l.a)(j.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),I=r(9),W=r(10),Q=r(13),J=r(12),X=r(32),Y=r(125),$=r(126),G=r(127),V=r(128),B=r(129),z=r(130),K=r(131),Z=r(132),ee=r(2),te=function(e){Object(Q.a)(r,e);var t=Object(J.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(W.a)(r,[{key:"render",value:function(){return Object(ee.jsx)("div",{children:Object(ee.jsxs)(Y.a,{color:"dark",dark:!0,expand:"md",children:[Object(ee.jsx)($.a,{href:"/",children:"New Wave Festival"}),Object(ee.jsx)(G.a,{onClick:this.toggle}),Object(ee.jsx)(V.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(ee.jsxs)(B.a,{className:"ml-auto align-items-center",navbar:!0,children:[Object(ee.jsx)(z.a,{children:Object(ee.jsx)(K.a,{href:"/",children:"Home"})}),Object(ee.jsx)(z.a,{children:Object(ee.jsx)(K.a,{href:"/prices",children:"Prices"})}),Object(ee.jsx)(z.a,{children:Object(ee.jsx)(K.a,{href:"/order-a-ticket",children:Object(ee.jsx)(Z.a,{outline:!0,color:"primary",children:"Order a ticket!"})})})]})})]})})}}]),r}(c.a.Component),re=te,ae=function(){return Object(ee.jsx)("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50",children:Object(ee.jsx)("div",{className:"text-center",children:Object(ee.jsx)("small",{children:"Copyright \xa9 New Wave Festival 2019"})})})},ce=function(e){var t=e.children;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(re,{}),t,Object(ee.jsx)(ae,{})]})},ne=r(136),se=r(141),oe=(r(109),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),ie=function(){return Object(ee.jsx)(se.a,{className:"promoCarousel",items:oe})},le=r(135),je=r(142),ue=r(133),de=r(134),be=(r(110),function(e){var t=e.performer,r=e.price,a=e.genre,c=e.day,n=e.image;return Object(ee.jsx)("article",{className:"concert",children:Object(ee.jsxs)(ue.a,{noGutters:!0,children:[Object(ee.jsx)(de.a,{xs:"6",children:Object(ee.jsx)("div",{className:"concert__image-container",children:Object(ee.jsx)("img",{className:"concert__image-container__img",src:n,alt:t})})}),Object(ee.jsx)(de.a,{xs:"6",children:Object(ee.jsxs)("div",{className:"concert__info",children:[Object(ee.jsx)("img",{className:"concert__info__back",src:n,alt:t}),Object(ee.jsx)("h2",{className:"concert__info__performer",children:t}),Object(ee.jsx)("h3",{className:"concert__info__genre",children:a}),Object(ee.jsxs)("p",{className:"concert__info__day-n-price",children:["Day: ",c,", Price: ",r,"$"]})]})})]})})}),he=function(e){var t=e.concerts;return Object(ee.jsx)("section",{children:t.map((function(e){return Object(ee.jsx)(be,Object(d.a)({},e),e.id)}))})},Oe=function(e){Object(Q.a)(r,e);var t=Object(J.a)(r);function r(){return Object(I.a)(this,r),t.apply(this,arguments)}return Object(W.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,r=e.concerts;return t.pending?Object(ee.jsx)(le.a,{animated:!0,color:"primary",value:50}):t.error?Object(ee.jsx)(je.a,{color:"warning",children:t.error}):t.success&&r.length?t.success?Object(ee.jsx)(ee.Fragment,{children:Object(ee.jsx)(he,{concerts:r})}):void 0:Object(ee.jsx)(je.a,{color:"info",children:"No concerts"})}}]),r}(c.a.Component),pe=Oe,me=Object(i.b)((function(e){return{concerts:(r=e,r.concerts.data),request:(t=e,t.concerts.request)};var t,r}),(function(e){return{loadConcerts:function(){return e(function(){var e=Object(O.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,m.a.get("".concat(x,"/concerts"));case 4:r=e.sent,t({payload:r.data,type:S}),t({type:v}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:g});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(pe),xe=function(){return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(ie,{}),Object(ee.jsxs)(ne.a,{children:[Object(ee.jsx)("h1",{children:"Who's on?"}),Object(ee.jsx)(me,{})]})]})},fe=function(){return Object(ee.jsx)("div",{children:Object(ee.jsx)("h1",{children:"404 Not Found"})})},ye=function(){return Object(ee.jsxs)(ne.a,{children:[Object(ee.jsx)("h1",{children:"Prices"}),Object(ee.jsx)("p",{children:"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."}),Object(ee.jsxs)(je.a,{color:"info",children:["Attention! ",Object(ee.jsx)("strong",{children:"Children under 4 can go freely with you without any other fee!"})]}),Object(ee.jsx)("h2",{children:"Day one"}),Object(ee.jsx)("p",{children:"Price: 25$"}),Object(ee.jsx)("p",{children:'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'}),Object(ee.jsx)("h2",{children:"Day Two"}),Object(ee.jsx)("p",{children:"Price: 25$"}),Object(ee.jsx)("p",{children:'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'}),Object(ee.jsx)("h2",{children:"Day three"}),Object(ee.jsx)("p",{children:"Price: 50$"}),Object(ee.jsx)("p",{children:'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'})]})},ve=r(137),ge=r(138),Se=r(139),_e=r(140),ke=(r(111),r(16)),Ee=r(73),De=(r(116),function(e){Object(Q.a)(r,e);var t=Object(J.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).isTaken=function(t){var r=e.props,a=r.seats,c=r.chosenDay;return a.some((function(e){return e.seat===t&&e.day===c}))},e.prepareSeat=function(t){var r=e.props,a=r.chosenSeat,c=r.updateSeat,n=Object(ke.a)(e).isTaken;return t===a?Object(ee.jsx)(Z.a,{className:"seats__seat",color:"primary",children:t},t):n(t)?Object(ee.jsx)(Z.a,{className:"seats__seat",disabled:!0,color:"secondary",children:t},t):Object(ee.jsx)(Z.a,{color:"primary",className:"seats__seat",outline:!0,onClick:function(e){return c(e,t)},children:t},t)},e}return Object(W.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadSeats,r=e.loadSeatsData;t(),this.socket=Ee.a.connect("/",{transports:["websocket"]}),this.socket.on("seatsUpdated",(function(e){return r(e)}))}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props,r=t.requests,a=t.seats,c=t.chosenDay;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("h3",{children:"Pick a seat"}),Object(ee.jsxs)("small",{id:"pickHelp",className:"form-text text-muted ml-2",children:[Object(ee.jsx)(Z.a,{color:"secondary"})," \u2013 seat is already taken"]}),Object(ee.jsxs)("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4",children:[Object(ee.jsx)(Z.a,{outline:!0,color:"primary"})," \u2013 it's empty"]}),r.LOAD_SEATS&&r.LOAD_SEATS.success&&Object(ee.jsx)("div",{className:"seats",children:Object(u.a)(Array(50)).map((function(t,r){return e(r+1)}))}),r.LOAD_SEATS&&r.LOAD_SEATS.pending&&Object(ee.jsx)(le.a,{animated:!0,color:"primary",value:50}),r.LOAD_SEATS&&r.LOAD_SEATS.error&&Object(ee.jsx)(je.a,{color:"warning",children:"Couldn't load seats..."}),Object(ee.jsxs)("h4",{children:["Free seats: ",50-a.filter((function(e){return e.day===c})).length," / 50"]})]})}}]),r}(c.a.Component)),Ae=De,Te=Object(i.b)((function(e){return{seats:(t=e,t.seats.data),requests:E(e)};var t}),(function(e){return{loadSeats:function(){return e(U())},loadSeatsData:function(t){return e(F(t))}}}))(Ae),we=function(e){Object(Q.a)(r,e);var t=Object(J.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},e.updateSeat=function(t,r){var a=e.state.order;t.preventDefault(),e.setState({order:Object(d.a)(Object(d.a)({},a),{},{seat:r})})},e.updateTextField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(k.a)({},n,c))})},e.updateNumberField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(k.a)({},n,parseInt(c)))})},e.submitForm=function(){var t=Object(O.a)(h.a.mark((function t(r){var a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.order,c=e.props.addSeat,r.preventDefault(),!(a.client&&a.email&&a.day&&a.seat)){t.next=9;break}return t.next=6,c(a);case 6:e.setState({order:{client:"",email:"",day:1,seat:""},isError:!1}),t.next=10;break;case 9:e.setState({isError:!0});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(W.a)(r,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,r=this.updateNumberField,a=this.submitForm,c=this.props.requests,n=this.state,s=n.order,o=n.isError;return Object(ee.jsx)(ve.a,{className:"order-ticket-form",onSubmit:a,children:Object(ee.jsxs)(ue.a,{children:[Object(ee.jsxs)(de.a,{xs:"12",md:"6",children:[o&&Object(ee.jsx)(je.a,{color:"warning",children:"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"}),c.ADD_SEAT&&c.ADD_SEAT.error&&!o&&Object(ee.jsx)(je.a,{color:"danger",children:c.ADD_SEAT.error}),c.ADD_SEAT&&c.ADD_SEAT.success&&!o&&Object(ee.jsx)(je.a,{color:"success",children:"You've booked your ticket! Check you email in order to make a payment."}),c.ADD_SEAT&&c.ADD_SEAT.pending&&Object(ee.jsx)(le.a,{animated:!0,className:"mb-5",color:"primary",value:75}),Object(ee.jsxs)(ge.a,{children:[Object(ee.jsx)(Se.a,{for:"clientEmail",children:"Name"}),Object(ee.jsx)(_e.a,{type:"text",value:s.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})]}),Object(ee.jsxs)(ge.a,{children:[Object(ee.jsx)(Se.a,{for:"clientEmail",children:"Email"}),Object(ee.jsx)(_e.a,{type:"email",value:s.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})]}),Object(ee.jsxs)(ge.a,{children:[Object(ee.jsx)(Se.a,{for:"clientDay",children:"Select which day of festivals are you interested in:"}),Object(ee.jsxs)(_e.a,{type:"select",value:s.day,name:"day",onChange:r,id:"exampleSelect",children:[Object(ee.jsx)("option",{children:"1"}),Object(ee.jsx)("option",{children:"2"}),Object(ee.jsx)("option",{children:"3"})]}),Object(ee.jsx)("small",{id:"dayHelp",className:"form-text text-muted",children:"Every day of the festival uses individual ticket. You can book only one ticket at the time."})]}),Object(ee.jsx)(ge.a,{check:!0,children:Object(ee.jsxs)(Se.a,{check:!0,children:[Object(ee.jsx)(_e.a,{required:!0,type:"checkbox"})," I agree with ",Object(ee.jsx)("a",{href:"#",children:"Terms and conditions"})," and ",Object(ee.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]})}),Object(ee.jsx)(Z.a,{color:"primary",className:"mt-3",children:"Submit"})]}),Object(ee.jsx)(de.a,{xs:"12",md:"6",children:Object(ee.jsx)(Te,{chosenDay:s.day,chosenSeat:s.seat,updateSeat:e})})]})})}}]),r}(c.a.Component),Ne=we,qe=Object(i.b)((function(e){return{requests:E(e)}}),(function(e){return{loadSeats:function(){return e(U)},addSeat:function(t){return e(function(e){return function(){var t=Object(O.a)(h.a.mark((function t(r){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(R({name:"ADD_SEAT"})),t.prev=1,t.next=4,m.a.post("".concat(x,"/seats"),e);case 4:a=t.sent,r({payload:a,type:q}),r(C({name:"ADD_SEAT"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(L({name:"ADD_SEAT",error:t.t0.message}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Ne),Re=function(){return Object(ee.jsxs)(ne.a,{children:[Object(ee.jsx)("h1",{children:"Order a ticket"}),Object(ee.jsx)(qe,{})]})},Ce=function(e){Object(Q.a)(r,e);var t=Object(J.a)(r);function r(){return Object(I.a)(this,r),t.apply(this,arguments)}return Object(W.a)(r,[{key:"render",value:function(){return Object(ee.jsx)(ce,{children:Object(ee.jsxs)(X.c,{children:[Object(ee.jsx)(X.a,{path:"/",exact:!0,component:xe}),Object(ee.jsx)(X.a,{path:"/prices",exact:!0,component:ye}),Object(ee.jsx)(X.a,{path:"/order-a-ticket",exact:!0,component:Re}),Object(ee.jsx)(X.a,{component:fe})]})})}}]),r}(c.a.Component),Le=Ce,Fe=(r(122),r(123),function(){return Object(ee.jsx)(i.a,{store:M,children:Object(ee.jsx)(o.a,{children:Object(ee.jsx)(Le,{})})})});s.a.render(Object(ee.jsx)(Fe,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.c5f1599c.chunk.js.map