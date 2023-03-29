let wishlistData= JSON.parse(localStorage.getItem("wishlist")) || [];
let cartData= JSON.parse(localStorage.getItem("cart")) || []
const container= document.getElementById("cart-container");
console.log(typeof(wishlistData))

function displaydata(data){
container.innerHTML="";
data.forEach((el,index)=>{
let card= document.createElement("div");
let img= document.createElement("img");
let name= document.createElement("h2");
let price = document.createElement("h3");
let description= document.createElement("p");
let category = document.createElement("h3");
let remove= document.createElement("button");
let addCart= document.createElement("button");

addCart.innerText= "Add To Cart"
img.src = el.img;
name.innerText= el.brand;
price.innerText= `₹${el.price}`;
description.innerText= el.details;
category.innerText= el.category;
remove.innerText= "Remove"

remove.addEventListener("click",function(){
  wishlistData = wishlistData.filter(function(element){
    return element.id != el.id;
  });
  localStorage.setItem("wishlist",JSON.stringify(wishlistData));
  displaydata(wishlistData)
})

addCart.addEventListener("click",function(){
  if(checkAvail(el)){
    alert("Product Already in Cart")
  }
  else{
    cartData.push({...el,quantity:1})  // ... it open the cartData to add more data
    localStorage.setItem("cart",JSON.stringify(cartData))
    alert("Product Added To Cart")
  }
})


card.append(img,name,price,description,category,addCart,remove);
container.append(card)
})

// const total= document.getElementById("cart-total");
// let sum=0; 
// for(let i=0;i<wishlistData.length; i++){
// sum+=wishlistData[i].quantity*wishlistData[i].price;
// }
// total.innerText=sum;
}
displaydata(wishlistData)

function checkAvail(el){
for( let i=0; i<cartData.length; i++){
  if(el.id === cartData[i].id){
    return true
  }
}
return false
}