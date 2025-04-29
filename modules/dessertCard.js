import { banner } from "./banner.js";

export function dessertCard(image, name, category, price) {
    let count = 0;

    const container = document.createElement('article');
    container.classList.add('dessert-card--container');

    const bannerSection = banner(image, count);

    const detailsSection = document.createElement('section');
    detailsSection.classList.add('card-description');

    const productCategory = document.createElement('p');
    productCategory.classList.add('product-category');
    productCategory.textContent = category;
    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.textContent = name;
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = price;

    detailsSection.append(productCategory, productName, productPrice);
    
    container.append(bannerSection, detailsSection);

    return container;

}