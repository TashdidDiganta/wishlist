const dom = document.getElementById('product-container');                     
const cart = document.getElementById('cart-container');                     
const total = document.querySelector('.total');
const cartBtn = document.getElementById('shopping-cart');
const closeCart = document.getElementById('close');
const body = document.querySelector('body')
const quantityLength = document.querySelector('.quantity')
const price = document.querySelector('.price');

const products = [
    { 
        id: Math.random(),
        images: 'assets/menu-item-1.png',
        name: 'Food 1',
        price: 50,
        quantity: 1,
    },
    { 
        id: Math.random(),
        images: 'assets/menu-item-2.png',
        name: 'Food 2',
        price: 40,
        quantity: 1,
    },
    { 
        id: Math.random(),
        images: 'assets/menu-item-3.png',
        name: 'Food 3',
        price: 50,
        quantity: 1,
    },
    { 
        id: Math.random(),
        images: 'assets/menu-item-4.png',
        name: 'Food 4',
        price: 30,
        quantity: 1,
    },
]


showProduct(products) // pass Array into show Product function

let cartArray =  getDataFromLocalStorage('cartData')? getDataFromLocalStorage('cartData') : [];

 //show cart section 
 cartBtn.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
});


// set data in local storage
function setCartDataInLocalStorage(cartItem){
    const setCartData = JSON.stringify(cartItem);
    localStorage.setItem('cartData', setCartData);
}

//get data from local storage
function getDataFromLocalStorage(){
    const data = localStorage.getItem('cartData')
    return JSON.parse(data)
}





function showProduct(product){

    let productContainert = '';  // hold all product
    product.map(item =>{
        productContainert += `
        <div class="cards">
            <div class="add-card">
                <img src="${item.images}" alt="">
                <div class="details">
                    <p><span>Name:</span>${item.name}</p>
                    <p class="price"><span quantity="${item.quantity}" >Price$</span> ${item.price}</p>
                    <button onclick="addToCart(${item.id})">Add To Cart</button>    
                </div>
            </div>
        </div>
        `
    })

    dom.innerHTML = productContainert // show all product into dom
}


function addToCart(id){  // get all order product

    products.map(i =>{
        if(i.id === id){
            cartArray.push(i) // push order object into New Array
        }
    })


    setCartDataInLocalStorage(cartArray)
    showCart(cartArray); /// show order product
    quantityLength.innerHTML = cartArray.length // show order products length
    body.classList.add('active'); 
}


const getData = getDataFromLocalStorage('cartData')
showCart(getData); /// show order product
quantityLength.innerHTML = cartArray.length // show order products length



function showCart(cartProduct){ // show all prodcut into dom
    
    let orderCartContainer = '';
    cartProduct.map(item =>{
        orderCartContainer+= `
               <div class="order-item">
                    <img src="${item.images}"/>
                    <div  class="name">${item.name}</div>
                    <div class="price" id="${item.id}" price="${item.price}">${item.price}</div>
                    <div class="right-margin">
                        <button onclick="udecressQuantitys(event)">-</button>
                        <input type="number" step="1" value="1"/>
                        <button onclick="incressQuantity(event)">+</button>
                    </div>                    
                    <button class="delete" onclick="deleteItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
               </div>
        
        `
    })
    cart.innerHTML = orderCartContainer
}

// delete function
function deleteItem(id){ 
    const newArray = cartArray.filter(i => i.id !== id) 
    cartArray = newArray 
    setCartDataInLocalStorage(cartArray)
    quantityLength.innerHTML = cartArray.length
    showCart(cartArray) 
}

function incressQuantity(e){
    const inputValue = parseInt(e.target.previousElementSibling.value);
    const upgredValue = parseInt(inputValue) + 1;
    e.target.previousElementSibling.value = upgredValue
    const productPrice = e.target.parentElement.previousElementSibling.classList.contains('price')? parseFloat(e.target.parentElement.previousElementSibling.getAttribute('price')) : 0;
    const newPrice = parseFloat(upgredValue * productPrice)
    e.target.parentElement.previousElementSibling.innerText = newPrice; 

    const productId = e.target.parentElement.previousElementSibling.classList.contains('price')? parseFloat(e.target.parentElement.previousElementSibling.getAttribute('id')) : 0;
     let priceUpdate =  getDataFromLocalStorage('cartData')? getDataFromLocalStorage('cartData') : [];

    const setNewPrice = priceUpdate.map(i=>{
        if(i.id === productId){
            return { ...i, quantity: upgredValue}
        }
        return i
      })

      setCartDataInLocalStorage(setNewPrice)
      totalPrice(setNewPrice)
}


function totalPrice(p){

    const totalPrice = p.reduce((acc, product)=>{
       return acc + (product.price * product.quantity)
    },0)

    total.innerText = totalPrice
    console.log(totalPrice)

    // const totalPrice = shoppingCart.reduce((accumulator, product) => {
    //     return accumulator + (product.price * product.quantity);
    //   }, 0);
      
    //   console.log("Total Price: $" + totalPrice);

   
}