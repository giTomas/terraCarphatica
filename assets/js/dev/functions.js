$(function() {

$('.nav__searchForm').on('click', function(){
  var $this = $(this),
      status = $this.hasClass('nav-search-is-ready');

  if(status) {
    $this.removeClass('nav-search-is-ready')
  } else {
    $this.addClass('nav-search-is-ready')
  }


})

}); //end ready
