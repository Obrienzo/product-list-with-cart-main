
const createConfirmItem = (name, count, price, totalPrice, thumbnail) => {

    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item-wrapper');

    const confirmData = document.createElement('div');
    confirmData.classList.add('confirm-data__wrapper');

    const itemThumbnail = document.createElement('img');
    itemThumbnail.classList.add('dessert-thumbnail');
    itemThumbnail.src = thumbnail;
    itemThumbnail.alt = `${name} thumbnail`;

    const dataDetails = document.createElement('div');
    dataDetails.classList.add('data__details');

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

    dataContainer.append(dessertCount, dessertPrice);
    dataDetails.append(dessertName, dataContainer);
    confirmData.append(itemThumbnail, dataDetails);

    const dessertTotal = document.createElement('p');
    dessertTotal.classList.add('dessert-total__confirm');
    dessertTotal.textContent = `$${totalPrice.toFixed(2)}`;

    itemWrapper.append(confirmData, dessertTotal);

    return itemWrapper;

}


// To be used when the user confirms the order...

export default createConfirmItem;