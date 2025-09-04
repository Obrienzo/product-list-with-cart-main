
const detailsData = (object) => {

    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');

    const dessertCategory = document.createElement('p');
    dessertCategory.classList.add('dessert-category');
    dessertCategory.textContent = object.category;

    const dessertName = document.createElement('p');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = object.name;

    const dessertPrice = document.createElement('p');
    dessertPrice.classList.add('dessert-price');
    dessertPrice.textContent = `$${object.price.toFixed(2)}`;

    detailsWrapper.append(dessertCategory, dessertName, dessertPrice);

    return detailsWrapper;
}

export default detailsData;