/*nav-bar animation*/
const timeline = gsap.timeline();
timeline.from(".nav h3",{
    y:-60,
    delay:.6,
    duration:.8,
    opacity:0,
    fontWeight:100,
    stagger:.2,
});

/*center text animation*/
timeline.from(".text h1",{
    x:(index) => (index%2 === 0) ? "-100%" : "100%",
    duration:.5,
    opacity:0,
    fontWeight:100,
    stagger:.3,
});
/*showcase images animation*/
timeline.from("#showcase img",{
    y:(index) => (index%2 === 0) ? "-100%" : "100%",
    duration:.5,
    opacity:0,
    rotate:0,
    duration:.5,
    stagger:.3,
});

gsap.from("#page1 img", {
    x:(index) => (index === 0) ? "-170%" : "170%",
    opacity:0.7,

    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        start:"top 10%",
        end:"bottom top",
        scrub:1.8,
        pin:true,
    }
})
gsap.to("#jockerText h1", {
   transform:"translateX(-60%)",
    opacity:0.7,

    scrollTrigger:{
        trigger:"#jockerText",
        scroller:"body",
        start:"top 10%",
        end:"bottom top",
        scrub:1.8,
        pin:true,
    }
})

gsap.from("#gallery img", {
    opacity:0.7,
    x:"-120%",
    // duration:3,
    stagger:.3,
    scrollTrigger:{
        trigger:"#gallery",
        scroller:"body",
        start:"top 10%",
        end:"bottom top",
        scrub:1.5,
    }
})