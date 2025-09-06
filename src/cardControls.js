import plusSign from './assets/images/icon-increment-quantity.svg'
import minusSign from './assets/images/icon-decrement-quantity.svg'

const cardControls = (count, setBorder) => {

    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('controls-wrapper');

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

    decrementBtn.addEventListener('click', () => {
        count.value--;
        
        if (count.value < 1) {
            count.value = 0;
            setBorder(false);
        }
        countDisplay.textContent = count.value;
    })

    incrementBtn.addEventListener('click', () => {
        count.value++;
        countDisplay.textContent = count.value;
    })


    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    return controlsWrapper;

}

export default cardControls;