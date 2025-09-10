

const createCartItemCard = (name, price, count) => {

    let totalPrice;

    const cartItemWrapper = document.createElement('div');
    cartItemWrapper.classList.add('cartItem-wrapper');

    totalPrice = price * count;

    const detailWrapper = document.createElement('div');
    detailWrapper.classList.add('detail-wrapper');

    const dessertName = document.createElement('p');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = name;

    const dataContainer = document.createElement('div');
    dataContainer.classList.add('data-container');

    const dessertCount = document.createElement('p');
    dessertCount.classList.add('dessert-count');
    dessertCount.textContent = `${count}x`;

    const dessertPrice = document.createElement('p');
    dessertPrice.classList.add('dessert-price');
    dessertPrice.textContent = `@ $${price.toFixed(2)}`;

    const dessertTotal = document.createElement('p');
    dessertTotal.classList.add('dessert-total');
    dessertTotal.textContent = `$${totalPrice.toFixed(2)}`;

    dataContainer.append(dessertCount, dessertPrice, dessertTotal);
    detailWrapper.append(dessertName, dataContainer);

    const deleteItem = document.createElement('button');
    deleteItem.classList.add('delete-item');
    deleteItem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`;

    cartItemWrapper.append(detailWrapper, deleteItem);

    return cartItemWrapper;

}

export default createCartItemCard;