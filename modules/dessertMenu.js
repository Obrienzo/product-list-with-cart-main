import { DessertCard } from "./dessertCard.js";

export class DessertMenu {
    constructor() {
        this.container = document.querySelector('.dessert-list');
        this.desserts = [];
    }

    async loadData() {
        // Fetch data from JSON
        const response = await fetch('data.json');
        const data = await response.json();
        this.desserts = data;
    }

    createCards() {
        // Create cards instances
        return this.desserts.map(dessert => new DessertCard(dessert));
    }

    render() {
        this.container.innerHTML = '';

        this.createCards().forEach(card => {
            card.render(this.container);
        });
    }

    async initialize() {
        await this.loadData();
        this.render();
    }
}