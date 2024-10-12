function handleFormSubmit(event) {
    event.preventDefault();

    const itemName=document.getElementById('itemname').value;
    const description=document.getElementById('description').value;
    const price=document.getElementById('price').value;
    const quantityElement=document.getElementById('quantity').value;

    const obj = {
        itemName,
        description,
        price,
        quantityElement
    };

    axios.post("https://crudcrud.com/api/43b027b1ff044893bbf9f3e3144461ac/storeDetails", obj)
      .then((response) => {
        showUserOnScreen(response.data);
        //console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });


    /*localStorage.setItem(obj.quantityElement, JSON.stringify(obj));
    showUserOnScreen(obj);*/

    document.getElementById('itemname').value='';
    document.getElementById('description').value='';
    document.getElementById('price').value='';
    document.getElementById('quantity').value='';
}

function showUserOnScreen(obj) {
    const parentEle = document.getElementById('listOfItems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.itemName + ' - ' + obj.description + ' - ' + obj.price + ' - ' + obj.quantityElement + ' - ';


    
    const buy1=document.createElement('input');
    buy1.type='button';
    buy1.value='Buy1';
    buy1.onclick = () => {
        document.getElementById('quantity').value=obj.quantityElement--;
    }
    childEle.appendChild(buy1);
    parentEle.appendChild(childEle);

    const buy2=document.createElement('input');
    buy2.type='button';
    buy2.value='Buy2';
    buy2.onclick = () => {
        localStorage.removeItem(obj.quantityElement);
        document.getElementById('quantity').value=obj.quantityElement-=2;
    }
    childEle.appendChild(buy2);
    parentEle.appendChild(childEle);

    const buy3=document.createElement('input');
    buy3.type='button';
    buy3.value='Buy3';
    buy3.onclick = () => {
        document.getElementById('quantity').value=obj.quantityElement-=3;
    }
    childEle.appendChild(buy3);
    parentEle.appendChild(childEle);
    /*buy1.id='buyOneButton';

    childEle.appendChild(buy1);
    parentEle.appendChild(childEle);

    const buyOneButton=document.getElementById('buyOneButton');
    const quantityInput=document.getElementById('quantity');

    function decreaseQuantity() {
        let quantity=parseInt(quantityInput.value);
        if(quantity>0) {
            quantity--;
            quantityInput.value=quantity;
            localStorage.setItem(obj.quantityElement)
        }
    }
    buyOneButton.addEventListener('click', decreaseQuantity);*/


}