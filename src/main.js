import './style.css'
import dessertData from '/data.json';
import dessertCard from './dessertCard';
import emptyCartIcon from './assets/images/illustration-empty-cart.svg'

const app = document.getElementById('app');

const cartList = [];

const dessertListWrapper = document.createElement('div');
dessertListWrapper.classList.add('dessert-list-wrapper');

const listHeader = document.createElement('div');
const listtaag = document.createElement('h1');
listtaag.classList.add('list-tag');
listtaag.textContent = 'Desserts';

listHeader.appendChild(listtaag);
dessertListWrapper.appendChild(listHeader);

const cartWrapper = document.createElement('div');
cartWrapper.classList.add('cart-wrapper');

const cartHeader = document.createElement('div');
cartHeader.classList.add('cartList-header');

const cartTitle = document.createElement('h2');
cartTitle.classList.add('cart-title');
cartTitle.textContent = 'Your Cart';

const cartCount = document.createElement('span');
cartCount.textContent = `(${cartList.length})`;

const cartItemsDisplay = document.createElement('div');
cartItemsDisplay.classList.add('cart-items');

const displayContent = createEmptyCart();
cartItemsDisplay.appendChild(displayContent);

cartHeader.append(cartTitle, cartCount);
cartWrapper.append(cartHeader, cartItemsDisplay);

const dessertList = document.createElement('div');
dessertList.classList.add('dessert-list');

app.addEventListener('add-cart', parentEventHandler);

app.addEventListener('reduce-count', parentEventHandler);

app.addEventListener('increase-count', parentEventHandler);


dessertData.forEach(dessert => {
  const card = dessertCard(dessert);

  dessertList.appendChild(card);
});

dessertListWrapper.appendChild(dessertList);

app.append(dessertListWrapper, cartWrapper);



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
  display.textContent = myArray.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
}


function createCartItem(name, price, count) {
  const cartItem = {
    name,
    price,
    count
  };

  return cartItem;
}

function parentEventHandler(ev) {
  const item = createCartItem(ev.detail.name, ev.detail.price, ev.detail.value);

  updateCart(item)
  calculateItemsCount(cartCount, cartList);
}




