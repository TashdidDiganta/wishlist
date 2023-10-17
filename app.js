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

    saveData.map(i =>{
        if(id === i.id){

            console.log()
            total.innerText = i.newProductPrice
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${i.imageUrl}"/></div>
            <div>${i.newProductName}</div>
            <div class="price" data-value="${i.newProductPrice}">${i.newProductPrice}</div>
            <div class="right-margin">
              <button onclick="updateQuantitys(event)">-</button>
              <input type="number" step="1" value="1"/>
              <button onclick="updateQuantity(event)">+</button>
            </div>`;
          dom.appendChild(newDiv)
        }
    })  
}







function updateQuantity(e){
    // e.preventDefualt()
    let quantityPlus = parseInt(e.target.previousElementSibling.value);
    let updateQuantity = parseInt(quantityPlus) +1;
    e.target.previousElementSibling.value = updateQuantity;
    let acculData = e.target.parentElement.previousElementSibling.classList.contains('price') ? parseFloat(e.target.parentElement.previousElementSibling.getAttribute('data-value')) : 0;
    e.target.parentElement.previousElementSibling.innerText = parseFloat( updateQuantity * acculData)

     let numberPrice = e.target.parentElement.previousElementSibling.classList.contains('price') ? parseFloat(e.target.parentElement.previousElementSibling.innerText) : 0;
     total.innerText = numberPrice;
}




function updateQuantitys(e){
    // e.preventDefualt()
    let quantityminus = e.target.nextElementSibling.value
    e.target.nextElementSibling.value = parseInt(quantityminus) -1;
    
}




