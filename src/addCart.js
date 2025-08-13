
const addDessert = (addCartButton, count) => {

    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('controls-wrapper', 'inactive');

    addCartButton.classList.contains('inactive') ? console.log('hello') : '';

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('decr-btn');
    const decrementLogo = document.createElement('img');
    decrementLogo.src = '/src/assets/images/icon-decrement-quantity.svg';
    decrementLogo.alt = 'Decrement sign';
    decrementBtn.appendChild(decrementLogo);

    const countDisplay = document.createElement('p');
    countDisplay.classList.add('count-display');
    countDisplay.textContent = count;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('incr-btn');
    const incrementLogo = document.createElement('img');
    incrementLogo.src = '/src/assets/images/icon-increment-quantity.svg';
    incrementLogo.alt = 'Increment sign';
    incrementBtn.appendChild(incrementLogo);

    decrementBtn.onclick = () => {
        count--;
        if (count < 1) {
            count = 0;
            controlsWrapper.classList.toggle('inactive');
            addCartButton.classList.toggle('inactive');
        }
        countDisplay.textContent = count;
    }

    incrementBtn.onclick = () => {
        count++;
        countDisplay.textContent = count;
    }

    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    return  controlsWrapper;
}


export default addDessert;