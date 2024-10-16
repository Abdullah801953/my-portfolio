const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-toggler");
});
const link = document.querySelectorAll(".desktop-nav ul li a");
link.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.toggle("active");
  });
  link.addEventListener("mouseout", () => {
    link.classList.toggle("active");
  });
});
const tl = gsap.timeline();
tl.from(".greet", {
  y: 200,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".name", {
  y: 300,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".position", {
  y: 400,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".download-btn", {
  scale: 0,
});
tl.from(".contact-btn", {
  scale: 0,
});
tl.from(".linked-in-btn", {
  scale: 0,
});
tl.from(".github-btn", {
  scale: 0,
});

