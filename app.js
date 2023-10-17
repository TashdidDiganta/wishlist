const dom = document.getElementById('product-container');
const total = document.querySelector('.total')

// create arr
const saveCartIntoLocalStorage = getDataFromLocalStorage('item') != null? getDataFromLocalStorage('item') : [];
showCart(saveCartIntoLocalStorage)



//get data from local storage
function getDataFromLocalStorage(item){
    const data = localStorage.getItem(item)
    return JSON.parse(data)
}


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

const val = document.querySelector('#quantity')
console.log(val)


/// add to cart
function getOrderItem(id){
    const saveData = getDataFromLocalStorage('item');
    saveData.map(i =>{
        if(id === i.id){

            let quantity = 1;
            let stringToNumber = parseInt(quantity)
            let price = parseInt(i.newProductPrice )

            let newPrice = price * stringToNumber;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${i.imageUrl}"/></div>
            <div>${i.newProductName}</div>
            <div>${newPrice}</div>
            <div class="right-margin">
              <button onclick="updateQuantitys(event)">-</button>
              <input type="number" steps="1" id="quantity" value="${quantity}"/>
              <button onclick="updateQuantity(event)">+</button>
            </div>
          `;
         
          dom.appendChild(newDiv)
        }
    })  
}


function get(){
    const val = document.querySelector('#quantity')
    console.log(val)
}

get()


function updateQuantity(e){
    // e.preventDefualt()
    let quantityPlus = e.target.previousElementSibling.value;
    e.target.previousElementSibling.value = parseInt(quantityPlus) +1;

    const val = document.querySelector('#quantity')

}

function updateQuantitys(e){
    // e.preventDefualt()
    let quantityminus = e.target.nextElementSibling.value
    e.target.nextElementSibling.value = parseInt(quantityminus) - 1;
    
}




