import './style.css'
import dessertData from '/data.json';
import dessertCard from './dessertCard';
import emptyCartIcon from './assets/images/illustration-empty-cart.svg'

const app = document.getElementById('app');

let cartList = [];

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




