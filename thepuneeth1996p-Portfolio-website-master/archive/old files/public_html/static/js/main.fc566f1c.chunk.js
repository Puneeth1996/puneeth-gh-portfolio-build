(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(31),r=a.n(i),c=(a(80),a(6)),s=a(10),m=a(8),o=a(7),u=a(9),d=a(15),p=a(23),h=a(17),b=a(30),g=a(74),f=(a(81),a(21)),E=a(19);var v=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.a,{className:"border-top justify-content-between p-3"},l.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Puneeth"),l.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Puneeth P."))))},y=a(55);var k=function(e){return l.a.createElement(y.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center py-5"},l.a.createElement(E.a,{md:8,sm:12},e.title&&l.a.createElement("h3",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h4",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h4",{className:"lead font-weight-light"},e.text)))))},S=a(27),j=a(38);var w=function(e){var t=Object(j.b)({opacity:1,from:{opacity:0}});return l.a.createElement(j.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement(d.b,{to:e.link},"View"))};var T=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(w,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},N=a(58),C=a.n(N),x=a(59),P=a.n(x),O=a(60),A=a.n(O),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(S.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(T,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Projects",subTitle:"All My Projects",imgSrc:C.a,link:"/projects",selected:!1},{id:1,title:"Puneeth P",subTitle:"Portfolio Page",imgSrc:P.a,link:"/about",selected:!1},{id:2,title:"Contact Me",subTitle:"You can contact me!",imgSrc:A.a,link:"/contact",selected:!1}]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var M=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(J,null))};var R=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:8},e.children)))};var L=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title}),l.a.createElement(R,null,l.a.createElement("p",null,"Hello, my name is ",l.a.createElement(d.b,{to:"/"},"Puneeth"),"."),l.a.createElement("p",null,"I'm a full stack engineer with experience in WordPress, PHP, ReactJS, Express JS, Node JS, Oracle SQL, MongoDB, and MySQL."),l.a.createElement("p",null,"My dream is to one day start my own business and become an entrepreneur (currently working on some ideas)."),l.a.createElement("p",null,"I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS"),l.a.createElement("p",null,"You can check out, all my latest projects ",l.a.createElement(d.b,{to:"/projects"},"here")),l.a.createElement("p",null,"When I'm not learning something new, I play basketball ",l.a.createElement("span",{role:"img","aria-labelledby":"smiley"},"\ud83d\ude01"),".")))},I=a(26),B=a(16),D=a(62),F=a(61),H=a.n(F),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(I.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0});var t={name:a.state.name,email:a.state.email,message:a.state.message};H()({method:"POST",url:"http://thepuneeth1996p.tech/email.php",data:t}).then(function(e){console.log(e),"success"===e.data.status?a.setState({name:"",email:"",message:"",disabled:!1,emailSent:!0}):a.setState({name:"",email:"",message:"",disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),a.setState({name:"",email:"",message:"",disabled:!1,emailSent:!1})})},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,{title:this.props.title}),l.a.createElement(R,null,l.a.createElement(B.a,{onSubmit:this.handleSubmit},l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(B.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(B.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(B.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(D.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),G=a(112),U=a(109),z=a(111),q=a(110),Q=a(63),Y=a.n(Q),_=a(64),K=a.n(_),V=a(65),$=a.n(V),X=a(66),Z=a.n(X),ee=a(67),te=a.n(ee),ae=a(68),ne=a.n(ae),le=a(69),ie=a.n(le),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).pageChanged=function(e){var t=parseInt(e.target.text);a.setState({pageNumber:t})},a.state={items:[{id:0,title:"EporiumUSA Ecom Website",subTitle:"This was a website build using HTML CSS JS and PHP as the Server Side Langauge.",imgSrc:Y.a,link:"http://eporiumusa.com/",feature:["PHP","JS","Front End"],dataAdded:"Made on 12 Feb 2020"},{id:1,title:"Drone Makers - Wordpress built",subTitle:"This was my first website after my Engeneering, trying to market Drone with website.",imgSrc:K.a,link:"https://puneethskingstongq.000webhostapp.com/",feature:["Word-Press"],dataAdded:"Made on November 2017"},{id:2,title:"React Mini Chat App",subTitle:"This is very simple chat, should be imporving it with persistance, backend, SOCKETS to have that real feel...The code https://github.com/Puneeth1996/chat_intermediate",imgSrc:$.a,link:"https://dazzling-hopper-c995fe.netlify.com/",feature:["ReactJS","Javascript"],dataAdded:"Made on Sept 2018"},{id:3,title:"Meal Planner App",subTitle:"A react meal planner app that is built with react and with help of the api.I did learn it when taking short Reactjs Program with Udacity.",imgSrc:Z.a,link:"https://eloquent-ardinghelli-0935f8.netlify.com/",feature:["ReactJS","Javascript"],dataAdded:"Made on June 2018"},{id:4,title:"City Tours Planner App",subTitle:"A react city tours planner app which is built using bootstrap.",imgSrc:te.a,link:"https://flamboyant-mccarthy-795ac2.netlify.com",feature:["ReactJS","Javascript"],dataAdded:"Made on December 2018"},{id:5,title:"Tech Store Ecom App",subTitle:"A fully blown React Ecomm Project built using Contenful Backend.",imgSrc:ne.a,link:"https://serene-austin-5b971c.netlify.com/",feature:["ReactJS","Javascript","Contentfull Backend Admin"],dataAdded:"Made on Jan 2019"},{id:5,title:"Guest List",subTitle:"A CRUD app with React",imgSrc:ie.a,link:"https://vigorous-kepler-b8d8a1.netlify.com/",feature:["ReactJS","Javascript","CURD Operations"],dataAdded:"Made on October 2018"}],pageNumber:1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.state.pageNumber,t=[],a=Math.ceil(this.state.items.length/6),n=1;n<=a;n++)t.push(l.a.createElement(G.a.Item,{key:n,active:n===e},n));console.log(6*(e-1),6*e+1);var i=this.state.items.slice(6*(e-1),6*e);return console.log(i),l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,{style:{marginLeft:"5vw",marginRight:"5vw"}},i.map(function(e){return l.a.createElement(z.a,{key:e.id,style:{marginLeft:"1vw",marginRight:"1vw"}},l.a.createElement(z.a.Img,{variant:"top",src:e.imgSrc,style:{height:"65vh",width:"30vw"}}),l.a.createElement(z.a.Body,null,l.a.createElement(z.a.Title,null,e.title),l.a.createElement(z.a.Text,null,e.subTitle,e.id),e.feature.map(function(e){return l.a.createElement(q.a,{variant:"secondary",className:"m-2"},e)}),l.a.createElement(z.a.Text,null,l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"here"))),l.a.createElement(z.a.Footer,null,l.a.createElement("small",{className:"text-muted"},e.dataAdded)))})),l.a.createElement(G.a,{size:"lg",onClick:this.pageChanged},t))}}]),t}(n.Component);var ce=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(re,null))},se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={title:"Puneeth",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless"},about:{title:"About Me"},projects:{title:"All My Projects",subTitle:"Projects that make a difference",text:"Checkout my projects below"},contact:{title:"Let's Talk"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(b.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(b.a.Brand,null,this.state.title),l.a.createElement(b.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(b.a.Collapse,{id:"navbar-toggle"},l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(d.b,{className:"nav-link",to:"/projects"},"Projects"),l.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(p.a,{path:"/",exact:!0,render:function(){return l.a.createElement(M,{title:e.state.home.title})}}),l.a.createElement(p.a,{path:"/about",render:function(){return l.a.createElement(L,{title:e.state.about.title})}}),l.a.createElement(p.a,{path:"/projects",render:function(){return l.a.createElement(ce,{title:e.state.projects.title,subTitle:e.state.projects.subTitle,text:e.state.projects.text})}}),l.a.createElement(p.a,{path:"/contact",render:function(){return l.a.createElement(W,{title:e.state.contact.title})}}),l.a.createElement(v,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(105);r.a.render(l.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a.p+"static/media/projects.29e05b58.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/myimg.4cdd7091.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/contactme.954e00db.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/eporiumusa.d6abe886.png"},64:function(e,t,a){e.exports=a.p+"static/media/dronemakers.c72f5b31.png"},65:function(e,t,a){e.exports=a.p+"static/media/mini-chat-app.97e5a8ec.png"},66:function(e,t,a){e.exports=a.p+"static/media/mealPlanner.14cd50e3.png"},67:function(e,t,a){e.exports=a.p+"static/media/city-tours-planner.1ae8ff90.png"},68:function(e,t,a){e.exports=a.p+"static/media/techStoreEcom.24d1357b.png"},69:function(e,t,a){e.exports=a.p+"static/media/guestList.4495f110.png"},75:function(e,t,a){e.exports=a(106)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.fc566f1c.chunk.js.map