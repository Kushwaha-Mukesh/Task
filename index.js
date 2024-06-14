let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

document.querySelector(".next").addEventListener("click", () => {
  moveToSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  moveToSlide(currentIndex - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    moveToSlide(index);
  });
});

function moveToSlide(index) {
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  document.querySelector(".carousel-slide").style.transform = `translateX(${
    -index * 100
  }%)`;
  currentIndex = index;
  updateDots();
}

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

moveToSlide(0);

// for nav menu section

document.querySelector(".nav-menu").addEventListener("click", () => {
  document.querySelector("#nav-menu-section").style.display = "block";
});

document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector("#nav-menu-section").style.display = "none";
});

document
  .querySelector(".nav-menu-section-about-us")
  .addEventListener("click", () => {
    const aboutUsList = document.querySelector(".nav-menu-about-us-list");
    let style = window.getComputedStyle(aboutUsList);
    let display = style.display;
    document.querySelector(".nav-menu-about-us-list").style.display =
      display === "none" ? "block" : "none";
  });
