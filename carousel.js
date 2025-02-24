class Carousel{
  constructor(imageContainer, imageSources, previousControl, nextControl, imageIndicatorContainer) {
    this.imageContainer = imageContainer;
    this.images = this.createImageElements(imageSources);
    this.imageIndicatorContainer = imageIndicatorContainer;
    this.previousControl = previousControl;
    this.nextControl = nextControl;
    this.currentImageIndex = 0;

    this.initializeCarouselView();
  }

  initializeCarouselView() {
    /* ?? replace the line below with updateImageIndex */
    this.imageContainer.appendChild(this.images[this.currentImageIndex]);
    this.addEventListenersToControls();
    this.addImageIndicators();
  }

  addImageIndicators(){
    this.images.forEach((image, image_index) => {
      const indicator = document.createElement("div");
      indicator.classList = `data-image-index =${image_index}`;
      this.imageIndicatorContainer.appendChild(indicator);
    });
  }

  addEventListenersToControls() {
    this.addClickEventListener(this.previousControl, -1);
    this.addClickEventListener(this.nextControl, +1);
  }

  addClickEventListener(control, increment){
    control.addEventListener("click", () => {
      this.updateImageIndex(control, increment);


      this.displayCurrentImage();
    });
  }

  updateImageIndex(control, increment) {
    this.currentImageIndex += increment;

    if(control === this.previousControl && this.currentImageIndex === -1) {
      this.currentImageIndex = this.images.length - 1;
    } else if (control === this.nextControl &&  this.currentImageIndex === this.images.length) {
      this.currentImageIndex = 0;
    }
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