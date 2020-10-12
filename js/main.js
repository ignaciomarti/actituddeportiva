$("#carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    lazyLoad:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});