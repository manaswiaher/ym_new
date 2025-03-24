



$.noConflict();

 

jQuery(document).ready(function ($) {

   


    $(window).scroll(function () {
        var ScrollTop = jQuery(window).scrollTop()

        if (ScrollTop > 70) {
            jQuery('body').addClass('scrollingWin');
        } else {
            jQuery('body').removeClass('scrollingWin');
        }
    });
  

   


    function openMenu() {
        //  $(this).parent('.menu-bar').addClass('fa-times text-white triggerM');

        $('body').addClass('menuOpen');
        $('.burger').toggleClass('fa-bars fa-times  text-dark');

    }


    function closeMenu() {

        $('body').removeClass('menuOpen');
        $('.burger').toggleClass('fa-bars fa-times  text-dark');
    }

    $('.menu-backdrop').click(function() {
        $(this).fadeOut('fast');
        closeMenu()
    });

    $('#toggleMenu').click(function() {

        //$('.main-nav').stop().toggleClass('toggleNav');
        //$(this).toggleClass('');


        if ($(this).is(':checked')) {
            openMenu()
        } else {
            closeMenu()
        }



    });



    $('.sub-menu>a').click(function(event) {
        event.preventDefault();
    });

    //$('.sub-menu>a').stop().mouseover(function() {
         
    //    $(this).stop().next('ul').show().animate({
    //        'top':'100%',
    //        'opacity':1
    //    },200);
    //});

    //$('.sub-menu').stop().mouseleave(function() {
         
    //    $(this).stop().children('ul').animate({
    //        'top':'120%',
    //        'opacity':0,
    //        'visibility':'hidden'
    //    },100).fadeOut();
    //});


   
    var owlp = jQuery('.owl-project-carousel');
    owlp.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    var owl = jQuery('#owl_home');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:false,
        nav: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: false, animateOut: 'fadeOut'
    });
    var owl2 = jQuery('#owl_home2');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true, animateOut: 'fadeOut'
    });

    // $('.sub-menu').click(function() {

    //     $('.sub-menu').children('ul').hide('fast');

    //     if ($(this).children('ul').is(':visible')) {
    //         $(this).children('ul').hide('fast');
    //     } else {
    //         $(this).children('ul').show('fast');
    //     }



    // });

    // $(document).on("click", function(event) {
    //     var $trigger = $('.sub-menu');
    //     if ($trigger !== event.target && !$trigger.has(event.target).length) {
    //         $('.nav-dropdown').hide('fast');
    //     }
    // });

   

    var getYear = new Date();
    var year = getYear.getFullYear();
    $('.getYear').html(year)

 

    jQuery('#ContentPlaceHolder1_lnk_showcount')[0].click();

});