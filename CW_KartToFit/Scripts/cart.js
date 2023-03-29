let cartData= JSON.parse(localStorage.getItem("cart")) || [];
    const container= document.getElementById("cart-container");
    console.log(typeof(cartData))

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
      let inc= document.createElement("div")
      let increment = document.createElement("button");
      let decrement =document.createElement("button");
      let quantity =document.createElement("span");

      img.src = el.img;
      name.innerText= el.brand;
      price.innerText= `₹${el.price}`;
      description.innerText= el.details;
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

      inc.append(increment,quantity,decrement)
      card.append(img,name,price,description,category,inc,remove);
      container.append(card)

    })

    const total= document.getElementById("cart-total");
    let sum=0; 
    for(let i=0;i<cartData.length; i++){
      sum+=cartData[i].quantity*cartData[i].price;
    }
    total.innerText=sum;
  }
displaydata(cartData)