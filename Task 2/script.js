const img = document.querySelector(".right-home-content-portion-img img");
const images = [
  "./asserts/img1.jpg",
  "./asserts/img2.jpg",
  "./asserts/img3.jpg",
  "./asserts/img4.jpg",
  "./asserts/img5.jpg"
];

let intervalId;

// Function to get a random image from the array
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Function to start changing images
const startChangingImages = () => {
  intervalId = setInterval(() => {
    const randomImage = getRandomImage();
    img.src = randomImage;
  }, 1000); // Change image every second
};

// Function to stop changing images
// const stopChangingImages = () => {
//   clearInterval(intervalId);
// };

// Initially change the image source after 1 second
setTimeout(() => {
  const randomImage = getRandomImage();
  // Debugging line
  img.src = randomImage;  
}, 1000);

// Start changing images on mouseover
// img.addEventListener("mouseover", startChangingImages);

// // Stop changing images on mouseleave
// img.addEventListener("mouseleave", stopChangingImages);


startChangingImages();