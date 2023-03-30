    // Write all necessery JS here 
  
    const search= document.getElementById("search");
    search.addEventListener("input",function(){
      let filtered= Data.filter(function(el){
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
    let filterPrice = document.getElementById("filter-price");
    filterPrice.addEventListener("change",function(){
      if(filterPrice.value==""){
        displaydata(Data);
      }
      else if(filterPrice.value=="LH"){
        let filterPriceData= Data.sort((a,b)=>{
          return Number(a.SP) - Number(b.SP);
        })
        displaydata(filterPriceData);
      }
      else if(filterPrice.value=="HL"){
        let filterPriceData= Data.sort((a,b)=>{
          return +b.SP - +a.SP;
        })
        displaydata(filterPriceData);
      }
    })

   let filterReview = document.getElementById("filter-rating");
    filterReview.addEventListener("change",function(){
      if(filterReview.value==""){ 
        displaydata(Data)
      }
      else if(filterReview.value=="LH"){
        let filterReviewData= Data.sort((a,b)=>{
          return a.rating - b.rating;
        })
        displaydata(filterReviewData);
      }
      else if(filterReview.value=="HL"){
        let filterReviewData= Data.sort((a,b)=>{
          return b.rating - a.rating;
        })
        displaydata(filterReviewData);
      }
     
    })


    const filter =document.getElementById("filter")
    
    filter.addEventListener("change",function(){
      if(filter.value==""){
        // displaydata(Data)
        location.reload();
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
    const container2= document.getElementById("product-container2")
    const cartData= JSON.parse(localStorage.getItem("cart")) || []
    const whishlistData =JSON.parse(localStorage.getItem("wishlist")) || []


  function displaydata(arr){
    container.innerHTML=""
    arr.forEach((el)=>{
      let card= document.createElement("div");

      let imgdiv= document.createElement("div")
      let img= document.createElement("img");

      let detailsdiv= document.createElement("div")
      let revdiv= document.createElement("div");
      let rating=document.createElement("h3");
      let review=document.createElement("h3");
      let icon= document.createElement("img");
      let pricediv= document.createElement("div");
      let sp=document.createElement("h3");
      let MRP=document.createElement("h4");
      let discount= document.createElement("h5")
      

      let name= document.createElement("h2");
      let price = document.createElement("h3");
      let description= document.createElement("p");
      let Category = document.createElement("h3");
      let addCart= document.createElement("button");
      let addWishlist = document.createElement("button");
      addWishlist.setAttribute("id","wishlistbtn");
      icon.setAttribute("id","icon");
      revdiv.setAttribute("id","revdiv");
      pricediv.setAttribute("id","pricediv")

      rating.innerText= `${el.rating}🌟`;
      review.innerText = el .review;
      icon.src= el.icon;
      sp.innerText =el.SP;
      MRP.innerText = el.MRP;
      discount.innerText = el.discount;

      img.src = el.src;
      name.innerText= el.name;
      price.innerText= el.price;
      description.innerText= "Category";
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
      pricediv.append(sp,MRP,discount)
      revdiv.append(rating,icon)
      imgdiv.append(img)
      detailsdiv.append(revdiv,name,review,description,Category,pricediv,addCart,addWishlist)
      card.append(imgdiv,detailsdiv);
      container.append(card)
      // container2.append(card)
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


    // let Data1;
    // async function fetchData(){
    //   try {
    //       let res= await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
    //       res =await res.json();
    //        Data1=res.data
    //       console.log(Data1)
    //       displaydata(Data1)
    //       localStorage.setItem("Data", JSON.stringify(Data1))
    //     } catch (error) {
    //       console.log(error)
    //     }
    // }
    //     fetchData()
    
 let Data;
async function FetchData(){
  try {
    let res= await fetch("./APIdata/healthkart.json")
    res= await res.json();
    Data= res
    console.log(Data)
    displaydata(Data)
    localStorage.setItem("data", JSON.stringify(Data))
  } catch (error) {
    console.log(error)
  }
}
FetchData()
