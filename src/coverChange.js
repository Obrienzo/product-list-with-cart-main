
const bannerCoverChange = (wrapper, image) => {

    // Handling the responsive image change when the width windows dimensions change...
    if (window.innerWidth < 768) {
        wrapper.src = image.mobile;
    } else if (window.innerWidth < 1024) {
        wrapper.src = image.tablet;
    } else {
        wrapper.src = image.desktop;
    }
}

export default bannerCoverChange;