import './style.css'
import dessertData from '/data.json';
import dessertCard from './dessertCard';

const app = document.getElementById('app');

let cartList = [];

const dessertListWrapper = document.createElement('div');
dessertListWrapper.classList.add('dessert-list-wrapper');

const cartWrapper = document.createElement('div');
cartWrapper.classList.add('cartWrapper');

const cartHeader = document.createElement('div');
cartHeader.classList.add('cart-header');

const cartTitle = document.createElement('h2');
cartTitle.classList.add('cart-title');
cartTitle.textContent = 'Your Cart';

const cartCount = document.createElement('span');
cartCount.textContent = `(${cartList.length})`;

cartHeader.append(cartTitle, cartCount);
cartWrapper.appendChild(cartHeader);

dessertData.forEach(dessert => {
  const card = dessertCard(dessert);

  dessertListWrapper.appendChild(card);
})

app.append(dessertListWrapper, cartWrapper)

app.addEventListener('add-cart', (ev) => {
  console.log(ev.detail.value, ev.detail.id);
})

app.addEventListener('increase-count', (ev) => {
  console.log(ev.detail.value, ev.detail.id);
})

app.addEventListener('reduce-count', (ev) => {
  console.log(ev.detail.value, ev.detail.id);
})



