import './style.css'
import dessertData from '/data.json';
import dessertCard from './dessertCard';

const app = document.getElementById('app');

dessertData.forEach(dessert => {
  const card = dessertCard(dessert);

  app.appendChild(card);
})
