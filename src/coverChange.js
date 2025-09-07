
const bannerCoverChange = (wrapper, image) => {

    // Functionality to display the right image following the dimensions of the window...
    if (window.innerWidth < 768) {
        wrapper.src = image.mobile;
    } else if (window.innerWidth < 1024) {
        wrapper.src = image.tablet;
    } else {
        wrapper.src = image.desktop;
    }
}

export default bannerCoverChange;