$(document).ready(function() {

$(function() {
  $('.skitter-large').skitter({
		interval: 3500
	});
});

//popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


//carousel
$('.owl-carousel').owlCarousel({
		loop: true,
    margin:10,
		dots: true,
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
})

});