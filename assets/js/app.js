$('.slider_2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 812,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
    centerMode: true,

            }
        },
        {
            breakpoint: 793,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
    centerMode: true,
    speed: 300,
            }
        },
        {
            breakpoint: 564,
            settings: {
    centerMode: true,
    slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
            }
        }
    ]
});