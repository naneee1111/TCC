$(document.getElementById("carrossel").innerHTML).ready(function () {
    $('.slider-principal').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 10000
    });
});