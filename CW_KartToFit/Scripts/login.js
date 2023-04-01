
let form = document.querySelector("form");

let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

  form.addEventListener("submit",function(e){
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      // window.location.href = "./wishlist.html";
      window.location.href="./index.html"
    } else {
      alert("Invalid username or password!");
    }
  })

// function login() {
  
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let storedUsername = localStorage.getItem("username");
//     let storedPassword = localStorage.getItem("password");
//     if (username === storedUsername && password === storedPassword) {
//       alert("Login successful!");
//       // window.location.href = "./wishlist.html";
//       window.location.href="./CW_KartToFit/index.html"
//     } else {
//       alert("Invalid username or password!");
//     }
//   }
  
  function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    windows.location.href= "cart.html"
   
  }  