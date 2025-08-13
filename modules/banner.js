import bannerCoverChange from "./coverChange.js";

import addDessert from "./addCart.js";

const dessertBannerWrapper = (cover, count) => {

    let count = 0;

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    const cardCover = document.createElement('img');
    cardCover.classList.add('card-cover');

    window.addEventListener('resize', () => {
        bannerCoverChange(cardCover, cover);
    }); // Event listening the window width size change...

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cartBtn');

    const cartIcon = document.createElement('img');
    cartIcon.classList.add('cart-icon');
    cartIcon.src = '/assets/images/icon-add-to-cart.svg';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Add to Cart';

    addCartButton.append(cartIcon, buttonSpan);

    addCartButton.onclick = () => {
        addCartButton.style.display = 'none';
        bannerContainer.appendChild(addDessert(count));
    }

    bannerContainer.append(cardCover, addCartButton);

    return bannerContainer;

}

export default dessertBannerWrapper;