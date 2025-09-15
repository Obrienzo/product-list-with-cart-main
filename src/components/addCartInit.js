import cartIcon from '../assets/images/icon-add-to-cart.svg';

const createCartButton = (count, addCartActive, object) => {

    const cartButton = document.createElement('button');
    cartButton.classList.add('add-cartBtn');

    const icon = document.createElement('img');
    icon.classList.add('cart-icon');
    icon.src = cartIcon;
    icon.alt = 'Add to cart icon';

    const buttonSpan = document.createElement('span');
    buttonSpan.textContent = 'Add to Cart';

    /*
        Creating a Custom Event to be able to 
        make an announcement to the DOM of the change in the state
        of the add button element...
    */
    cartButton.addEventListener('click', () => {
        count.value++;

        cartButton.dispatchEvent(new CustomEvent("add-cart", {
            detail: { 
                value: count.value,
                thumbnail: object.image.thumbnail,
                name: object.name,
                price: object.price,
                addCartActive: false 
            },
            bubbles: true
        }));
        
    });

    cartButton.append(icon, buttonSpan);

    return cartButton;
}

export default createCartButton;