let cart = [];
let user = null;

// LOGIN
function openLogin(){
  document.getElementById("loginModal").style.display = "block";
}

function register(){
  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  if(first && last && email){
    user = {first,last,email};
    alert("Амжилттай бүртгэгдлээ!");
    document.getElementById("loginModal").style.display = "none";
  }
}

// CART
function addToCart(name, price){
  cart.push({name,price});
  renderCart();
}

function renderCart(){
  let html = "";
  let total = 0;

  cart.forEach(i=>{
    html += i.name + " - " + i.price + "₮<br>";
    total += i.price;
  });

  document.getElementById("cart").innerHTML = html;
  document.getElementById("total").innerText = "Нийт: " + total + "₮";
}

// PAYMENT
function openPayment(){
  document.getElementById("paymentBox").style.display = "block";
}

function checkPayment(){
  if(cart.length > 0){
    alert("Төлбөр шалгалаа: Захиалга амжилттай!");
    cart = [];
    renderCart();
    document.getElementById("paymentBox").style.display = "none";
  }
}
