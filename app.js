

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
            <div class="card">
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

const dom = document.getElementsById('listCard')


function getOrderItem(id){
    const saveData = getDataFromLocalStorage('item');
    for(i of saveData) {
      if(id === i.id){
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="${i.imageUrl}"/></div>
            <div>${i.newProductName}</div>
          `;

          dom.appendChild(newDiv)
        //     listCard.appendChild(newDiv);
        // console.log(i.newProductName)

        // document.getElementsById('listCard').innerHTML += `<div class="title">${i.newProductName}</div> `

      } 
    }
        
}
