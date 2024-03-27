$('.slider_1').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
});
$('.slider_2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    variableWidth:true,
    centerMode:true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
    centerMode:false,
          }
        },
        {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
      centerMode:false,
            }
          },
    ]
});
const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(a => a.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.remove("overflow-hidden");
    menuicon.classList.toggle("show");
}))
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
    menuicon.classList.toggle("show");
});