
// ALL ELEMENT
const addItme = document.getElementById('add-itme');
const imgUrl = document.getElementById('image-input');
const productName = document.getElementById('product-name-input');
const productPrice = document.getElementById('product-price-input');
const container = document.getElementById('cart-container');


// create arr
const saveCartIntoLocalStorage = getDataFromLocalStorage('item') != null? getDataFromLocalStorage('item') : [];
// console.log(saveCartIntoLocalStorage)
showCart(saveCartIntoLocalStorage)


//get itme
addItme.addEventListener('click', function(){
    const url = imgUrl.value;
    const name = productName.value;
    const price = productPrice.value;
    const allData =  createItem(url,name,price)
    setDataInLocalStorage(allData);
 

    imgUrl.value = '';
    productName.value = '';
    productPrice.value = '';
})


//  create itme
function createItem(url,name,price){
    const item = {id: Math.random(), imageUrl:url, newProductName: name,  newProductPrice: price};
    const getData = getDataFromLocalStorage('item')
    if(getData === null || getData === ''){
        return [item]
    } else{
        const newArray = [...getData, item];
        return newArray;
    }
}


//get data from local storage
function getDataFromLocalStorage(item){
    const data = localStorage.getItem(item)
    return JSON.parse(data)
}


// set data in local Storage
function setDataInLocalStorage(item){
    const saveData = JSON.stringify(item);
     localStorage.setItem('item', saveData)
}



function showCart(cart){
    let allCart = '';
    cart.map(item =>{
        allCart += `<div class="cards">
            <div class="card">
                <img src="${item.imageUrl}" alt="">
                <div class="details">
                    <p><span>Name:</span>${item.newProductName}</p>
                    <p><span>Price</span>$ ${item.newProductPrice}</p>
                    <button>Add To Cart</button>
                </div>
            </div>
     </div>`
    })

    container.innerHTML = allCart;

}
