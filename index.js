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
