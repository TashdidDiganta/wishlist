const dom = document.getElementById('product-container');
const total = document.querySelector('.total');
const cart = document.getElementById('shopping-cart');
const closeCart = document.getElementById('close');
const body = document.querySelector('body')
const quantityLength = document.querySelector('.quantity')
// create arr
const saveCartIntoLocalStorage = getDataFromLocalStorage('item') != null? getDataFromLocalStorage('item') : [];

showCart(saveCartIntoLocalStorage)



//get data from local storage
function getDataFromLocalStorage(item){
    const data = localStorage.getItem(item)
    return JSON.parse(data)
}


cart.addEventListener('click', ()=>{
    body.classList.add('active');
})


closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
});




function showCart(cart){
    cart.map(item =>{
        document.getElementById('cart-container').innerHTML += `
        <div class="cards">
            <div class="add-card">
                <img src="${item.imageUrl}" alt="">
                <div class="details">
                    <p><span>Name:</span>${item.newProductName}</p>
                    <p><span>Price</span>$ ${item.newProductPrice}</p>
                    <button onclick="getOrderItem(${item.id})">Add To Cart</button>
                </div>
            </div>
     </div>
        `
    })

}


function setCartDataInLocalStorage(cartItem){
    const setCartData = JSON.stringify(cartItem);
    localStorage.setItem('cartData', setCartData);
}


function getCartDataInLocalStorage(cartData){
    const data = localStorage.getItem(cartData)
    return JSON.parse(data)
   
}



/// show cart data
const getCart = getCartDataInLocalStorage('cartData')!= null? getCartDataInLocalStorage('cartData') : [];
quantityLength.innerText = getCart.length;


showCartAddToCart(getCart)



function showCartAddToCart(cart){


    cart.map(data =>{
         let newDiv = document.createElement('li');
        newDiv.innerHTML = `
        <div><img src="${data.imageUrl}"/></div>
        <div>${data.newProductName}</div>
        <div class="price" data-value="${data.productQuantity}">${data.newProductPrice}</div>
        <div class="right-margin">
        <button onclick="udecressQuantitys(event)">-</button>
        <input type="number" step="1" value="1"/>
        <button onclick="incressQuantity(event)">+</button>
        </div>`;

        dom.appendChild(newDiv);
    })



}

const arrayOfObjects = [
    { number: 5 },
    { number: 10 },
    { number: 15 },
  ];
  
  // Use the reduce method to sum the 'number' property of each object
  const sum = arrayOfObjects.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.number;
  }, 0);
  
  console.log("Sum of numbers:", sum);


let  value = [];

/// add to cart
function getOrderItem(id){
    setCartDataInLocalStorage(value)
    const saveData = getDataFromLocalStorage('item');
    saveData.map(i =>{
        if(id === i.id){
        value.push(i)


        } 
    })     
}


function incressQuantity(e){
    let quantityPlus = parseInt(e.target.previousElementSibling.value);
    let updateQuantity = parseInt(quantityPlus) +1;
    e.target.previousElementSibling.value = updateQuantity;
    let acculData = e.target.parentElement.previousElementSibling.classList.contains('price') ? parseFloat(e.target.parentElement.previousElementSibling.getAttribute('data-value')) : 0;
    e.target.parentElement.previousElementSibling.innerText = parseFloat( updateQuantity * acculData)

     
    setCartDataInLocalStorage( )
    //  let numberPrice = e.target.parentElement.previousElementSibling.classList.contains('price') ? parseFloat(e.target.parentElement.previousElementSibling.innerText) : 0;
    //  total.innerText = numberPrice;
}

function decressQuantitys(e){
    let quantityminus = e.target.nextElementSibling.value
    e.target.nextElementSibling.value = parseInt(quantityminus) -1;
    
}




