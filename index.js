let play = document.querySelector(".play");
let videoContainer = document.querySelector(".videocontainer");

videoContainer.addEventListener("mouseenter", () => {
  gsap.to(play, {
    scale: 1,
    opacity: 1,
  });

});
videoContainer.addEventListener("mouseleave", () => {
    gsap.to(play, {
      scale: 0,
      opacity: 0,
    });
    
  });
  videoContainer.addEventListener("mouseover", (dets) => {
    gsap.to(play, {
      left:dets.x,
      top:dets.y,
    });
    
  });
