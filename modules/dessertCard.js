export class DessertCard {
    // Constructor (Component foundation)
    constructor(data) {
        this.thumbnail = data.image.thumbnail; // to be used if the dessert is selected...
        this.coverMobile = data.image.mobile;
        this.coverTablet = data.image.tablet;
        this.coverDesktop = data.image.desktop;
        this.name = data.name;
        this.category = data.category;
        this.price = parseFloat(data.price);
        this.value = 0;

        // Create DOM element immediately..
        this.component = this.createComponent();
    }

    createCardDetails() {
        const detailsSection = document.createElement('section');
        detailsSection.className = 'card-description';
        detailsSection.innerHTML = `
           <p class="product-category">${this.category}</p>
           <h3 class="product-name">${this.name}</h3>
           <p class="product-price">$${this.price}</p>
        `;

        return detailsSection;
    }

    // Function for creating initial card button state component...
    createButtonInitialState() {
        return (`
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
           <span>Add to Cart</span>
           `);
    }

    addCartEvent(addCartButton) {
        addCartButton.addEventListener('click', (event) => {
            event.stopPropagation();

            this.value = 1;

            addCartButton.style.backgroundColor = 'red';
            addCartButton.innerHTML = '';

            this.decButton = document.createElement('button');
            this.decButton.className = 'dec-btn';
            this.decButton.innerHTML =`
            <img src="assets/images/icon-decrement-quantity.svg" alt="increment button">
            `;


            this.displayValue = document.createElement('span');
            this.displayValue.className = 'Selected-amount';
            this.displayValue.textContent = this.value;

            this.incButton = document.createElement('button');
            this.incButton.className = 'inc-btn';
            this.incButton.innerHTML =`
            <img src="assets/images/icon-increment-quantity.svg" alt="increment button">
            `;

            this.decButton.addEventListener('click', (event) => {
                event.stopPropagation();
                this.value--;

                if (this.value < 1) {
                    addCartButton.style.backgroundColor = 'white';
                    addCartButton.innerHTML = this.createButtonInitialState();
                    this.value = 0;
                } else {
                    this.displayValue.textContent = this.value;
                }
            });

            console.log(`I have picked ${this.value} ${this.name}'s`);
        
            this.incButton.addEventListener('click', (event) => {
                event.stopPropagation();
                this.value++;
                this.displayValue.textContent = this.value;
            });

            addCartButton.append(this.decButton, this.displayValue, this.incButton);
        })
    }

    createFloat() {
        const addCartButton = document.createElement('button');
        addCartButton.className = 'add-cart-btn';

        addCartButton.innerHTML = this.createButtonInitialState();

       this.addCartEvent(addCartButton);

        return addCartButton;
    }

    setImageSource(imageBanner) {
        if (window.innerWidth < 425) {
            imageBanner.src = this.coverMobile;
            console.log('small screen size')
        } else if (window.innerWidth < 768) {
            imageBanner.src = this.coverTablet;
        } else {
            imageBanner.src = this.coverDesktop;
        }
    }

    createImageBanner() {
        // Create responsive image as the user changes screen size...
        const imageBanner = document.createElement('img');
        imageBanner.className = 'banner';
        this.setImageSource(imageBanner);
        
        // Listening for the resize event on the window to change the banner image accordingly...
        window.addEventListener('resize', (event) =>  {
            this.setImageSource(imageBanner);
        });

        return imageBanner;
    }

    createCardBanner() {
        const bannerSection = document.createElement('section');
        bannerSection.className = 'card-banner';

        const cover = this.createImageBanner();
        const float = this.createFloat();

        bannerSection.append(cover, float);

        return bannerSection;

    }

    createComponent() {
        const dessertComponent = document.createElement('article');
        dessertComponent.className = 'dessert-card';

        const firstSection = this.createCardBanner();
        const secondSection = this.createCardDetails();

        dessertComponent.append(firstSection, secondSection);

        return dessertComponent;
    }

     // Rending => placing the card in the dessert-list container..
     render(container) {
        container.appendChild(this.component);
     }
}