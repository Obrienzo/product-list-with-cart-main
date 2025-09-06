import bannerCoverChange from "./coverChange";
import addCartInit from "./addCartInit";
import cardControls from "./cardControls";

const dessertBannerWrapper = (object) => {

    let count = {value: 0};
    let addCartActive = true;
    let controls = false;

    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    const cardCover = document.createElement('img');
    cardCover.classList.add('card-cover');
    bannerCoverChange(cardCover, object.image);

    window.addEventListener('resize', () => {
        bannerCoverChange(cardCover, object.image);
    });

    const buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add('btn-wrapper');

    const addCartButton = addCartInit(count.value, addCartActive);

    bannerContainer.addEventListener('add-cart', (ev) => {
        // addCartButton.classList.add('inactive');
        // To get back for the above commented code..
        setBorder(true);
    });

    function setBorder(isOn) {
        isOn ? cardCover.classList.add('border') : cardCover.classList.remove('border')
    }

    bannerContainer.append(cardCover, addCartButton);

    return bannerContainer;

}

export default dessertBannerWrapper;