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




/// add to cart
function getOrderItem(id){
    const saveData = getDataFromLocalStorage('item');
    let quantity = 1 ;
   
    saveData.map(i =>{

        if(id === i.id){
            let price = parseFloat(i.newProductPrice )

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${i.imageUrl}"/></div>
            <div>${i.newProductName}</div>
            <div>${ price }</div>
            <div class="right-margin">
              <button onclick=" console.log('adf') ">-</button>
              <div>${quantity}</div>
              <button onclick=" ${quanssstity} ">+</button>
            </div>
          `;
          dom.appendChild(newDiv)
        }
    })    
}


function updateQuantity(){

}




