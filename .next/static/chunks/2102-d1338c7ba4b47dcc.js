(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2102],{7942:function(e,a,n){"use strict";var t=n(63038);a.default=void 0;var s,i=(s=n(67294))&&s.__esModule?s:{default:s},l=n(64957),r=n(69898),o=n(90639);var c={};function d(e,a,n,t){if(e&&l.isLocalURL(a)){e.prefetch(a,n,t).catch((function(e){0}));var s=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[a+"%"+n+(s?"%"+s:"")]=!0}}var h=function(e){var a,n=!1!==e.prefetch,s=r.useRouter(),h=i.default.useMemo((function(){var a=l.resolveHref(s,e.href,!0),n=t(a,2),i=n[0],r=n[1];return{href:i,as:e.as?l.resolveHref(s,e.as):r||i}}),[s,e.href,e.as]),u=h.href,m=h.as,g=e.children,p=e.replace,f=e.shallow,v=e.scroll,x=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var j=(a=i.default.Children.only(g))&&"object"===typeof a&&a.ref,b=o.useIntersection({rootMargin:"200px"}),N=t(b,2),y=N[0],w=N[1],k=i.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);i.default.useEffect((function(){var e=w&&n&&l.isLocalURL(u),a="undefined"!==typeof x?x:s&&s.locale,t=c[u+"%"+m+(a?"%"+a:"")];e&&!t&&d(s,u,m,{locale:a})}),[m,u,w,x,n,s]);var C={ref:k,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,n,t,s,i,r,o){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==r&&t.indexOf("#")>=0&&(r=!1),a[s?"replace":"push"](n,t,{shallow:i,locale:o,scroll:r}))}(e,s,u,m,p,f,v,x)},onMouseEnter:function(e){l.isLocalURL(u)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(s,u,m,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var E="undefined"!==typeof x?x:s&&s.locale,L=s&&s.isLocaleDomain&&l.getDomainLocale(m,E,s&&s.locales,s&&s.domainLocales);C.href=L||l.addBasePath(l.addLocale(m,E,s&&s.defaultLocale))}return i.default.cloneElement(a,C)};a.default=h},90639:function(e,a,n){"use strict";var t=n(63038);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,n=e.disabled||!l,o=s.useRef(),c=s.useState(!1),d=t(c,2),h=d[0],u=d[1],m=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||h||e&&e.tagName&&(o.current=function(e,a,n){var t=function(e){var a=e.rootMargin||"",n=r.get(a);if(n)return n;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var a=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;a&&n&&a(n)}))}),e);return r.set(a,n={id:a,observer:s,elements:t}),n}(n),s=t.id,i=t.observer,l=t.elements;return l.set(e,a),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),r.delete(s))}}(e,(function(e){return e&&u(e)}),{rootMargin:a}))}),[n,a,h]);return s.useEffect((function(){if(!l&&!h){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),[m,h]};var s=n(67294),i=n(26286),l="undefined"!==typeof IntersectionObserver;var r=new Map},57420:function(e,a){"use strict";a.Z=function(e){var a=[];if(!e.parentNode)return a;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&a.push(n),n=n.nextSibling;return a}},81108:function(e,a,n){"use strict";n.d(a,{z:function(){return s},_:function(){return i}});var t=n(57420),s=function(e){(0,t.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},i=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,a,n){"use strict";n(67294);var t=n(41664),s=n(82806),i=n(29577),l=n(85893);a.Z=function(e){var a=e.hideBGCOLOR;return(0,l.jsx)("footer",{className:"".concat(a?"":"sub-bg"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Contact Us"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Officeal Address"}),(0,l.jsx)("p",{children:"504 White St . Dawsonville, GA 30534 , New York"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Email Us"}),(0,l.jsx)("p",{children:"support@gmail.com"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-call"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Call Us"}),(0,l.jsx)("p",{children:"+87986451666"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"Recent News"})}),(0,l.jsxs)("ul",{children:[i.slice(0,2).map((function(e,a){return(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:e.image,alt:"blog ".concat(e.id)})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(t.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:e.title})})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsxs)("span",{className:"date",children:[e.date.day," ",e.date.month," ",e.date.year," "]})})})})]})]},e.id)})),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"subscribe",children:[(0,l.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,l.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:s.E8,alt:""})}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})]}),(0,l.jsx)("div",{className:"copy-right",children:(0,l.jsxs)("p",{children:["\xa9 2022, Vie Template. Made with passion by",(0,l.jsx)(t.default,{href:"https://themeforest.net/user/themescamp/portfolio",children:(0,l.jsx)("a",{target:"_blank",children:"ThemesCamp"})}),"."]})})]})})]})})})}},30015:function(e,a,n){"use strict";n(67294);var t=n(41664),s=n(82806),i=n(81108),l=n(85893);a.Z=function(e){var a=e.lr,n=e.nr,r=e.theme;return(0,l.jsx)("nav",{ref:n,className:"navbar navbar-expand-lg change ".concat("themeL"===r?"light":""),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(t.default,{href:"/",children:(0,l.jsx)("a",{className:"logo",children:r&&"themeL"===r?(0,l.jsx)("img",{ref:a,src:s.Q1,alt:"logo"}):(0,l.jsx)("img",{ref:a,src:s.E8,alt:"logo"})})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button",onClick:i._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"icon-bar",children:(0,l.jsx)("i",{className:"fas fa-bars"})})}),(0,l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.default,{href:"/",children:(0,l.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.default,{href:"/about/about-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"About"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.default,{href:"/works2/works2-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"Works"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"Blogs"})})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.default,{href:"/contact/contact-dark",children:(0,l.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},21527:function(e,a,n){"use strict";n(67294);var t=n(85893);a.Z=function(e){var a=e.title,n=e.paragraph,s=e.className;return(0,t.jsx)("section",{className:"page-header ".concat(s&&s),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,t.jsxs)("div",{className:"cont text-center",children:[(0,t.jsx)("h1",{className:"mb-10 color-font",children:a}),(0,t.jsx)("p",{children:n})]})})})})})}},41664:function(e,a,n){e.exports=n(7942)},29577:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"title":"The Rise of Quantum Computing: Unlocking the Future of Technology","content":"In this blog post, we delve into the fascinating world of quantum computing and explore how it is poised to revolutionize the field of technology. As traditional computers struggle to keep up with the increasing demands of complex calculations, quantum computers offer a promising solution by harnessing the principles of quantum mechanics. From unprecedented processing speeds to solving complex problems currently deemed unsolvable, quantum computing holds the key to unlocking new possibilities in areas such as cryptography, optimization, and artificial intelligence. Join us on a journey through the quantum realm and discover how this emerging technology is shaping the future of computing.","image":"/img/blog/b1.jpg","tags":["Technology","Quantum computing","Mechanics"],"date":{"day":"07","month":"March","year":"2024"},"images":{"img1":"/img/blog/b1.jpg","img2":"/img/blog/b11.jpg"},"author":{"name":"Andrew Mark","image":"/img/blog/a1.jpg"}},{"id":2,"title":"The Evolution of Artificial Intelligence: From Machine Learning to Neural Networks","content":"Artificial Intelligence (AI) has come a long way since its inception, and this blog post takes you on a chronological tour of its evolution. We start with the early days of rule-based systems and expert systems, progressing to the advent of machine learning and its various algorithms. The spotlight then shifts to the transformative impact of neural networks, exploring their role in powering deep learning models and their applications in image recognition, natural language processing, and more. As AI continues to advance, we\'ll explore the challenges, ethical considerations, and the potential future developments that await us in the ever-evolving landscape of artificial intelligence.","image":"/img/blog/b2.jpg","tags":["Artificial Intelligence","Comupter Visoining","Evolution"],"date":{"day":"28","month":"February","year":"2024"},"images":{"img1":"/img/blog/b22.jpg","img2":"/img/blog/b2.jpg"},"author":{"name":"Tracy Jane","image":"/img/blog/a2.jpg"}},{"id":3,"title":"Blockchain Beyond Cryptocurrency: Exploring Decentralized Applications","content":"Blockchain technology has transcended its origins in cryptocurrency, and this blog post sheds light on its broader applications, specifically focusing on decentralized applications (DApps). We\'ll unravel the fundamental principles behind blockchain, highlighting its decentralized and secure nature. Diving into real-world examples, we\'ll showcase how DApps are disrupting industries such as finance, healthcare, and supply chain management. From smart contracts to decentralized autonomous organizations (DAOs), discover how blockchain is reshaping the way we interact with technology and challenging traditional centralized systems. Join us as we explore the decentralized future that blockchain and DApps promise to bring to the forefront of technological innovation","image":"/img/blog/b33.jpg","tags":["Blockchain","Cryptocurrency","DApps"],"date":{"day":"11","month":"January","year":"2024"},"images":{"img1":"/img/blog/b33.jpg","img2":"/img/blog/b3.jpg"},"author":{"name":"Joshua Nelson","image":"/img/blog/a3.jpg"}}]')}}]);