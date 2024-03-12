const navBtn = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navBtn.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navBtn.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Swiper */
let swiperFav = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*show Scroll  */

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHight = current.offsetHeight,
      sectionTop = current.offsetHeight - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2400,
  delay: 400,
});
sr.reveal(`.home__social`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: "left", opacity: 1 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: "right", opacity: 1 });
sr.reveal(`.home__tooltip .home__button`, { origin: "bottom" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__img, .model__tooltip`, { origin: "right" });
