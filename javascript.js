$(document).ready(function(){
    //navbar transisi scroll
    $(window).scroll(function(){
        let height = $(window).scrollTop();

        if (height > 50 ){
            $('.navbar').addClass('bg-dark');
        } else {
            $('.navbar').removeClass('bg-dark')
        };

    });
    //Akhir navbar transisi scroll

    //Item pada carousel Big Reasearch
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        smartSpeed: 1000,
        responsive:{
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });
    //Akhir Item pada carousel Big Reasearch

});



