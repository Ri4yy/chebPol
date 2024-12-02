document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-certificate', {

        initialSlide: 2,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: false
        },

        breakpoints: {
            320: {
                allowTouchMove: true,
                slidesPerView: 1,
                initialSlide: 0,
            },
            480: {
                allowTouchMove: true,
                slidesPerView: 2.5
            },
            768: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1024: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1280: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1921: {
                allowTouchMove: true,
                slidesPerView: 4
            },
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
