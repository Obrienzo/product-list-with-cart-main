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

      //Creating a function for the content of the addCart button
      function createButtonChildren() {
        return (`
          <img src='assets/images/icon-add-to-cart.svg' alt='Add Cart Icon' />
          <span>Add to Cart</span>
          `)
      }


      // Create the add Cart button 
      function createAddCartButton() {
        const button = document.createElement('button');
        button.setAttribute('class', 'add-cart-btn');
        button.innerHTML = createButtonChildren();
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



      //Create head count operation uing the increment and the decrement buttons
      function createButton(className, iconSrc, clickhandler) {
        const button = document.createElement('button');
        button.setAttribute('class', className);
        icon.src = iconSrc;
        button.appendChild(icon);
        button.onclick = clickhandler;
        return button;
      }


      //Create a widget that generate the number of dessert product selected...
      function getDessertAmount(button) {
        let count = 1;

        const computedCount = document.createElement('span');
        computedCount.setAttribute('class', 'product-count');
        computedCount.textContent = count;

        const decrementBtn = createButton('operation-btn', 'assets/image/icon-decrement-quantity.svg', () => {
          if (count > 1) {
            coun--;
            computedCount.textContent = count
          }
        });

        const incrementBtn = createButton('operation-btn', 'asset/images/icon-increment-quantity.svg', () => {
          count++;
          computedCount.textContent = count;
        });

        button.appendChild(decrementBtn);
        button.appendChild(computedCount);
        button.appendChild(incrementBtn);
      }

})