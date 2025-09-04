const addDessert = (addCartButton, count, setBorder, object, createObject) => {

    const controlsWrapper = document.createElement('div');
    controlsWrapper.classList.add('inactive', 'controls-wrapper');

    const decrementBtn = document.createElement('button');
    decrementBtn.classList.add('decr-btn');
    const decrementLogo = document.createElement('img');
    decrementLogo.src = '/src/assets/images/icon-decrement-quantity.svg';
    decrementLogo.alt = 'Decrement sign';
    decrementBtn.appendChild(decrementLogo);

    const countDisplay = document.createElement('p');
    countDisplay.classList.add('count-display');
    countDisplay.textContent = count.value;

    const incrementBtn = document.createElement('button');
    incrementBtn.classList.add('incr-btn');
    const incrementLogo = document.createElement('img');
    incrementLogo.src = '/src/assets/images/icon-increment-quantity.svg';
    incrementLogo.alt = 'Increment sign';
    incrementBtn.appendChild(incrementLogo);

    decrementBtn.onclick = () => {
        count.value--;
        if (count.value < 1) {
            count.value = 0;
            controlsWrapper.classList.toggle('inactive');
            addCartButton.classList.toggle('inactive');
            setBorder(false);
        }
        countDisplay.textContent = count.value;
        console.log(createObject(object, count.value));
    }

    incrementBtn.onclick = () => {
        count.value++;
        countDisplay.textContent = count.value;
        console.log(createObject(object, count.value));
    }

    

    controlsWrapper.append(decrementBtn, countDisplay, incrementBtn);

    return  controlsWrapper;
}

export default addDessert;