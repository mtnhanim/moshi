const imageUrls = [
    "img/gallery-img-01.jpg",
    "img/gallery-img-02.jpg",
    "img/gallery-img-03.jpg",
  ];

const imageElement = document.getElementById("image-frame");

function displayImagesWithAnimation() {
  let index = 0;
  setInterval(() => {
    // Apply animation class to the image
    imageElement.classList.add("fade-in");
    
    // Set the image URL
    imageElement.src = imageUrls[index];
    
    // Increment index or reset to 0 if the last image is reached
    index = (index + 1) % imageUrls.length;
    
    // Remove the animation class after a certain time (adjust the duration as needed)
    setTimeout(() => {
      imageElement.classList.remove("fade-in");
    }, 4000); // Duration in milliseconds
  }, 6000); // Interval between image changes in milliseconds
}

displayImagesWithAnimation();