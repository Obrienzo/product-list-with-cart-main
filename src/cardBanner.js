import bannerCoverChange from "./coverChange";
import addDessert from "./addCart";

const dessertBannerWrapper = (image) => {

    let count = 0;

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    const cardCover = document.createElement('img');
    cardCover.classList.add('card-cover');
    bannerCoverChange(cardCover, image);

    window.addEventListener('resize', () => {
        console.log(window.innerWidth);
        bannerCoverChange(cardCover, image);
    }); // Event listening the window size change...

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cartBtn');

    const cartIcon = document.createElement('img');
    cartIcon.classList.add('cart-icon');
    cartIcon.src = '/src/assets/images/icon-add-to-cart.svg';
    cartIcon.alt = 'Add to cart icon';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Add to Cart';

    addCartButton.append(cartIcon, buttonSpan);

    const addDessertContorls = addDessert(addCartButton, count);

    addCartButton.onclick = () => {
        count++;
        addCartButton.classList.toggle('inactive');
        addDessertContorls.classList.toggle('inactive');
    }

    bannerContainer.append(cardCover, addCartButton, addDessertContorls);

    return bannerContainer;

}

export default dessertBannerWrapper;