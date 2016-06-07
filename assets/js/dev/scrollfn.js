(function(){
  "use strict";

//window scroll fns
/////////////////////////////

function addClass(item, items, cls, timing){
   setTimeout(function () {
     items[item].classList.add(cls);
   }, timing);
 }

function removeClass(item, items, cls, timing){
   setTimeout(function () {
     items[item].classList.remove(cls);
   }, timing);
 }

const getTiming = function(item){
   return item * 200 - 1;
  //  let time = item * 200
  //  console.log(time);
  //  return time;
};

function addElements(el, el2, cls, fn){
  let items  = el.querySelectorAll(el2),
      lenght = items.length;


  for ( let i = 0; i < lenght; i++ ) {
    let timing = getTiming(i);
    fn(i, items, cls, timing);
  }
}


// variables

//const inner          = document.getElementById('inner__container2');
//const sidebar        = document.getElementById('sidebar__content');
//const sidebarOffset = sidebar.offsetTop;
const news                 = document.getElementById('js-news');
const newsOffset           = news.offsetTop;
const photoGalleries       = document.getElementById('js-galleries');
const photoGalleriesOffset = photoGalleries.offsetTop;
const members              = document.getElementById('members');
const membersOffset        = members.offsetTop;
const intViewportHeight    = window.innerHeight;

window.addEventListener('scroll', function() {
  let wScroll             = window.scrollY,
      //statusNews          = wScroll >= newsOffset / 1.9,
      //newsUnderline       = news.querySelector('.js-underline'),
      //newsHaveClass       = newsUnderline.classList.contains('border-is-visible'),
      statusGall          = wScroll >= photoGalleriesOffset - intViewportHeight / 1.9,
      gallsHaveClass      = photoGalleries.querySelector('.js-sliding').classList.contains('galleriesItem-in-position'),
      statusMembers       = wScroll >= membersOffset - intViewportHeight / 1.9,
      membersHaveNotClass = !members.querySelector('.members__item').classList.contains('member-is-visible');
  //var status3  = wScroll >= sidebarOffset;
  //var sidebarStatus = sidebar.classList.contains('sidebar-is-fixed');
  /*if (statusNews && newsHaveNotClass) {
    addElements(news, '.itemContainer', 'border-is-visible');
    }

  if (statusGall && gallsHaveNotClass) {
    addElements(photoGalleries, '.galleriesItem__container', 'galleriesItem-in-position');
    }

  if (statusMembers && membersHaveNotClass) {
    addElements(members, '.members__item', 'member-is-visible');
  }*/

  switch (true) {
    /*case statusNews && newsHaveClass:
      addElements(news, '.js-underline', 'border-is-visible', removeClass);
      break;*/
    case statusGall && gallsHaveClass:
      addElements(photoGalleries, '.js-sliding', 'galleriesItem-in-position', removeClass);
      break;
    case statusMembers && membersHaveNotClass:
      addElements(members, '.members__item', 'member-is-visible', addClass);
      break;
    //default:
  }

});

})();//end
