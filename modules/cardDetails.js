
const detailsData = (name, category, price) => {

    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');

    const dessertCategory = document.createElement('p');
    dessertCategory.classList.add('dessert-category');
    dessertCategory.textContent = category;

    const dessertName = document.createElement('p');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = name;

    const dessertPrice = document.createElement('p');
    dessertPrice.classList.add('dessert-price');
    dessertPrice.textContent = `$${price.toFixed(2)}`;

    detailsWrapper.append(dessertCategory, dessertName, dessertPrice);

    return detailsWrapper;


}

export default detailsData;