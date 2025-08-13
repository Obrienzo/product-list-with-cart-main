
const bannerCoverChange = (wrapper, image) => {

    // Handling the responsive image change when the width windows dimensions change...
    if (window.innerWidth < 768) {
        wrapper.src = image.mobile;
        console.log('mobile');
    } else if (window.innerWidth < 1024) {
        wrapper.src = image.tablet;
        console.log('tablet');
    } else {
        wrapper.src = image.desktop;
        console.log('desktop');
    }
}

export default bannerCoverChange;