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
    this.highlightCurrentImageIndicator();
  }

  highlightCurrentImageIndicator() {
    const imageIndicators = document.querySelectorAll(".js-image-indicator");

    imageIndicators.forEach((indicator) => {
      this.removePreviousHighlight(indicator);

      this.addCurrentHighlight(indicator);
    });
  }

  addCurrentHighlight(indicator) {
    if (Number(indicator.dataset.imageIndex) === this.currentImageIndex) {
      indicator.classList.add("highlighted");
    }
  }

  removePreviousHighlight(indicator) {
    if (indicator.classList.contains("highlighted")) {
      indicator.classList.remove("highlighted");
    }
  }

  addImageIndicators(){
    this.images.forEach((image, image_index) => {
      const indicator = document.createElement("div");
      indicator.dataset.imageIndex = `${image_index}`;
      indicator.classList = `js-image-indicator`;
      this.imageIndicatorContainer.appendChild(indicator);
    });
    this.addIndicatorClickEvent();
  }

  addIndicatorClickEvent() {
    const imageIndicators = document.querySelectorAll(".js-image-indicator");

    imageIndicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        this.currentImageIndex = Number(indicator.dataset.imageIndex);

        this.displayCurrentImage();
        this.highlightCurrentImageIndicator();
      });
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
      this.highlightCurrentImageIndicator();
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