const dom = document.getElementById('product-container')

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

    saveData.map(i =>{
        if(id === i.id){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${i.imageUrl}"/></div>
            <div>${i.newProductName}</div>
            <div>${i.newProductPrice}</div>
            <div class="right-margin">
              <button>+</button>
              <div>0</div>
              <button>-</button>
            </div>
          `;

          dom.appendChild(newDiv)
        }
    })
        
}


