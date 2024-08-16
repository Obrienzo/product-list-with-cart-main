document.addEventListener('DOMContentLoaded', () => {
    let count = 1; //  Initializing the count of products selected...
        const selectProducts = [];
    fetch('data.json')
     .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load items data: ${response.status}`);
        }
        return response.json();
     })
     .then(collections => {

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
        bannerSection.setAttribute('class', 'card-banner');
        const image = bannerComponent(item);
        const float = buttonComponent();
        bannerSection.appendChild(image);
        bannerSection.appendChild(float);

        // Description section of the card
        const tagContainer = document.createElement('section');
        tagContainer.setAttribute('class', 'card-description');
        const span = document.createElement('span');
        span.setAttribute('class', 'product-category');
        span.textContent = item.category;
        const productName = document.createElement('h3');
        productName.setAttribute('class', 'product-name');
        productName.textContent = item.name;
        const productPrice = document.createElement('p');
        productPrice.setAttribute('class', 'product-price');
        productPrice.textContent = `$${item.price.toFixed(2)}`;
        tagContainer.appendChild(span);
        tagContainer.appendChild(productName);
        tagContainer.appendChild(productPrice);

        cardContainer.appendChild(bannerSection);
        cardContainer.appendChild(tagContainer);

        return cardContainer;
    }

    // Banner component containing the product image...
    function bannerComponent(data) {
        const banner = document.createElement('img');
        banner.setAttribute('class', 'banner');
        banner.alt = data.category;
       
        function updateBanner() {
            if (window.innerWidth <= 425) {
                banner.src = data.image.mobile;
                console.log('one')
            } else if (window.innerWidth <= 768) {
                banner.src = data.image.tablet;
                console.log('two')
            } else {
                banner.src = data.image.desktop;
            }
        }

        updateBanner();

        window.addEventListener('resize', updateBanner); // Adding the resize event to make responsive images

        return banner;
    }

    // Button component
    function  buttonComponent() {
        const button = document.createElement('button');
        button.setAttribute('class', 'add-cart-btn');
        const cartIcon = document.createElement('img');
        const span = document.createElement('span');
        span.textContent = 'Add to Cart';
        cartIcon.src = 'assets/images/icon-add-to-cart.svg';
        button.appendChild(cartIcon);
        button.appendChild(span);

        button.onclick = () => {
            button.innerHTML = '';
            button.style.backgroundColor = 'red';
            
            button.style.color = 'white';
            const orderControl = orderButton();
            button.appendChild(orderControl);
            
        }
        return button;
    }

    //Order size button component for selecting the number of selected items...
    function orderButton() {
        const container = document.createElement('div');
        container.setAttribute('class', 'product-size-controler');

        const addButton = document.createElement('button');
        const addIcon = document.createElement('img');
        addIcon.src = 'assets/images/icon-increment-quantity.svg';
        addButton.appendChild(addIcon);
        addButton.onclick = () => {
            count++;
            console.log(count);
            productCount.textContent = `${count}`;
        };
        const subtractButton = document.createElement('button');
        const subtractIcon = document.createElement('img');
        subtractIcon.src = 'assets/images/icon-decrement-quantity.svg';
        subtractButton.appendChild(subtractIcon);
        subtractButton.onclick = () => {
            if (count === 0)  {
                count;
            } else {
                count--;
                productCount.textContent = `${count}`;
            }
        }

        const productCount = document.createElement('span');
        productCount.textContent = `${count}`;
        container.appendChild(subtractButton);
        container.appendChild(productCount);
        container.appendChild(addButton);

        console.log(container);
        return container;

    }
})
