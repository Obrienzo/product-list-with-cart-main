import cartIcon from './assets/images/icon-add-to-cart.svg';

const addCartInit = (count, addCartActive) => {

    const cartButton = document.createElement('button');
    cartButton.classList.add('add-cartBtn');

    const icon = document.createElement('img');
    icon.classList.add('cart-icon');
    icon.src = cartIcon;
    icon.alt = 'Add to cart icon';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Add to Cart';

    cartButton.addEventListener('click', () => {
        cartButton.dispatchEvent(new CustomEvent("add-cart", {
            detail: {
                value: ++count.value,
                addCartActive: false,
            },
            bubbles: true
        }))
    });

    cartButton.append(icon, buttonSpan);

    return cartButton;
}

export default addCartInit;