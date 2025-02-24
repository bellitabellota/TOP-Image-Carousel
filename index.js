import Carousel from "./carousel.js";

const imageContainer = document.querySelector(".js-image-container");

const imageSources = ["./images/_A642133.jpg", "./images/_A642237.jpg", "./images/_A643298.jpg", "./images/_A643303.jpg", "./images/DSC07016.jpg"];

const previousControl = document.querySelector(".js-previous");
const nextControl = document.querySelector(".js-next");
const imageIndicatorContainer = document.querySelector(".js-image-indicator-container");

new Carousel(imageContainer, imageSources, previousControl, nextControl, imageIndicatorContainer);