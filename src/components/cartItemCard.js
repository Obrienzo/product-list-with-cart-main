import createCartItem from "./cartItem";
import createConfirmItem from "./confirmItem";

const createCartItemCard = (name, price, count, thumbnail, confirmation=false) => {

    let totalPrice;

    const cartItemWrapper = document.createElement('div');
    cartItemWrapper.classList.add('cartItem-wrapper');

    totalPrice = price * count;

    if (!confirmation) {
        const cartTemplateItem = createCartItem(name, price, count, totalPrice);
        cartItemWrapper.appendChild(cartTemplateItem);
    } else {
        const confirmTemplateItem = createConfirmItem(name, count, price, totalPrice, thumbnail);
        cartItemWrapper.appendChild(confirmTemplateItem);
    }

    return cartItemWrapper;

}

export default createCartItemCard;