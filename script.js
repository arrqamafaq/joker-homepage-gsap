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
timeline.from(".text #one",{
    x:"-100%",
    duration:.5,
    opacity:0,
    fontWeight:100,
});
timeline.from(".text #two",{
    x:"100%",
    duration:.5,
    opacity:0,
    fontWeight:100,
});
timeline.from(".text #three",{
    x:"-100%",
    duration:.5,
    opacity:0,
    fontWeight:100,
});
timeline.from("#showcase img#even",{
    x:"-100vw",
    duration:.5,
    opacity:0,
    rotate:360,
    duration:.4,
    stagger:.4,
});
timeline.from("#showcase img#odd",{
    x:"100vw",
    duration:.5,
    opacity:0,
    rotate:360,
    duration:.4,
    stagger:.4,
});
timeline.from("#showcase img#top",{
    x:"-100vw",
    duration:.5,
    opacity:0,
    rotate:360,
    duration:.4,
});