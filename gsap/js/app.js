
gsap.to(".img" , {
  scrollTrigger:{
    trigger: "#page1",
    start: 'top top',
    end:"bottom top",
    // markers:true,
    pin:"#page1",
    scrub:4,
    endTrigger:".last"
  },
  y:-3000
})

