import bannerCoverChange from "./coverChange";
import addDessert from "./addCart";

const dessertBannerWrapper = (object) => {

    let count = { value: 0 }; // Use an object!

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    const cardCover = document.createElement('img');
    cardCover.classList.add('card-cover');
    bannerCoverChange(cardCover, object.image);

    window.addEventListener('resize', () => {
        bannerCoverChange(cardCover, object.image);
    });

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cartBtn');

    const cartIcon = document.createElement('img');
    cartIcon.classList.add('cart-icon');
    cartIcon.src = '/src/assets/images/icon-add-to-cart.svg';
    cartIcon.alt = 'Add to cart icon';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Add to Cart';

    addCartButton.append(cartIcon, buttonSpan);

    const addDessertContorls = addDessert(addCartButton, count, setBorder, object, createDessertObject);

    addCartButton.onclick = () => {
        count.value++;
        addCartButton.classList.toggle('inactive');
        addDessertContorls.classList.toggle('inactive');
        // Update the count display to show 1
        const countDisplay = addDessertContorls.querySelector('.count-display');
        if (countDisplay) countDisplay.textContent = count.value;
        setBorder(true);
        console.log(`${object.name}, are ${count.value}`);
    }

    function setBorder(isOn) {
        isOn ? cardCover.classList.add('border') : cardCover.classList.remove('border')
    }

    function createDessertObject(object, count) {
        return {
            name: object.name,
            price: object.price,
            count: count,
            thumbnail: object.image.thumbnail
        }
    }

    bannerContainer.append(cardCover, addCartButton, addDessertContorls);

    return bannerContainer;

}

export default dessertBannerWrapper;