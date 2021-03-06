/** ==========================================================================================

  Project :   Fondex - Responsive Multi-purpose HTML5 Template
  Version :   Bootstrap 4.1.1
  Author :    Themetechmount

========================================================================================== */

/** ===============

1. Preloader
2. TopSearch
3. Fixed-header
4. Menu
5. Number rotator
6. Enables menu toggle
7. Skillbar
8. Tab
9. Accordion
10. Isotope
11. Prettyphoto
12. owlCarousel

    .. Services slide
    .. Team slide
    .. Testimonial slide2
    .. Blog slide
    .. Clients-slide
    .. Portfolio-slide
    .. Testimonial slide
    .. Portfolio-img-slide
    .. Clients-slide2

13. Back to top 

 =============== */



(function($) {

   'use strict'


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/* TopSearch
/*------------------------------------------------------------------------------*/

    
    jQuery( ".ttm-header-search-link a" ).addClass('sclose');   
    
    jQuery( ".ttm-header-search-link a" ).on('click', function(event ) {  
  
        jQuery(".field.searchform-s").focus();  
        
        if (jQuery('.ttm-header-search-link a').hasClass('sclose')) {   
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-search').addClass('ti-close');
            jQuery(this).removeClass('sclose').addClass('open');    
            jQuery(".ttm-search-overlay").addClass('st-show');                  
        } else {
            jQuery(this).removeClass('open').addClass('sclose');
            jQuery( ".ttm-header-search-link a i" ).removeClass('ti-close').addClass('ti-search');  
            jQuery(".ttm-search-overlay").removeClass('st-show');   
        }   
        event.preventDefault(); 
    });


    $('ul li:has(ul)').addClass('has-submenu');
    $('ul li ul').addClass('sub-menu');


    $("ul.dropdown li").on({

        mouseover: function(){
           $(this).addClass("hover");
        },  
        mouseout: function(){
           $(this).removeClass("hover");
        }, 

    });
    
    var $menu = $('#menu'), $menulink = $('#menu-toggle-form'), $menuTrigger = $('.has-submenu > a');
    $menulink.on('click',function (e) {

        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.on('click',function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass('active').next('ul').toggleClass('active');
    });

    $('ul li:has(ul)');


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/


$(window).scroll(function(){
    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {
            $('.ttm-stickable-header').addClass('fixed-header');
            $('.ttm-stickable-header').addClass('visible-title');
        }
        else {

            $('.ttm-stickable-header').removeClass('fixed-header');
            $('ttm-stickable-header').removeClass('visible-title');
            }
    }
});






/*------------------------------------------------------------------------------*/
/* owlCarousel
/*------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/

// ===== Scroll to Top ==== 
jQuery('#totop').hide();
jQuery(window).scroll(function() {
    "use strict";
    if (jQuery(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        jQuery('#totop').fadeIn(200);    // Fade in the arrow
        jQuery('#totop').addClass('top-visible');
    } else {
        jQuery('#totop').fadeOut(200);   // Else fade out the arrow
        jQuery('#totop').removeClass('top-visible');
    }
});
jQuery('#totop').on('click', function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});


 $(function() {
    
    });
})(jQuery);

// Add class on body on humberger click

$(".ttm-menu-toggle-block").click(function(){
    $("body").toggleClass("over_hidden");
    $(".backface").toggleClass("bg_overlay");
});

$('#Investor').owlCarousel({
    loop:true,
    margin:10,
   
    nav:false,
    autoplay:true,
    smartSpeed: 1000,
    startPosition:1,

    responsive:{
        0:{
            items:1
        },
        375:{
            items:1
        },
        600:{
            items:3 
        },
        1000:{
            items:3
        }
    }
})

$('#grap_sld').owlCarousel({
    loop:true,
    margin:0,
   
    nav:false,
    autoplay:true,
    smartSpeed: 1000,
    startPosition:1,

    responsive:{
        0:{
            items:1
        },
        375:{
            items:1
        },
        600:{
            items:1 
        },
        1000:{
            items:1
        }
    }
})


$('#mediacenter').owlCarousel({
    loop:true,
    margin:10,
   
    nav:false,
    autoplay: true,
    smartSpeed: 1000,
    startPosition:1,

    responsive:{
        0:{
            items:1
        },
        375:{
            items:1
        },
        600:{
            items:3 
        },
        1000:{
            items:3
        }
    }
})

$('#newspage').owlCarousel({
    loop:true,
    margin:10,
   
    nav:true,
    autoplay:false,
    smartSpeed: 1000,
    startPosition:1,
    
    responsive:{
        0:{
            items:1
        },
        375:{
            items:1
        },
        600:{
            items:1 
        },
        1000:{
            items:1
        }
    }
});



document.addEventListener("DOMContentLoaded", () => {
	function counter(id, start, end, duration) {
	 let obj = document.getElementById(id),
	  current = start,
	  range = end - start,
	  increment = end > start ? 1 : -1,
	  step = Math.abs(Math.floor(duration / range)),
	  timer = setInterval(() => {
	   current += increment;
	   obj.textContent = current;
	   if (current == end) {
		clearInterval(timer);
	   }
	  }, step);
	}
	counter("count1", 0, 400, 3000);
	counter("count2", 0, 50, 2500);
	counter("count3", 0, 40, 3000);
	counter("count4", 0, 500, 3000);
   });



