const search= document.getElementById("search");
search.addEventListener("input",function(){
  let filtered= cartData.filter(function(el){
    if(el.name.toUpperCase().includes(search.value.toUpperCase()) || 
    el.category.toUpperCase().includes(search.value.toUpperCase())== true){
            return true;
        }
        else{
            return false;
        }
  })
  displaydata(filtered)
})


let cartData= JSON.parse(localStorage.getItem("cart")) || [];
    const container= document.getElementById("cart-container");
    console.log(typeof(cartData))

    function displaydata(data){
      container.innerHTML="";
      data.forEach((el,index)=>{
      let card= document.createElement("div");
      let img= document.createElement("img");

      let revdiv= document.createElement("div");
      let rating=document.createElement("h3");
      let review=document.createElement("h3");
      let icon= document.createElement("img");
      let pricediv= document.createElement("div");
      let sp=document.createElement("h3");
      let MRP=document.createElement("h4");
      let discount= document.createElement("h5");  

      let name= document.createElement("h2");
      let price = document.createElement("h3");
      let description= document.createElement("p");
      let category = document.createElement("h3");
      let remove= document.createElement("button");
      let inc= document.createElement("div");
      let increment = document.createElement("button");
      let decrement =document.createElement("button");
      let quantity =document.createElement("span");

      icon.setAttribute("id","icon");
      revdiv.setAttribute("id","revdiv");
      pricediv.setAttribute("id","pricediv");

      rating.innerText= `${el.rating}🌟`;
      review.innerText = el .review;
      icon.src= el.icon;
      sp.innerText =`₹${el.SP}`;
      MRP.innerText = `₹${el.MRP}`;
      discount.innerText =`₹${el.discount}` ;
  

      img.src = el.src;
      name.innerText= el.name;
      // price.innerText= el.price;
      description.innerText= el.description;
      category.innerText= el.category;
      remove.innerText= "Remove"
      increment.innerText ="+"
      decrement.innerText= "-";
      quantity.innerText = el.quantity
      remove.addEventListener("click",function(){
          cartData = cartData.filter(function(element){
            return element.id != el.id;
          });
          localStorage.setItem("cart",JSON.stringify(cartData));
          displaydata(cartData)
      })
      increment.addEventListener("click",function(){
          el.quantity++
          localStorage.setItem("cart",JSON.stringify(cartData));
          displaydata(cartData)
      })
      decrement.addEventListener("click",function(){
        if(el.quantity>1){
          el.quantity--
          localStorage.setItem("cart",JSON.stringify(cartData));
          displaydata(cartData)
        }
          
      })
      pricediv.append(sp,MRP,discount)
      revdiv.append(rating,review,icon)
      inc.append(increment,quantity,decrement)
      card.append(img,revdiv,name,description,category,pricediv,inc,remove);
      container.append(card)

    })

    const total= document.getElementById("cart-total");
    let sum=0; 
    for(let i=0;i<cartData.length; i++){
      console.log(+cartData[i].SP)
      console.log(typeof(cartData[i].quantity))
      console.log(typeof(+cartData[i].SP))
      sum+=cartData[i].quantity* +cartData[i].SP;
    }
    total.innerText=`₹ ${sum}`;
    console.log((sum))
    localStorage.setItem("payment",JSON.stringify(sum))
    
  }
displaydata(cartData)
