import plusSign from './assets/images/icon-increment-quantity.svg'
import minusSign from './assets/images/icon-decrement-quantity.svg'

const cardControls = (count, controls) => {

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

    decrementBtn.addEventListener('click', () => { 
        count.value--;
        countDisplay.textContent = count.value;
        decrementBtn.dispatchEvent(new CustomEvent('reduce-count', {
            detail: { value: count.value },
            bubbles: true,
        }));

        if (count.value <= 0) {
                decrementBtn.dispatchEvent(new CustomEvent('initialize-card', {
                    detail: { value: 0, controls: true},
                    bubbles: true,
                }));
        }
    })

    incrementBtn.addEventListener('click', () => {
        count.value++;
        countDisplay.textContent = count.value;
        incrementBtn.dispatchEvent(new CustomEvent('increase-count', {
            detail: { value: count.value },
            bubbles: true,
        }));
    })


    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    return { controlsWrapper, countDisplay };

}

export default cardControls;