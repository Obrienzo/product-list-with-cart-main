document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
            throw new Error(`There seems to be a problem with loading the data: ${response.status}`);
        }

        return response.json();
      })
      .then(collections => {
        // console.log(collections);
        collections.forEach((collection, index) => {
            const card = createDessertCard(collection);
            const cardsWrapper = document.querySelector('.dessert-list');
            cardsWrapper.appendChild(card);
        })
      })
      .catch(error => console.error(`Fetch problem: ${error.message}`));


      // Defining all the UI elements that will displayed inside a dessert card.
      function createDessertCard(data) {
        const article = document.createElement('article');
        article.setAttribute('class', 'dessert-card');

        const firstSection = showDessertBanner(data);
        const secondSection = showDessertDetails(data);

        article.appendChild(firstSection);
        article.appendChild(secondSection);

        return article;
      }

      // Show the dessert card first section: The dessert item Banner...
      function showDessertBanner(data) {
        const section = document.createElement('section');
        section.setAttribute('class', 'card-banner');
        const bannerImage = document.createElement('img');
        bannerImage.setAttribute('class', 'banner');

        // Create a condition that checks the window size to display the corresponding image..
        function checkWindowSize() {
            // Conditionl statement..
            if (window.innerWidth <= 425) {
                bannerImage.src = data.image.mobile;
            } else if (window.innerWidth <= 768) {
                bannerImage.src = data.image.tablet;
            } else {
                bannerImage.src = data.image.desktop;
            }
        }

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        const float = createAddCartButton();

        section.appendChild(bannerImage);
        section.appendChild(float);

        return section;
      }


      // Create the add Cart button 
      function createAddCartButton() {
        const button = document.createElement('button');
        button.setAttribute('class', 'add-cart-btn');
        button.innerHTML = `
        <img src='assets/images/icon-add-to-cart.svg' alt='Add Cart Icon' />
        <span>Add to Cart</span>
        `;
        // console.log(button)
        button.onclick = () => {
            // console.log('Add to card button clicked!');
            button.innerHTML = '';
            button.style.backgroundColor = '#00aac1';
            getDessertAmount(button);
        }
        return button;
      }


      // Create the dessert card second section with details about the product...
      function showDessertDetails(data) {
        const section = document.createElement('section');
        section.setAttribute('class', 'card-description');

        const dessertCategory = document.createElement('p');
        dessertCategory.setAttribute('class', 'product-category');
        dessertCategory.textContent = data.category;
        // console.log(dessertCategory)

        const dessertName = document.createElement('h3');
        dessertName.setAttribute('class', 'product-name');
        dessertName.textContent = data.name;

        const dessertPrice = document.createElement('code');
        dessertPrice.setAttribute('class', 'product-price');
        dessertPrice.textContent = `$${data.price.toFixed(2)}`;

        section.appendChild(dessertCategory);
        section.appendChild(dessertName);
        section.appendChild(dessertPrice);

        return section;
      }


      //Create a widget that generate the number of dessert product selected...
      function getDessertAmount(button) {
        let count = 1;

        const decrementBtn = document.createElement('button');
        decrementBtn.setAttribute('class', 'operation-btn');
        const decrementIcon = document.createElement('img');
        decrementIcon.src = 'assets/images/icon-decrement-quantity.svg';
        decrementBtn.appendChild(decrementIcon);
        // console.log(decrementBtn);

        const computedCount = document.createElement('span');
        computedCount.setAttribute('class', 'product-count');
        computedCount.textContent = count;

        const incrementBtn = document.createElement('button');
        incrementBtn.setAttribute('class', 'operation-btn')
        const incrementIcon = document.createElement('img');
        incrementIcon.src = 'assets/images/icon-increment-quantity.svg';
        incrementBtn.appendChild(incrementIcon);
        // console.log(incrementBtn);

        decrementBtn.onclick = (event) => {
            console.log('Decrement cliked btn');
            if (count > 1) {
                count--;
            }
        }

        incrementBtn.onclick = (event) => {
            // console.log('Increment cliked btn')
            event.preventDefault();
            count ++;
            console.log(count);
        }

        button.appendChild(decrementBtn);
        button.appendChild(computedCount);
        button.appendChild(incrementBtn);
      }

})