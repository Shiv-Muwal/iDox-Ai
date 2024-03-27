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