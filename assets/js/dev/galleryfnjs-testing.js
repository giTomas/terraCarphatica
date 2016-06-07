//(function(){
  "use strict";

  console.log('testing is working!');

  //const gallery = document.getElementById('js-galleria-1-2');
  const gallery2 = document.getElementById('js-gallery-2-2');
  const modal2   = document.getElementById('js-modal-2');
  //const clickTargets = gallery2.querySelectorAll('.galleriesItem__figure');

//
//anim core fn
//

function animate(opts) {
  var start = new Date;
  var id = setInterval(function(){
    var timePassed = new Date - start;
    var progress = timePassed / opts.duration;

    if (progress > 1) {
      progress = 1;
    }
    var delta = opts.delta(progress);
    opts.step(delta);
    if (progress == 1){
      clearInterval(id);

    }
  }, opts.delay || 10)
}

//
// fn of progress DELTA
//

function linear(progress) {
  return progress;
}

function quad(progress){
  return Math.pow(progress, 5);
}

function circ(progress) {
  return 1 - Math.sin(Math.acos(progress));
}

function back(progress){                                            //bow
  return Math.pow(progress, 2) * ((1.5 + 1) * progress - 1.5);
}

//
// EASE-OUT
//

function makeEaseOut(delta) {
  return function(progress) {
    return 1 - delta(1 - progress)
  }
}

const circEaseOut = makeEaseOut(circ);

//
// EASE-IN-OUT
//

function makeEaseInOut(delta) {
  return function(progress) {
    if (progress < 0.5) {
      return delta(2*progress) / 2;
    } else {
      return (2 - delta(2*(1-progress))) / 2
    }
  }
}

const circEaseInOut = makeEaseInOut(circ);

//
// animations
//

function animOpacity(elem, delta, duration, to){
  var to = to;
  animate({
    delay: 15,
    duration: duration || 1000,
    delta: delta,
    step: function(delta) {
      elem.style.opacity = to*delta;
    }
  })
}

gallery2.addEventListener('click', function(e){
  let eTarget = e.target;
  let match   = eTarget.matches('.btn-show');
    if (match) {
      modal2.style.display = "flex";
      imgs[1].style.display = "block";
      animOpacity(modal2, circEaseInOut, 500, 1);

      setTimeout( function(){
        animOpacity(imgs[1], circEaseInOut, 1000, 1)
      }, 250)
    }
})



  //document.querySelectorAll('.js-close')[1].addEventListener('click', closeFn)

  //slider controls





//})();//end ready//
