(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4529],{32979:function(e,s){"use strict";s.Z=function(e){window.addEventListener("scroll",(function(){var s=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*s+"px, 0)",e.style.opacity=1-s/600}))}))}},5032:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery");s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})}));var a=document.querySelectorAll(".gallery-mons");a.length>=1&&a.forEach((function(s){e=new Isotope(s,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var i=document.querySelector(".filtering");if(i){var n=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))};i.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");a=a,e.arrange({filter:a})}}));for(var t=document.querySelectorAll(".filtering"),c=0,r=t.length;c<r;c++){n(t[c])}}}},38037:function(e,s){"use strict";s.Z=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(e){e.innerHTML=e.innerHTML.replace(" / ","")}))}},40288:function(e,s,a){"use strict";var i=a(77625),n=a(67294),t=a(61239),c=(a(45607),a(85893));s.Z=function(){console.clear();var e=n.useState(!1),s=(0,i.Z)(e,2),a=s[0],r=s[1];return(0,c.jsx)("section",{className:"about-cr",children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-6 img md-mb50",children:(0,c.jsx)("img",{src:"/img/intro/4.jpg",alt:""})}),(0,c.jsx)("div",{className:"col-lg-4 valign",children:(0,c.jsxs)("div",{className:"cont full-width",children:[(0,c.jsx)("h3",{className:"color-font",children:"Huge collection."}),(0,c.jsxs)("h6",{children:["Innovative solutions ",(0,c.jsx)("br",{})," to boost your creative projects."]}),(0,c.jsx)(t.Z,{channel:"vimeo",autoplay:!0,isOpen:a,videoId:"127203262",onClose:function(){return r(!1)}}),(0,c.jsxs)("div",{className:"vid-area",children:[(0,c.jsx)("div",{className:"vid-icon",children:(0,c.jsx)("a",{className:"vid",href:"https://vimeo.com/127203262",onClick:function(e){e.preventDefault(),r(!0)},children:(0,c.jsx)("div",{className:"vid-butn back-color",children:(0,c.jsx)("span",{className:"icon",children:(0,c.jsx)("i",{className:"fas fa-play"})})})})}),(0,c.jsx)("div",{className:"valign",children:(0,c.jsx)("span",{className:"text",children:"Watch Video"})})]}),(0,c.jsxs)("div",{className:"states",children:[(0,c.jsxs)("h2",{className:"color-font fw-700",children:["125 ",(0,c.jsx)("span",{className:"fz-30",children:"k"})]}),(0,c.jsx)("p",{children:"Projects completed around the world"})]})]})})]})})})}},72786:function(e,s,a){"use strict";a(67294);var i=a(51514),n=a(41664),t=a(85893);s.Z=function(e){var s=e.img;return(0,t.jsx)("section",{className:"call-action section-padding sub-bg bg-img",style:{backgroundImage:"url(".concat(s||"/img/patrn.svg",")")},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8 col-lg-9",children:(0,t.jsx)("div",{className:"content sm-mb30",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h6",{className:"wow words chars splitting","data-splitting":!0,children:"Let\u2019s Talk"}),(0,t.jsxs)("h2",{className:"wow words chars splitting","data-splitting":!0,children:["about your ",(0,t.jsx)("br",{})," ",(0,t.jsx)("b",{className:"back-color",children:"next project"}),"."]})]})})}),(0,t.jsx)("div",{className:"col-md-4 col-lg-3 valign",children:(0,t.jsx)(n.default,{href:"/contact/contact-dark",children:(0,t.jsx)("a",{className:"butn bord curve wow fadeInUp","data-wow-delay":".5s",children:(0,t.jsx)("span",{children:"Get In Touch"})})})})]})})})}},19818:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var i=a(77625),n=a(67294),t=a(41664),c=JSON.parse('[{"id":1,"title":"Original Solutions","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/02.jpg"},{"id":2,"title":"Digital Design Awards","content":"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.","image":"/img/slid/03.jpg"},{"id":3,"title":"Business value through digital products","content":"","image":"/img/slid/01.jpg"}]'),r=a(72873),l=a(88116),o=(a(53481),a(9320),a(30687),a(38037)),d=a(32979),h=a(85893);l.ZP.use([l.W_,l.tl,l.VS]);var m=function(e){var s=e.sliderRef,a=n.useState(!0),l=(0,i.Z)(a,2),m=l[0],u=l[1];n.useEffect((function(){(0,d.Z)(document.querySelectorAll(".fixed-slider .caption")),setTimeout((function(){(0,o.Z)(),u(!1)}),1e3)}),[]);var f=n.useRef(null),p=n.useRef(null),x=n.useRef(null);return(0,h.jsx)("header",{ref:s,className:"slider slider-prlx fixed-slider text-center",children:(0,h.jsxs)("div",{className:"swiper-container parallax-slider",children:[m?null:(0,h.jsx)(r.t,{speed:1e3,parallax:!0,navigation:{prevEl:f.current,nextEl:p.current},pagination:{type:"fraction",clickable:!0,el:x.current},onBeforeInit:function(e){e.params.navigation.prevEl=f.current,e.params.navigation.nextEl=p.current,e.params.pagination.el=x.current},onSwiper:function(e){setTimeout((function(){for(var s=0;s<e.slides.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=f.current,e.params.navigation.nextEl=p.current,e.params.pagination.el=x.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:c.map((function(e){return(0,h.jsx)(r.o,{className:"swiper-slide",children:(0,h.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"6",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row justify-content-center",children:(0,h.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,h.jsxs)("div",{className:"caption center mt-30",children:[(0,h.jsx)("h1",{className:"color-font",children:e.title}),(null===e||void 0===e?void 0:e.content)&&(0,h.jsx)("p",{children:e.content}),(0,h.jsx)(t.default,{href:"/about/about-dark",children:(0,h.jsx)("a",{className:"butn bord curve mt-30",children:(0,h.jsx)("span",{children:"Look More"})})})]})})})})})},e.id)}))}),(0,h.jsxs)("div",{className:"setone setwo",children:[(0,h.jsx)("div",{ref:p,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,h.jsx)("i",{className:"fas fa-chevron-right"})}),(0,h.jsx)("div",{ref:f,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,h.jsx)("i",{className:"fas fa-chevron-left"})})]}),(0,h.jsx)("div",{ref:x,className:"swiper-pagination top botm"}),(0,h.jsxs)("div",{className:"social-icon",children:[(0,h.jsx)("a",{href:"#0",children:(0,h.jsx)("i",{className:"fab fa-facebook-f"})}),(0,h.jsx)("a",{href:"#0",children:(0,h.jsx)("i",{className:"fab fa-twitter"})}),(0,h.jsx)("a",{href:"#0",children:(0,h.jsx)("i",{className:"fab fa-behance"})}),(0,h.jsx)("a",{href:"#0",children:(0,h.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})})}},16257:function(e,s,a){"use strict";a.d(s,{Z:function(){return d}});var i=a(67294),n=JSON.parse('[{"id":1,"icon":"pe-7s-smile","content":"People who are commited to their management tasks.","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","content":"Signed projects that have been confirmed complete!","value":"133"},{"id":3,"icon":"pe-7s-medal","content":"International awards and cups for design projects.","value":"46"}]'),t=a(51514),c=a(17857),r=a(33082),l=a.n(r),o=a(85893),d=function(){return i.useEffect((function(){console.clear()})),(0,o.jsx)("section",{className:"number-sec section-padding",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("div",{className:"row justify-content-center",children:(0,o.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,o.jsxs)("div",{className:"sec-head  text-center",children:[(0,o.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"FUN FACTS"}),(0,o.jsx)("h3",{className:"wow color-font",children:"Pleasure in the job puts perfection in the work."})]})})}),(0,o.jsx)("div",{className:"row",children:n.map((function(e){return(0,o.jsx)("div",{className:"col-md-4",children:(0,o.jsxs)("div",{className:"item no-bord sm-mb50",children:[(0,o.jsx)("span",{className:"icon ".concat(e.icon)}),(0,o.jsxs)("h3",{className:"",children:["\xa0",(0,o.jsx)(c.ZP,{redraw:!0,end:e.value,duration:"3",children:function(e){var s=e.countUpRef,a=e.start;return(0,o.jsx)(l(),{onChange:a,delayedCall:!0,children:(0,o.jsx)("span",{className:"count",ref:s})})}})]}),(0,o.jsx)(t.Z,{children:(0,o.jsx)("p",{className:"wow txt words chars splitting","data-splitting":!0,children:e.content})})]})},e.id)}))})]})})}},44780:function(e,s,a){"use strict";a(67294);var i=a(13473),n=a(85893);s.Z=function(e){var s=e.serviceMB50;return(0,n.jsx)("section",{className:"services box section-padding",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,n.jsxs)("div",{className:"sec-head  text-center",children:[(0,n.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Best Features"}),(0,n.jsx)("h3",{className:"wow color-font",children:"We are a new digital product development agency"})]})})}),(0,n.jsx)("div",{className:"row",children:i.slice(0,3).map((function(e,a){return(0,n.jsx)("div",{className:"col-lg-4 wow fadeInLeft","data-wow-delay":0==a?".5s":1==a?".7s":".9s",children:(0,n.jsxs)("div",{className:"item-box no-curve ".concat(s&&a+1!=i.length-1?"mb-50":""),children:[(0,n.jsx)("span",{className:"icon color-font ".concat(e.icon)}),(0,n.jsx)("h6",{children:e.title}),(0,n.jsx)("p",{children:e.content})]})},e.id)}))})]})})}},51514:function(e,s,a){"use strict";var i=a(15671),n=a(43144),t=a(97326),c=a(32531),r=a(20245),l=a(61120),o=a(4942),d=a(67294),h=a(85893);function m(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,l.Z)(e);if(s){var n=(0,l.Z)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,r.Z)(this,a)}}var u=function(e){(0,c.Z)(a,e);var s=m(a);function a(){var e;(0,i.Z)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return e=s.call.apply(s,[this].concat(c)),(0,o.Z)((0,t.Z)(e),"target",d.createRef()),(0,o.Z)((0,t.Z)(e),"split",(function(){e.target.current&&Splitting({target:e.target.current})})),(0,o.Z)((0,t.Z)(e),"componentDidMount",e.split),(0,o.Z)((0,t.Z)(e),"componentDidUpdate",e.split),e}return(0,n.Z)(a,[{key:"render",value:function(){return(0,h.jsx)("div",{ref:this.target,children:this.props.children})}}]),a}(d.Component);s.Z=u},44700:function(e,s,a){"use strict";var i=a(67294),n=a(41664),t=a(5032),c=a(85893);s.Z=function(){return i.useEffect((function(){setTimeout((function(){(0,t.Z)()}),1e3)}),[]),(0,c.jsx)("section",{className:"portfolio-cr section-padding pb-50",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"filtering text-center col-12",children:(0,c.jsxs)("div",{className:"filter",children:[(0,c.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,c.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,c.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,c.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,c.jsxs)("div",{className:"gallery-mons full-width",children:[(0,c.jsxs)("div",{className:"items graphic wow fadeInUp","data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/cr/1.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont flex",children:[(0,c.jsx)("h6",{className:"color-font",children:"Creative Design"}),(0,c.jsx)("span",{children:(0,c.jsx)("a",{href:"#0",children:"Graphic"})})]})]}),(0,c.jsxs)("div",{className:"items web brand wow fadeInUp","data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/cr/2.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont flex",children:[(0,c.jsx)("h6",{className:"color-font",children:"Modern Design"}),(0,c.jsxs)("span",{children:[(0,c.jsx)("a",{href:"#0",children:"Brand"}),", ",(0,c.jsx)("a",{href:"#0",children:"Web"})]})]})]}),(0,c.jsxs)("div",{className:"items width2 brand wow fadeInUp","data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/cr/3.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{className:"color-font",children:"Creative Design"}),(0,c.jsx)("span",{children:(0,c.jsx)("a",{href:"#0",children:"Website"})})]})]}),(0,c.jsxs)("div",{className:"items width2 graphic wow fadeInUp","data-wow-delay":".4s",children:[(0,c.jsx)("div",{className:"item-img",children:(0,c.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,c.jsxs)("a",{className:"imago wow",children:[(0,c.jsx)("img",{src:"/img/portfolio/cr/4.jpg",alt:"image"}),(0,c.jsx)("div",{className:"item-img-overlay"})]})})}),(0,c.jsxs)("div",{className:"cont",children:[(0,c.jsx)("h6",{className:"color-font",children:"Modern Design"}),(0,c.jsx)("span",{children:(0,c.jsx)("a",{href:"#0",children:"Graphic"})})]})]})]})]})})})}},98858:function(e,s,a){"use strict";a(67294);var i=a(41664),n=a(29577),t=a(85893);s.Z=function(){return(0,t.jsx)("section",{className:"blog-list section-padding sub-bg",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"head md-mb50",children:[(0,t.jsx)("h6",{className:"back-color",children:"Get The Latest News"}),(0,t.jsx)("h3",{children:"What Our Trending News."}),(0,t.jsx)("p",{children:"We provide company and finance service for startups and company business."}),(0,t.jsx)(i.default,{href:"/blog/blog-dark",children:(0,t.jsx)("a",{children:(0,t.jsx)("span",{children:"More Blog Posts"})})})]})}),(0,t.jsx)("div",{className:"col-lg-7 offset-lg-1",children:n.slice(0,3).map((function(e,s){return(0,t.jsxs)("div",{className:"item wow fadeInUp","data-wow-delay":".3s",children:[(0,t.jsx)("div",{className:"img valign",children:(0,t.jsx)("img",{src:e.image,alt:""})}),(0,t.jsx)("div",{className:"cont valign",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)(i.default,{href:"/blog/blog-dark",children:(0,t.jsx)("a",{className:"date",children:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{children:e.date.day})," ",e.date.month]})})}),(0,t.jsx)("span",{children:"/"}),(0,t.jsx)(i.default,{href:"/blog/blog-dark",children:(0,t.jsx)("a",{className:"tag",children:(0,t.jsx)("span",{children:e.tags[1]})})})]}),(0,t.jsx)("h5",{children:(0,t.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,t.jsx)("a",{children:e.title})})})]})})]},s)}))})]})})})}},9320:function(){},13473:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"icon":"pe-7s-vector","title":"Product Design","content":"Our skilled team specializes in creating innovative and user-friendly product designs to meet your unique requirements."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Development","content":"With a focus on cutting-edge technologies, we develop responsive and seamless web and mobile applications tailored to your business needs."},{"id":3,"icon":"pe-7s-link","title":"Blockchain Development","content":"Explore the potential of blockchain technology with our experienced developers, ensuring secure and efficient solutions for your projects."},{"id":4,"icon":"pe-7s-display1","title":"AI Model Development & Training","content":"Harness the power of artificial intelligence as we craft and train advanced models to enhance your systems, providing intelligent solutions for your business challenges."}]')}}]);