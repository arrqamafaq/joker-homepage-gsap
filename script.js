//locomotive
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



/*nav-bar animation*/
const timeline = gsap.timeline();
timeline.from(".nav h3", {
  y: -60,
  delay: 0.6,
  duration: 0.8,
  opacity: 0,
  fontWeight: 100,
  stagger: 0.2,
});

/*center text animation*/
timeline.from(".text h1", {
  x: (index) => (index % 2 === 0 ? "-100%" : "100%"),
  duration: 0.5,
  opacity: 0,
  fontWeight: 100,
  stagger: 0.3,
});
/*showcase images animation*/
timeline.from("#showcase img", {
  y: (index) => (index % 2 === 0 ? "-100%" : "100%"),
  duration: 0.5,
  opacity: 0,
  rotate: 0,
  duration: 0.5,
  stagger: 0.3,
});
timeline.from("#showcase .scrollMessage", {
  x:-100 ,
  duration: 1,
  opacity: 0,
  delay:2,
});

gsap.from("#page1 img", {
  x: (index) => (index === 0 ? "-170%" : "170%"),
  opacity: 0.7,

  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 10%",
    end: "bottom top",
    scrub: 1.8,
    pin: true,
  },
});
gsap.to("#jockerText h1", {
  transform: "translateX(-90%)",
  opacity: 1,
  duration:2,
  scrollTrigger: {
    trigger: "#jockerText",
    scroller: "#main",
    start: "top 20%",
    end: "bottom top",
    scrub: 1.8,
    pin: true,
  },
});

// gsap.from("#gallery img", {
//   opacity: 0.5,
//   x: "-120%",
//   duration:3,
//   stagger: 2,
//   scrollTrigger: {
//     trigger: "#gallery",
//     scroller: "#main",
//     start: "top 30%",
//     markers:true,
//     end: "bottom top",
//     scrub: 2,
//   },
// });

// Gallery images animation - Updated to handle all images properly
const galleryImages = document.querySelectorAll("#gallery img");

galleryImages.forEach((img, index) => {
    gsap.from(img, {
        opacity: 0,
        x: "-120%",
        scrollTrigger: {
            trigger: img,
            scroller: "#main",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            // markers: true, // Comment out in production
            toggleActions: "play none none reverse"
        }
    });
});