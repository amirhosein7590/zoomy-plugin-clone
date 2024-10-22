/** @format */

"use strict";

let zoomyElem = document.querySelector(".zoomy");
let bgSlide = document.querySelector(".bg-slide");
let bgImage = document.querySelector(".bg-slide img");
let squareElem = document.querySelector(".square");
let imgTags = document.querySelectorAll(".slides img");
let floatingWindow = document.querySelector(".float-window");

function squareSetting(event) {
  let { clientX, clientY } = event;
  let bgSlideRect = bgSlide.getBoundingClientRect();
  let offsetX = clientX - bgSlideRect.left - 50;
  let offsetY = clientY - bgSlideRect.top - 50;
  squareElem.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function zoomyFunction(event) {
  if (zoomyElem.dataset.floatingWindow == "false") {
    let { clientX, clientY } = event;
    let leftPosition = bgSlide.getBoundingClientRect().left;
    let topPosition = bgSlide.getBoundingClientRect().top;
    let offsetX = (clientX - leftPosition) / 3.99;
    let offsetY = (clientY - topPosition) / 3.99;
    bgSlide.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
    floatingWindow.style.display = "none";
    bgSlide.classList.remove("floatWindowActived");
  } else if (zoomyElem.dataset.floatingWindow == "true") {
    if (window.innerWidth <= 500) {
      zoomyElem.dataset.floatingWindow = "false";
      alert("this feature can not apply on your screen size");
      return;
    }
    let { clientX, clientY } = event;
    let leftPosition = bgSlide.getBoundingClientRect().left;
    let topPosition = bgSlide.getBoundingClientRect().top;
    let offsetX = (clientX - leftPosition) / 3.99;
    let offsetY = (clientY - topPosition) / 3.99;
    floatingWindow.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
    bgSlide.classList.add("floatWindowActived");
  }
}
bgSlide.addEventListener("mousemove", (event) => {
  squareSetting(event);
  zoomyFunction(event);
});

bgSlide.addEventListener(
  "mouseenter",
  () => (floatingWindow.style.display = "block")
);
bgSlide.addEventListener(
  "mouseleave",
  () => (floatingWindow.style.display = "none")
);

imgTags.forEach((img) =>
  img.addEventListener("click", (event) => {
    let src = event.target.src;
    bgImage.src = src;
    bgSlide.style.backgroundImage = `url(${src})`;
    floatingWindow.src = src;
    floatingWindow.style.backgroundImage = `url(${src})`;
  })
);

const slidesContainer = document.querySelector(".slides-container");
let isDown = false;
let startX;
let scrollLeft;

slidesContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  slidesContainer.classList.add("active");
  startX = e.pageX - slidesContainer.offsetLeft;
  scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener("mouseleave", () => {
  isDown = false;
  slidesContainer.classList.remove("active");
});

slidesContainer.addEventListener("mouseup", () => {
  isDown = false;
  slidesContainer.classList.remove("active");
});

slidesContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slidesContainer.offsetLeft;
  const walk = (x - startX) * 3;
  slidesContainer.scrollLeft = scrollLeft - walk;
});

slidesContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slidesContainer.offsetLeft;
  scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener("touchend", () => {
  isDown = false;
});

slidesContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slidesContainer.offsetLeft;
  const walk = (x - startX) * 3;
  slidesContainer.scrollLeft = scrollLeft - walk;
});

isDown = false;
startX;
scrollLeft;

const images = slidesContainer.querySelectorAll("img");
images.forEach((img) => {
  img.draggable = false;
});

slidesContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  slidesContainer.classList.add("active");
  startX = e.pageX - slidesContainer.offsetLeft;
  scrollLeft = slidesContainer.scrollLeft;
  e.preventDefault();
});

slidesContainer.addEventListener("mouseleave", () => {
  isDown = false;
  slidesContainer.classList.remove("active");
});

slidesContainer.addEventListener("mouseup", () => {
  isDown = false;
  slidesContainer.classList.remove("active");
});

slidesContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slidesContainer.offsetLeft;
  const walk = (x - startX) * 3;
  slidesContainer.scrollLeft = scrollLeft - walk;
});

slidesContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slidesContainer.offsetLeft;
  scrollLeft = slidesContainer.scrollLeft;
});

slidesContainer.addEventListener("touchend", () => {
  isDown = false;
});

slidesContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slidesContainer.offsetLeft;
  const walk = (x - startX) * 3;
  slidesContainer.scrollLeft = scrollLeft - walk;
});
