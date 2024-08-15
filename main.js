document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
     .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load items data: ${response.status}`);
        }
        return response.json();
     })
     .then(collections => {
        let count = 0;

        // Initialize UI elements to be used...
        const dessertCardContainer = document.querySelector('.dessert-list');
        // console.log(collection)
        collections.forEach((collection, index) => {
            const card = desertCard(collection);
            // console.log(card);
            dessertCardContainer.appendChild(card);
        })

     })

    // Create a dessert card
    function desertCard(item) {
        const cardContainer = document.createElement('article');
        cardContainer.setAttribute('class', 'card');

        const bannerSection = document.createElement('section');
        const image = bannerComponent(item);
        bannerSection.appendChild(image);

        // Description section of the card
        const tagContainer = document.createElement('section');
        const span = document.createElement('span');
        span.setAttribute('class', 'product-category');
        span.textContent = item.category;
        const productName = document.createElement('h3');
        productName.setAttribute('class', 'product-name');
        productName.textContent = item.name;
        const productPrice = document.createElement('p');
        productPrice.setAttribute('class', 'product-price');
        productPrice.textContent = item.price;
        tagContainer.appendChild(span);
        tagContainer.appendChild(productName);
        tagContainer.appendChild(productPrice);

        const float = buttonComponent();

        cardContainer.appendChild(bannerSection);
        cardContainer.appendChild(tagContainer);
        cardContainer.appendChild(float);

        return cardContainer;
    }

    // Banner component 
    function bannerComponent(data) {
        const banner = document.createElement('img');
        banner.alt = data.category;
        if (window.innerWidth < 768) {
            banner.src = data.image.mobile;
        } else if (window.innerWidth < 1024) {
            banner.src = data.image.tablet;
        } else {
            banner.src = data.image.desktop;
        }
        return banner;
    }

    // Button component
    function  buttonComponent() {
        const button = document.createElement('button');
        const cartIcon = document.createElement('img');
        const span = document.createElement('span');
        span.textContent = 'Add to Cart';
        cartIcon.src = 'assets/images/icon-add-to-cart.svg';
        button.appendChild(cartIcon);
        button.appendChild(span);
        return button;
    }
})
