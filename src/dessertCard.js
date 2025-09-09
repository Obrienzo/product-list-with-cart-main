import createBannerWrapper from "./cardBanner";
import createDetails from "./cardDetails";

const dessertCard = (object) => {

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('dessert-card');
    
    const banner = createBannerWrapper(object);
    const details = createDetails(object);

    cardWrapper.append(banner, details);

    return cardWrapper;

}

export default dessertCard;