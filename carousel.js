class Carousel{
  constructor(imageContainer, imageSources, previousControl, nextControl) {
    this.imageContainer = imageContainer;
    this.images = this.createImageElements(imageSources);
    this.previousControl = previousControl;
    this.nextControl = nextControl;
    this.currentImageIndex = 0;

    this.initializeCarouselView();
  }

  initializeCarouselView() {
    this.imageContainer.appendChild(this.images[this.currentImageIndex]);
    this.addEventListenersToControls();
  }

  addEventListenersToControls() {
    this.addClickEventListener(this.previousControl, -1);
    this.addClickEventListener(this.nextControl, +1);
  }

  addClickEventListener(control, increment){
    control.addEventListener("click", () => {

      /* Extract into separate function */
      this.currentImageIndex += increment;

      if(control === this.previousControl && this.currentImageIndex === -1) {
        this.currentImageIndex = this.images.length - 1;
      } else if (control === this.nextControl &&  this.currentImageIndex === this.images.length) {
        this.currentImageIndex = 0;
      }
      console.log(this.currentImageIndex);


      this.displayCurrentImage();
    });
  }

  displayCurrentImage() {
    this.imageContainer.removeChild(this.imageContainer.firstElementChild);
    this.imageContainer.appendChild(this.images[this.currentImageIndex]);
  }

  createImageElements(imageSources) {
    const images = [];

    imageSources.forEach((imageSource) => {
      const image = document.createElement("img");
      image.src = imageSource;
      images.push(image);
    });

    return images;
  }
}
export default Carousel;