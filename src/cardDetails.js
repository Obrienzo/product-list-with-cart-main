
const createDetails = (object) => {

    const detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('details-wrapper');

    // Adding a fallback if the data is not correct
    const dessertCategory = document.createElement('p');
    dessertCategory.classList.add('dessert-category');
    dessertCategory.textContent = object.category || "Unknown";

    const dessertName = document.createElement('p');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = object.name || "Unknown";

    const dessertPrice = document.createElement('p');
    dessertPrice.classList.add('dessert-price');
    dessertPrice.textContent = `$${object.price.toFixed(2)}`;

    detailsWrapper.append(dessertCategory, dessertName, dessertPrice);

    return detailsWrapper;
}

export default createDetails;