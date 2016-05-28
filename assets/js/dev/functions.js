(function(){
  "use strict";

// nav search

const navSearchForm = document.querySelector('.nav__searchForm');

const searchFormReady = function (event) {

  var status = event.currentTarget.classList.contains('nav-search-is-ready');

  if (status) {
    event.currentTarget.classList.remove('nav-search-is-ready');
  } else {
    event.currentTarget.classList.add('nav-search-is-ready');
  }
};

navSearchForm.addEventListener("click", searchFormReady, false);

//window scroll functionality

function addColorBorder(el, el2, cls){

  var items = el.querySelectorAll(el2)

  function add(item, cls){
     setTimeout(function () {
       items[item].classList.add(cls);
     }, (700 * (Math.exp(i * 0.15)) -700));
   }

  for (var i = 0; i < items.length; ++i) {
    add(i, cls);
  }
  /*for (var item of items) {
    function add(item){
       setTimeout(function(){
         item.classList.add('border-is-visible');
       }, (700 * (Math.exp(i * 0.15)) -700));
     }
  }*/
}

//const news          = document.getElementById('news__container');
const outer          = document.getElementById('outer__container');
const main           = document.querySelector('main');
//const sidebar        = document.getElementById('sidebar__content');
// const newsOffset    = news.offsetTop;
const outerOffset    = outer.offsetTop;
//const mainOffset     = main.offsetTop;

window.addEventListener('scroll', function() {

  var wScroll  = window.scrollY;
  // var status  = wScroll >= newsOffset / 1.9
  var status2  = wScroll >= outerOffset / 1.9;
  //var status3  = wScroll >= mainOffset;
  // console.log(status2);
  //console.log(outerOffset);

/*  if(status) {
    addColorBorder(news, '.news__itemContainer');
  }*/
  if (status2) {
    addColorBorder(outer, '.itemContainer', 'border-is-visible');
  }

  /*if(status3) {
    sidebar.classList.add('sidebar-is-static')
  } else {
    sidebar.classList.remove('sidebar-is-static')
  }*/

});






})();//end ready//
