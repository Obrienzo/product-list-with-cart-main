import dessertBannerWrapper from "./cardBanner";
import detailsData from "./cardDetails";

const dessertCard = (object) => {

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('dessert-card');
    
    const banner = dessertBannerWrapper(object.image);
    const details = detailsData(object.name, object.category, object.price);

    cardWrapper.append(banner, details);

    return cardWrapper;

}

export default dessertCard;