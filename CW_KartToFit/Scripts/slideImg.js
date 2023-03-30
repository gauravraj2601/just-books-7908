
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


var movieImages2 = [
  "https://img1.hkrtcdn.com/23824/bnr_2382350_o.png",
  "https://img5.hkrtcdn.com/23824/bnr_2382344_o.png",
  "https://img7.hkrtcdn.com/23824/bnr_2382346_o.png",
  "https://img9.hkrtcdn.com/23824/bnr_2382348_o.png",
  "https://img5.hkrtcdn.com/23824/bnr_2382344_o.png"
]
const image2 = document.querySelector("#slideshow2>img");

let currentImage2=0
image.setAttribute("src", movieImages2[currentImage2]);
setInterval(function(){
  currentImage2++;
  if(currentImage2 >= movieImages2.length){
    currentImage2=0;
  }
  image2.setAttribute("src", movieImages2[currentImage2])
},2000)
