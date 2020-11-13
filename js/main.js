'use strict';

$(function ()
{      

    $('.uslugi-r .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:5000,
    	loop:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	var swiper = new Swiper('.slider .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });

    $('.news-main-img a').magnificPopup({
	  type: 'image'
	  // other options
	});

    // $('#img-modal').modal('show');
    $('.portifoli-item-img a').on('click', function(e){
        e.preventDefault();
        $('#img-modal').modal('show');
    });


});
