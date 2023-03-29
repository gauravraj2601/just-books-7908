    // Write all necessery JS here 
  
    const search= document.getElementById("search");
    search.addEventListener("input",function(){
      let filtered= Data.filter(function(el){
        if(el.brand.toUpperCase().includes(search.value.toUpperCase()) || 
        el.category.toUpperCase().includes(search.value.toUpperCase())== true){
                return true;
            }
            else{
                return false;
            }
      })
      displaydata(filtered)
    })
   
    const filter =document.getElementById("filter")
    
    filter.addEventListener("change",function(){
      if(filter.value==""){
        displaydata(Data)
      }
      else{
        let filteredData= Data.filter((el)=>{
          return el.category ==filter.value
        })
        displaydata(filteredData)
        console.log(filteredData)
      }
    })
    
    const container= document.getElementById("product-container")
    const cartData= JSON.parse(localStorage.getItem("cart")) || []
    const whishlistData =JSON.parse(localStorage.getItem("wishlist")) || []


  function displaydata(arr){
    container.innerHTML=""
    arr.forEach((el)=>{
      let card= document.createElement("div");
      let img= document.createElement("img");
      let name= document.createElement("h2");
      let price = document.createElement("h3");
      let description= document.createElement("p");
      let Category = document.createElement("h3");
      let addCart= document.createElement("button");
      let addWishlist = document.createElement("button")
      addWishlist.setAttribute("id","wishlistbtn")

      img.src = el.img;
      name.innerText= el.brand;
      price.innerText= `₹${el.price}`;
      description.innerText= el.details;
      Category.innerText= el.category;
      addCart.innerText= "Add To Cart"
      addWishlist.innerText = "Whishlist" 
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

      addWishlist.addEventListener("click",function(){
        if(CheckAvail(el)){
          alert("Product Already in Wishlist")
        }
        else{
          whishlistData.push({...el,quantity:1})  // ... it open the cartData to add more data
          localStorage.setItem("wishlist",JSON.stringify(whishlistData))
          alert("Product Added To Wishlist")
        }
    })


      card.append(img,name,price,description,Category,addCart,addWishlist);
      container.append(card)

    })
  }

  function checkAvail(el){
      for( let i=0; i<cartData.length; i++){
          if(el.id === cartData[i].id){
            return true
          }
      }
      return false
  }
  function CheckAvail(el){
    for( let i=0; i<whishlistData.length; i++){
        if(el.id === whishlistData[i].id){
          return true
        }
    }
    return false
}


    let Data;
    async function fetchData(){
      try {
          let res= await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
          res =await res.json();
           Data=res.data
          console.log(Data)
          displaydata(Data)
          localStorage.setItem("data", JSON.stringify(Data))
        } catch (error) {
          console.log(error)
        }
    }
        fetchData()
    
 
