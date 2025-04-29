import { dessertCard } from "./modules/dessertCard.js";

const dessertList = document.querySelector('.dessert-list');

fetch('./data.json')
    .then(response => response.json())
    .then(desserts => {
        // console.log(desserts);
        desserts.forEach(dessert => {
            const item = dessertCard(dessert.image, dessert.name, dessert.category, dessert.price);
            dessertList.appendChild(item);
        })
    })
    .catch(err => {
        console.error(err.message);
    })