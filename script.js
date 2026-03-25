 window.addEventListener("load", function(){

  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

});
  
// 🎬 Page Animation
function firstPageAnim(){
  var tl = gsap.timeline();

  tl.from("#nav",{
    y:-50,
    opacity:0,
    duration:1.5,
    ease:"expo.out"
  })

  .to("#heading .bounding h1",{
    y:0,
    duration:1.5,
    stagger:.2,
    ease:"expo.out"
  },"-=1")

  .to("#secondh1 ",{
    y:0,
    duration:1.5,
    ease:"expo.out"
  },"-=1")

  .to(".all h5 ",{
    y:0,
    duration:1.5,
    ease:"expo.out"
  },"-=1")


  .from("#tesriheading h5",{
    y:20,
    opacity:0,
    stagger:.2,
    duration:1,
    ease:"expo.out"
  },"-=1");
}

firstPageAnim();
 
var timeout;
function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
     
    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();
 

 

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

document.querySelectorAll(".elements").forEach(function(elements){
  var rotate = 0;
  var diffrot = 0;

  elements.addEventListener("mouseleave",function(dets){
  var diff = dets.clientY - elements.getBoundingClientRect().top;
  diffrot = rotate - dets.clientX ;
  rotate = dets.clientX;

 gsap.to(elements.querySelector("img"),{
  opacity:0,
  ease: "power3.out",

 })

 });



 elements.addEventListener("mousemove",function(dets){
  var diff = dets.clientY - elements.getBoundingClientRect().top;
  diffrot = rotate - dets.clientX ;
  rotate = dets.clientX;

 gsap.to(elements.querySelector("img"),{
  opacity:1,
  ease: "power1.out",
  top:diff,
  left:dets.clientX,
  rotate:gsap.utils.clamp(-20,20,diffrot*.3),

 })

 });

});
