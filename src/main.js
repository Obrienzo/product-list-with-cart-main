import './style.css'
import dessertData from '/data.json';
import dessertCard from './components/dessertCard';
import emptyCartIcon from './assets/images/illustration-empty-cart.svg';
import createCartItemCard from './components/cartItemCard';
import createOrderConfirmation from './components/notification'; 

const app = document.getElementById('app');
const appContent = document.createElement('div');
appContent.classList.add("app-content");

const cartList = []; // This array will contain the dessert that the user has chosen..



const dessertListWrapper = document.createElement('div');
dessertListWrapper.classList.add('dessert-list-wrapper');

const listHeader = document.createElement('div');
const listTag = document.createElement('h1');
listTag.classList.add('list-tag');
listTag.textContent = 'Desserts';

listHeader.appendChild(listTag);

const dessertList = document.createElement('div');
dessertList.classList.add('dessert-list');

dessertData.forEach(dessert => {
  const card = dessertCard(dessert);

  dessertList.appendChild(card);
});

dessertListWrapper.append(listHeader, dessertList);



const cartWrapper = document.createElement('div');
cartWrapper.classList.add('cart-wrapper');

const cartHeader = document.createElement('div');
cartHeader.classList.add('cartList-header');

const cartTitle = document.createElement('h2');
cartTitle.classList.add('cart-title');
cartTitle.textContent = 'Your Cart';

const cartCount = document.createElement('span');
cartCount.classList.add('cart-count');
cartCount.textContent = `(${cartList.length})`;

const cartItemsDisplay = document.createElement('div');
cartItemsDisplay.classList.add('cart-items');

const displayContent = createEmptyCart();
cartItemsDisplay.appendChild(displayContent);

cartHeader.append(cartTitle, cartCount);
cartWrapper.append(cartHeader, cartItemsDisplay);



document.body.addEventListener('add-cart', parentEventHandler);

document.body.addEventListener('reduce-count', parentEventHandler);

document.body.addEventListener('increase-count', parentEventHandler);

document.body.addEventListener('confirm-order', (ev) => {
  const notification = createOrderConfirmation(ev.detail.value);
  document.body.appendChild(notification);
});

document.addEventListener("refresh-selection", (ev) => {
  window.location.reload();
});


appContent.append(dessertListWrapper, cartWrapper);

app.appendChild(appContent);






function createEmptyCart() {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('content-wrapper');

  const illustration = document.createElement('img');
  illustration.src = emptyCartIcon;
  illustration.alt = 'Empty Cart Illustration';

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Your added items will appear here';

  contentWrapper.append(illustration, description);

  return contentWrapper;
}






function updateCart(cartItem) {
  const existing = cartList.find(item => item.name === cartItem.name);

  if (existing) {
    if (cartItem.count === 0) {
      // Remove item
      const index = cartList.findIndex(item => item.name === cartItem.name);
      cartList.splice(index, 1);
    } else {
      // Update Count
      existing.count = cartItem.count;
    }
  } else if (cartItem.count > 0) {
    // Add new item
    cartList.push(cartItem);
  }
}






function calculateItemsCount(display, myArray) {
  display.textContent = `(${myArray.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)})`;
}






function createCartObject(name, price, count, thumbnail) {
  const cartItem = {
    name,
    price,
    count,
    thumbnail
  };

  return cartItem;
}






function parentEventHandler(ev) {
  const item = createCartObject(ev.detail.name, ev.detail.price, ev.detail.value, ev.detail.thumbnail);

  updateCart(item)
  calculateItemsCount(cartCount, cartList);
  updateCartDisplayUi();

}






function updateCartDisplayUi() {
  cartItemsDisplay.innerHTML = '';

  const pickWrapper = document.createElement('div');
  pickWrapper.classList.add('pick-wrapper');
  if (cartList.length === 0) {
    cartItemsDisplay.appendChild(createEmptyCart());
  } else {
    cartList.forEach(item => {
      const itemDiv = createCartItemCard(item.name, item.price, item.count);
      pickWrapper.appendChild(itemDiv);
    });
    const totalWrapper = document.createElement('div');
    totalWrapper.classList.add('total-wrapper');
    totalWrapper.innerHTML = `<p>Order Total</p> <p class="total-price">$${calculateCartTotal(cartList)}</p>`;

    const productsTag = document.createElement('div');
    productsTag.classList.add("products-tag");
    productsTag.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg> <p class="tag-description">This is a <strong>carbon-neutral</strong> delivery</p>`;

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add("btn", "confirm-btn");
    confirmBtn.textContent = "Confirm Order";

    confirmBtn.addEventListener('click', () => {
      document.body.classList.add("floater");

      confirmBtn.dispatchEvent(new CustomEvent("confirm-order", {
        detail: {
          value: cartList
        },
        bubbles: true
      }));
    });

    cartItemsDisplay.append(pickWrapper, totalWrapper, productsTag, confirmBtn);
  }
} 






export function calculateCartTotal(myArray) {
  const total = myArray.reduce((sum, item) => sum + item.price * item.count, 0);

  return total.toFixed(2);
}


