!function(){"use strict";function e(e,t){setTimeout(function(){items[e].classList.add(t)},700*Math.exp(.15*e)-700)}function t(e,t,n){function o(e,t){setTimeout(function(){r[e].classList.add(t)},700*Math.exp(.15*e)-700)}for(var r=e.querySelectorAll(t),s=0;s<r.length;++s)o(s,n)}function n(t,n,o){for(var r=t.querySelectorAll(n),s=0;s<r.length;++s)e(s,o)}const o=document.querySelector(".nav__searchForm"),r=function(e){var t=e.currentTarget.classList.contains("nav-search-is-ready");t?e.currentTarget.classList.remove("nav-search-is-ready"):e.currentTarget.classList.add("nav-search-is-ready")};o.addEventListener("click",r,!1);const s=document.getElementById("news__container"),i=s.offsetTop,c=document.getElementById("photoGalleries"),a=c.offsetTop,l=window.innerHeight;window.addEventListener("scroll",function(){var e=window.scrollY,o=e>=i/1.9,r=e>=a-l/2;console.log(r),o&&t(s,".itemContainer","border-is-visible"),r&&n(c,".galleriesItem__container","galleriesItem-in-position")})}();