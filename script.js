// Get the slider, slides and nav buttons.
const slider = document.getElementsByClassName("main__work--slider")[0];
const slides = document.getElementsByClassName("main__work--slider-slide");
const prevButton = document.getElementsByClassName(
  "main__work--left-button"
)[0];
const nextButton = document.getElementsByClassName(
  "main__work--right-button"
)[0];

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");
// Save initial mediaQuery match at launch.
let initialMediaQuery = mediaQuery.matches;

// Set center slide as default slide.
let currentSlide = 2;

// Function that will move the slider in the X axis.
function moveSlider(currentSlide) {
  // If mediaQuery is at least 768px wide.
  if (mediaQuery.matches) {
    switch (currentSlide) {
      case 0:
        slider.style.transform = "translateX(1130px)";
        break;
      case 1:
        slider.style.transform = "translateX(565px)";
        break;
      case 2:
        slider.style.transform = "translateX(0)";
        break;
      case 3:
        slider.style.transform = "translateX(-565px)";
        break;
      case 4:
        slider.style.transform = "translateX(-1130px)";
        break;
    }
  } else {
    switch (currentSlide) {
      case 0:
        slider.style.transform = "translateX(574px)";
        break;
      case 1:
        slider.style.transform = "translateX(287px)";
        break;
      case 2:
        slider.style.transform = "translateX(0)";
        break;
      case 3:
        slider.style.transform = "translateX(-287px)";
        break;
      case 4:
        slider.style.transform = "translateX(-574px)";
        break;
    }
  }
}

// Function that will keep track of the slide number.
function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }

  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  currentSlide = moveTo;
  moveSlider(currentSlide);
}

// Event listeners for each navigation button.
// Previous navigation button.
prevButton.addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

// Next navigation button.
nextButton.addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

// If the window resizes, make the slider move to the
// correct position using the moveSlider function
// and comparing it to the initialMediaQuery.
window.addEventListener("resize", () => {
  if (initialMediaQuery !== mediaQuery.matches) {
    moveSlider(currentSlide);
    initialMediaQuery = mediaQuery.matches;
  }
});
