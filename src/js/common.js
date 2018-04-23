$(document).ready(function() {

$(function() {
  $('.skitter-large').skitter({
		interval: 5000,
        auto_play: false
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
$('.services-items').owlCarousel({
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
});

var owl = $('.team-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$('.team-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.team-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});


var owl2 = $('.partners-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.partners-next').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.partners-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
});

var owl3 = $('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});

$('.blog-next').click(function() {
    owl3.trigger('next.owl.carousel');
});

$('.blog-prev').click(function() {
    owl3.trigger('prev.owl.carousel');
});

$('.shop-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

});