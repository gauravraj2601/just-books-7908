function slideshowFun(images){
    
}

// Use the following data for slideshow
var movieImages = [
  "https://img5.hkrtcdn.com/26492/bnr_2649134_o.png",
  "https://img7.hkrtcdn.com/26478/bnr_2647796_o.jpg",
  "https://img5.hkrtcdn.com/26445/bnr_2644434_o.jpg",
  "https://img7.hkrtcdn.com/26479/bnr_2647806_o.jpg",
  "https://img5.hkrtcdn.com/26479/bnr_2647814_o.jpg"
]
const image = document.querySelector("#slideshow>img");

let currentImage=0
image.setAttribute("src", movieImages[currentImage]);
setInterval(function(){
  currentImage++;
  if(currentImage >= movieImages.length){
    currentImage=0;
  }
  image.setAttribute("src", movieImages[currentImage])
},2000)


 