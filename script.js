

$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infine:true,
        arrows:false
        
    });
});


$(document).ready(function () {
    $('.cardplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infine:true,
        arrows:true
        
    });
});