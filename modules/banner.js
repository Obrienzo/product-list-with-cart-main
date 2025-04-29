import { buttonInitialState } from "./updateButton.js";

export function banner(image, count) {
    const bannerSection = document.createElement('section');
    bannerSection.classList.add('card-banner');

    const imageBanner = document.createElement('img');
    imageBanner.classList.add('banner');
    setImageSource(imageBanner, image);
    

    window.addEventListener('resize', (ev) => {
        setImageSource(imageBanner, image);
    });

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cart-btn');
    addCartButton.innerHTML = buttonInitialState();

    addCartButton.addEventListener('click', (event) => {
        event.stopPropagation();
        count = 1;

        addCartButton.style.backgroundColor = 'red';
        addCartButton.innerHTML = '';

        const decButton = document.createElement('button');
        decButton.classList.add('dec-btn');
        decButton.innerHTML = `
        <img src="assets/images/icon-decrement-quantity.svg" alt="increment button">
        `;

        const displayValue = document.createElement('span');
        displayValue.classList.add = 'selected-amount';
        displayValue.textContent = count;

        const incButton = document.createElement('button');
        incButton.classList.add('inc-btn');
        incButton.innerHTML = `
        <img src="assets/images/icon-increment-quantity.svg" alt="increment button">
        `;

        decButton.addEventListener('click', (ev) => {
            ev.stopPropagation();
            count--;
            displayValue.textContent = count;

            if (count < 1) {
                addCartButton.style.backgroundColor = 'white';
                addCartButton.innerHTML = buttonInitialState();
                count = 0;
            }
        });

        incButton.addEventListener('click', (ev) => {
            ev.stopPropagation();
            count++;
            displayValue.textContent = count;
        });

        addCartButton.append(decButton, displayValue, incButton);
    });


    bannerSection.append(imageBanner, addCartButton);

    return bannerSection;


}





function setImageSource(imageBanner, image) { // Function for setting responsive images for the adequate medium...
    if (window.innerWidth < 425) {
        imageBanner.src = image.mobile;
    } else if (window.innerWidth < 768) {
        imageBanner.src = image.tablet;
    } else {
        imageBanner.src = image.desktop;
    }
}