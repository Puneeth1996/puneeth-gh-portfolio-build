(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/youtube.0f423153.png"},15:function(e,t,a){e.exports=a.p+"static/media/evverest.3da49c68.png"},34:function(e,t,a){e.exports=a.p+"static/media/devgrub.bf79b675.png"},68:function(e,t,a){e.exports=a(99)},73:function(e,t,a){},74:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),i=a.n(r),c=(a(73),a(6)),o=a(10),s=a(8),d=a(7),m=a(9),u=a(30),b=a(24),h=a(18),g=a(32),v=a(67),p=(a(74),a(22)),E=a(20);var f=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"border-top justify-content-between p-3"},l.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Puneeth"),l.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Puneeth P."))))},w=a(58);var k=function(e){return l.a.createElement(w.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center py-5"},l.a.createElement(E.a,{md:8,sm:12},e.title&&l.a.createElement("h3",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h4",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h4",{className:"lead font-weight-light"},e.text)))))},S=a(28),T=a(41);var A=function(e){var t=Object(T.b)({opacity:1,from:{opacity:0}});return l.a.createElement(T.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var y=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},x=a(34),C=a.n(x),j=a(14),F=a.n(j),N=a(15),O=a.n(N),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleCardClick=function(e,t){var n=Object(S.a)(a.state.items);n[e].selected=!n[e].selected,n.forEach(function(t){t.id!==e&&(t.selected=!1)}),a.setState({items:n})},a.makeItems=function(e){return e.map(function(e){return l.a.createElement(y,{item:e,click:function(t){return a.handleCardClick(e.id,t)},key:e.id})})},a.state={items:[{id:0,title:"Dev Grub",subTitle:"The cookbook for developers",imgSrc:C.a,link:"https://devgrub.com",selected:!1},{id:1,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",selected:!1},{id:2,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",selected:!1}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),t}(l.a.Component);var L=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(G,null))};var I=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:8},e.children)))};var J=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title}),l.a.createElement(I,null,l.a.createElement("p",null,"Hello, my name is Garrett. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React."),l.a.createElement("p",null,"My dream is to one day start my own business and become an entrepreneur (currently working on some ideas)."),l.a.createElement("p",null,"I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS, and Node JS"),l.a.createElement("p",null,"My latest project, Dev Grub, is a cookbook for developers. You can check it out ",l.a.createElement("a",{href:"https://devgrub.com",target:"_blank",rel:"noopener noreferrer"},"here"),", or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months"),l.a.createElement("p",null,"When I'm not learning something new chances are I'm creating some YouTube videos. You can find those ",l.a.createElement("a",{href:"http://www.youtube.com/c/GarrettLove1",target:"_blank",rel:"noopener noreferrer"},"here"))))},Y=a(27),V=a(17),q=a(60),U=a(59),Z=a.n(U),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(Y.a)({},l,n))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target),a.setState({disabled:!0});var t={name:a.state.name,email:a.state.email,message:a.state.message};Z()({method:"POST",url:"http://thepuneeth1996p.tech/email.php",data:t}).then(function(e){console.log(e),"success"==e.data.status?a.setState({disabled:!1,emailSent:!0}):a.setState({disabled:!1,emailSent:!1})}).catch(function(e){console.log(e),a.setState({disabled:!1,emailSent:!1})})},a.state={name:"",email:"",message:"",disabled:!1,emailSent:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,{title:this.props.title}),l.a.createElement(I,null,l.a.createElement(V.a,{onSubmit:this.handleSubmit},l.a.createElement(V.a.Group,null,l.a.createElement(V.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(V.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(V.a.Group,null,l.a.createElement(V.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(V.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(V.a.Group,null,l.a.createElement(V.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(V.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(q.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),t}(l.a.Component),P=a(105),B=a(102),D=a(104),H=a(103),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).pageChanged=function(e){var t=parseInt(e.target.text);a.setState({pageNumber:t})},a.state={items:[{id:0,title:"Card title",text:"This card has supporting text below as a natural lead-in to additional \n content.",imgSrc:C.a,link:"https://devgrub.com",dataAdded:"Added on 12 Feb 2020"},{id:1,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:2,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:3,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:4,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:5,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:6,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:7,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:8,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:9,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:10,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:11,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:12,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:13,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:14,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:15,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:16,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:17,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:18,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"},{id:19,title:"Garrett Love",subTitle:"YouTube channel",imgSrc:F.a,link:"https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",dataAdded:"Added on 12 Feb 2020"},{id:20,title:"Evverest",subTitle:"A social network for developers",imgSrc:O.a,link:"https://github.com/garrettlove8/evverest",dataAdded:"Added on 12 Feb 2020"}],pageNumber:1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.state.pageNumber,t=[],a=Math.ceil(this.state.items.length/6),n=1;n<=a;n++)t.push(l.a.createElement(P.a.Item,{key:n,active:n===e},n));console.log(6*(e-1),6*e+1);var r=this.state.items.slice(6*(e-1),6*e);return console.log(r),l.a.createElement(l.a.Fragment,null,l.a.createElement(B.a,null,r.map(function(e){return l.a.createElement(D.a,{key:e.id},l.a.createElement(D.a.Img,{variant:"top",src:e.imgSrc}),l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,e.title),l.a.createElement(D.a.Text,null,e.subTitle,e.id),l.a.createElement(H.a,{variant:"secondary",className:"m-2"},"Secondary"),l.a.createElement(H.a,{variant:"secondary",className:"m-2"},"Secondary")),l.a.createElement(D.a.Footer,null,l.a.createElement("small",{className:"text-muted"},e.dataAdded)))})),l.a.createElement(P.a,{size:"lg",onClick:this.pageChanged},t))}}]),t}(n.Component);var W=function(e){return l.a.createElement("div",null,l.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(R,null))},_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={title:"Puneeth",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless"},about:{title:"About Me"},projects:{title:"All My Projects",subTitle:"Projects that make a difference",text:"Checkout my projects below"},contact:{title:"Let's Talk"}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:!0},l.a.createElement(g.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(g.a.Brand,null,this.state.title),l.a.createElement(g.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(g.a.Collapse,{id:"navbar-toggle"},l.a.createElement(v.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/projects"},"Projects"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(b.a,{path:"/",exact:!0,render:function(){return l.a.createElement(L,{title:e.state.home.title})}}),l.a.createElement(b.a,{path:"/about",render:function(){return l.a.createElement(J,{title:e.state.about.title})}}),l.a.createElement(b.a,{path:"/projects",render:function(){return l.a.createElement(W,{title:e.state.projects.title,subTitle:e.state.projects.subTitle,text:e.state.projects.text})}}),l.a.createElement(b.a,{path:"/contact",render:function(){return l.a.createElement(M,{title:e.state.contact.title})}}),l.a.createElement(f,null)))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98);i.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[68,1,2]]]);
//# sourceMappingURL=main.803b2231.chunk.js.map