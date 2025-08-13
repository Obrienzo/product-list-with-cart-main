
const addDessert = (count) => {
    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('contorls-wrapper');

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('decr-btn');
    const decrementLogo = document.createElement('img');
    decrementLogo.src = '/assets/images/icon-decrement-quantity.svg';
    decrementLogo.alt = 'Decrement icon';
    decrementBtn.appendChild(decrementLogo);

    const countDisplay = document.createElement('p');
    countDisplay.classList.add('count-display');
    countDisplay.textContent = count;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('incr-btn');
    const incrementLogo = document.createElement('img');
    incrementLogo.src = '/assets/images/icon-increment-quantity.svg';
    incrementLogo.alt = 'Increment icon';
    incrementBtn.appendChild(incrementLogo);

    decrementBtn.onclick = () => {
        count--;
    }

    incrementBtn.onclick = () => {
        count++;
    }

    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    return controlsWrapper;

}

export default addDessert;