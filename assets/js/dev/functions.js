//document.addEventListener("DOMContentLoaded", function() {}, false)
(function(){
  "use strict";

// nav search

const navSearchForm = document.querySelector('.nav__searchForm');

const searchFormReady = function(){

  var status = this.classList.contains('nav-search-is-ready');

  if(status) {
    this.classList.remove('nav-search-is-ready');
  } else {
    this.classList.add('nav-search-is-ready');
  }
}

navSearchForm.addEventListener("click", searchFormReady, false);

//window scroll functionality

const news = document.getElementById('news__container');
const newsOffset    = news.offsetTop;

window.addEventListener('scroll', function() {

  var wScroll  = window.scrollY;
  var status  = wScroll >= newsOffset / 1.9
  if(status) {
    addColorBorder();
  }
});

function addColorBorder(){

  var items = news.querySelectorAll('.news__itemContainer')

  /*function add(i){
     setTimeout(function(){
       items[i].classList.add('border-is-visible');
     }, (700 * (Math.exp(i * 0.15)) -700));
   }

  for (var i = 0; i < items.length; ++i) {
    add(i);
  }*/
  for (var item of items) {
    function add(item){
       setTimeout(function(){
         item.classList.add('border-is-visible');
       }, (700 * (Math.exp(i * 0.15)) -700));
     }
  }
}




})();//end ready//
