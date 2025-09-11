import plusSign from './assets/images/icon-increment-quantity.svg'
import minusSign from './assets/images/icon-decrement-quantity.svg'

const createControls = (count, controls, object) => {

    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('controls-wrapper', 'inactive');

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('decr-btn');
    const decrementLogo = document.createElement('img');
    decrementLogo.src = minusSign;
    decrementLogo.alt = 'Decrement Sign';
    decrementBtn.appendChild(decrementLogo);

    const countDisplay = document.createElement('p');
    countDisplay.classList.add('count-display');
    countDisplay.textContent = count.value;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('incr-btn');
    const incrementLogo = document.createElement('img');
    incrementLogo.src = plusSign;
    incrementLogo.alt = 'Increment Sign';
    incrementBtn.appendChild(incrementLogo);

    /*
        After clicking the below element the user is
        generating Custom Events so that the change that
        the below elements produce can be heard throughout 
        the DOM and be used in our cart component...
    */
    decrementBtn.addEventListener('click', () => { 
        count.value--;
        countDisplay.textContent = count.value;
        decrementBtn.dispatchEvent(new CustomEvent('reduce-count', {
            detail: { 
                value: count.value,
                thumbnail: object.image.thumbnail,
                name: object.name,
                price: object.price 
            },
            bubbles: true,
        }));

        if (count.value === 0) {
                decrementBtn.dispatchEvent(new CustomEvent('initialize-card', {
                    detail: { 
                        value: count.value,
                        thumbnail: object.image.thumbnail,
                        name: object.name,
                        price: object.price,  
                        controls: true 
                    },
                    bubbles: true,
                }));
        }
    })

    incrementBtn.addEventListener('click', () => {
        count.value++;
        countDisplay.textContent = count.value;
        incrementBtn.dispatchEvent(new CustomEvent('increase-count', {
            detail: { 
                value: count.value,
                name: object.name,
                price: object.price
            },
            bubbles: true,
        }));
    })


    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    // Returning an object containing countDisplay so that it can be visible in the global scope..
    return { controlsWrapper, countDisplay };

}

export default createControls;