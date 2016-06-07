(function(){
  "use strict"; 

  console.log('is working!');

  const gallery = document.getElementById('js-galleria-1-2');
  //const gallery2 = document.getElementById('js-galleria-2-2');
  //const clickableEls = gallery.querySelectorAll('.galleriesItem__figure');

  function makeUrl(folder, data, dataType) {
    return folder + data + '.' + dataType;
  }

// event listener pre modal

  //clickEls: that.galleryId.querySelectorAll('.galleriesItem__figure')


//2. attach eventLIsteners
// 2.a) solution == klikatelny bude cely element .galleriesItem__figure

  const imgHandler2 = function(event){
    let eTarget = event.currentTarget;
    let data = eTarget.dataset.url;
    let url = makeUrl('../assets/img/indexGalleriesList/', data, 'jpeg');
  };

  /*let length = clickableEls.length
  for(let i = 0; i < length; i++) {
    clickableEls[i].addEventListener('click', showPhoto);
  }*/

// 2.b) solution klikatelny iba "btn-show"
  const imgHandler = function(e){
    let eTarget = e.target,                           //element
        match   = eTarget.matches('.btn-show'),
        data    = eTarget.dataset.url,
        //url     = makeUrl('../assets/img/indexGalleriesList/', data, 'jpeg'),
        dataImg = imgData[data].url;         //testing

      /*if (match) {     //tst variant
        modalShow();
        console.log(data);
      } else {
        console.log('vedla!')
      }*/

      if (!match){
        return;
      }

      imgShow();
  }

  gallery.addEventListener('click', imgHandler, false);
  //gallery2.addEventListener('click', imgHandler, false);

//3. ajax pre modal
//4 zobrazit modal

  const toggleClass = function( el, cls){
    el.classList.toggle(cls);
  };

  const imgShow = function() {
      toggleClass(modal,'modal-is-hidden');
      /*setTimeout(function(){
        toggleClass(modal,'modal-is-visible')
      }, 50);*/
      setTimeout(toggleClass, 50, modal,'modal-is-visible' );

      /*setTimeout(function(){
        toggleClass( image, 'modal-img-in-position' );
      }, 450);*/
      setTimeout(toggleClass, 450, image, 'modal-img-in-position' );

      /*setTimeout(function(){
        toggleClass( figCap, 'modal-is-visible' );
      }, 950);*/
      setTimeout(toggleClass, 950, figCap, 'modal-is-visible');
    };

  const closeModal = function() {
        toggleClass( figCap, 'modal-is-visible' );
      /*setTimeout(function(){
        toggleClass(image, 'modal-img-sliding-out');
      }, 100);*/
      setTimeout(toggleClass, 100, image, 'modal-img-sliding-out');
      /*setTimeout(function(){
        toggleClass(modal,'modal-is-visible');
      }, 650);*/
      setTimeout(toggleClass, 500, modal,'modal-is-visible');
      setTimeout(function(){
        modal.classList.add('modal-is-hidden');
        image.classList.remove('modal-img-sliding-out');
        image.classList.remove('modal-img-in-position');
      }, 1100);
    };

//modal
  const modal = document.getElementById('modal');
  const closeEl = document.getElementById('modal-close');
  const figCap = document.getElementById('figcaption');
  let image = document.querySelector('.modal__image');

// eventHandler
  /*const closeModal = function(){
    modalHide();
  }*/

  closeEl.addEventListener('click', closeModal, false)

//interface

})();//end ready//
