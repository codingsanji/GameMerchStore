//NAV BAR-DARK AND LIGHT MODE
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}

//PRESS TO GO TO OTHER PIC--ONLY FOR TEE SECTION
var Mainimg=document.getElementById("bigimg")
var Smallimg=document.getElementsByClassName("mini")


Smallimg[0].onclick=function(){
    Mainimg.src=Smallimg[0].src;  
}
Smallimg[1].onclick=function(){
    Mainimg.src=Smallimg[1].src;  
}
Smallimg[2].onclick=function(){
    Mainimg.src=Smallimg[2].src;  
}
Smallimg[3].onclick=function(){
    Mainimg.src=Smallimg[3].src;  
} 

//NEWSLETTER
function submitForm() {
    alert('Thank you! Come again');
}

//PRICE
let body = document.querySelector('body');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
const cartItemsList = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');

function addToCart(button) {
    const productElement = button.closest('.product');
    const productId = productElement.dataset.id;
    const productName = productElement.dataset.name;
    const productPrice = parseFloat(productElement.dataset.price);

    // Add the product to the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${productPrice}`;
    cartItemsList.appendChild(listItem);

    // Update the total
    updateTotal(productPrice);
}

function updateTotal(price) {
    const currentTotal = parseFloat(cartTotalSpan.textContent.replace('$', ''));
    const newTotal = currentTotal + price;
    cartTotalSpan.textContent = `$${newTotal.toFixed(2)}`;
}
