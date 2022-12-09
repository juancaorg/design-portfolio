# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./design/screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/juancaorg/design-portfolio-sp)
- Live Site URL: [designportfolio.juanca.dev](https://designportfolio.juanca.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

It's been a while since I used CSS Grid, but I can't stress enough how good is [Kevin Powell](https://www.kevinpowell.co) on getting you up to speed.

To re-learn and build the Grid for this project I watched a little bit of Kevin Powell's video [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU).

And I got the logic for the Image Slider from this [article](https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/) by Warren Davies.

More specifically, the following code:

```js
function changeSlide(moveTo) {
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");

  currentSlide = moveTo;
}

document.getElementById("nav-button--next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});
```

This is my implementation:

```js
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
```

Similar, of course. But different because of the needs of this project.

### Continued development

I'll build another portfolio single-page to learn more about it!

### Useful resources

- [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU) - To anyone who needs to re-learn CSS Grid, or even if you are starting out.
- [JavaScript Image Slider [ How To Build One ] ](https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/) - An excellent article on how to build a JS Image Slider.
- [Change the column order in a css grid](https://stackoverflow.com/questions/45367864/change-the-column-order-in-a-css-grid#45373587).
- [Working with JavaScript Media Queries](https://css-tricks.com/working-with-javascript-media-queries/).
- [overflow-x: hidden, is not working in safari](https://stackoverflow.com/questions/32666663/overflow-x-hidden-is-not-working-in-safari).

## Author

- Website - [juanca.org](https://www.juanca.org)
- Frontend Mentor - [@juancaorg](https://www.frontendmentor.io/profile/juancaorg)

## Acknowledgments

Special thanks to [Kevin Powell](https://www.kevinpowell.co/) for sharing his CSS expertise to the public and most of it, for free.

Thanks to [Warren Davies](https://alvarotrigo.com/blog/javascript-slider-how-to-make-one/) for his JS expertise.

And of course, all the [Stack Overflow](https://stackoverflow.com/) and [MDN](https://developer.mozilla.org/en-US/) contributors!
