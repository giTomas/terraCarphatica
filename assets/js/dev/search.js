(function(){
  "use strict";
// nav search

const navSearchForm   = document.querySelector('.js-fix-search ');

const searchFormReady = function (event) {
  let status = event.currentTarget.classList.contains('nav-search-is-ready');
  if (status) {
    event.currentTarget.classList.remove('nav-search-is-ready');
  } else {
    event.currentTarget.classList.add('nav-search-is-ready');
  }
};

navSearchForm.addEventListener("click", searchFormReady, false);

})(); //end iffy
