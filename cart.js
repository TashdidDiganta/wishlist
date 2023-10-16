
const addItme = document.getElementById('add-itme');
const imgUrl = document.getElementById('image-input');
const productName = document.getElementById('product-name-input');
const productPrice = document.getElementById('product-price-input');





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