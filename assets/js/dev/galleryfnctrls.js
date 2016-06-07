console.log('ctrls are working');
////
//// nodelists
/// ->ctrls


const close = document.querySelectorAll('.js-close');
const left = document.querySelectorAll('.js-left');
const right = document.querySelectorAll('.js-right');

/// ->imgs

const imgs = document.querySelectorAll('.js-imgs');

/// -> current image


const closeFn = function(e){
    animOpacity(modal2, linear, 1000, 0.01);
    //modal2.style.removeProperty("opacity");

    for (let i = 0; i < imgs.length; i ++) {
    imgs[i].style.removeProperty("opacity");
    imgs[i].style.removeProperty("display");
  }
    setTimeout(function(){
      modal2.style.display = "";
    }, 200);
};
/*
for (let i = 0; i < left.length; i++) {

  left[i].addEventListener('click', function(e){
    let eTarget = e.currentTarget;
    imgs[0].style.removeProperty("opacity");
    imgs[0].style.removeProperty("display");
    imgs[1].style.display = "block";
    animOpacity(imgs[1], circEaseInOut, 1000, 1);
  })

  close[i].addEventListener('click', closeFn, false);
  right[i].addEventListener('click', function(e){
    let eTarget = e.currentTarget;
    imgs[0].style.removeProperty("opacity");
    imgs[0].style.removeProperty("display");
    imgs[2].style.display = "block";
    animOpacity(imgs[2], circEaseInOut, 1000, 1);

  });

}*/

let currentImg = 1;
////////////
/// ctrls
////

const nextImg = function() {
  goToImg(currentImg+1)
};

function previousImg() {
  goToImg(currentImg-1)
}

function fadeOutImg(){
  imgs[currentImg].style.opacity = "";
  imgs[currentImg].style.display = "";
}

function addNextImg(){
  imgs[currentImg].style.display = "block";
  animOpacity(imgs[currentImg], circEaseInOut, 1000, 1);
}

function goToImg(n) {
    fadeOutImg();
    currentImg = (n+imgs.length)%imgs.length;
    addNextImg();
    console.log(currentImg);
    if  (currentImg === 2) {
      console.log('we need more');
      let next = imgData[currentImg + 1].url;
      console.log(next);
    } else if ( currentImg === 0 ) {
      console.log('we need more');
    }
}


//////////////////////
//attach eventHandlers
//
for (let i = 0; i < left.length; i++) {

  close[i].addEventListener('click', closeFn, false);
  right[i].addEventListener('click', nextImg, false);
  left[i].addEventListener('click', previousImg, false);

}
