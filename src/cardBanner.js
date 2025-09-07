import bannerCoverChange from "./coverChange";
import addCartInit from "./addCartInit";
import cardControls from "./cardControls";

const dessertBannerWrapper = (object) => {

    // Dessert card initial states...
    let count = {value: 0};
    let addCartActive = true;
    let controls = false;
    const dessertOjbect = {};

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    const cardCover = document.createElement('img');
    cardCover.classList.add('card-cover');
    bannerCoverChange(cardCover, object.image);

    window.addEventListener('resize', () => {
        bannerCoverChange(cardCover, object.image);
    });

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add('btns-wrapper');

    const addCartButton = addCartInit(count, addCartActive, object.name);
    const { controlsWrapper: itemControls, countDisplay} = cardControls(count, controls, object.name); // implementing destructuring to expose the value of the count display element to the parent wrapper...

    buttonsWrapper.append(addCartButton,itemControls);

    /*
        The parent element bannerContainer is listening for the CustomEvent
        emmited by the children of the buttonWrapper element...
    */

    bannerContainer.addEventListener('add-cart', (ev) => {
        addCartButton.classList.add('inactive');
        itemControls.classList.remove('inactive');
        setBorder(true);
        countDisplay.textContent = ev.detail.value;
    });

    bannerContainer.addEventListener('reduce-count', (ev) => {
        updateCount(ev.detail.value);
    });

    bannerContainer.addEventListener('increase-count', (ev) => {
        updateCount(ev.detail.value);
    });

    bannerContainer.addEventListener('initialize-card', (ev) => {
        updateCount(ev.detail.value);
        count.value = 0;
        addCartButton.classList.remove('inactive');
        itemControls.classList.add('inactive');
        setBorder(false);
    });

    // Handling the toggle of the border around the banner, when the add button element is clicked....
    function setBorder(isOn) {
        isOn ? cardCover.classList.add('border') : cardCover.classList.remove('border')
    }

    // Function to update the count.value displayed inside the countDisplay element...
    function updateCount(value) {
        countDisplay.textContent = value;
    }

    bannerContainer.append(cardCover, buttonsWrapper);

    return bannerContainer;

}

export default dessertBannerWrapper;