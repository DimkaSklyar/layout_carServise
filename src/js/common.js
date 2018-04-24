$(document).ready(function() {

// mobile menu
var touch = $('#touch-menu');
    var menu = $('.top-menu');
 
    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});
// mobile menu
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

		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		fixedContentPos: true,
		fixedBgPos: true,
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
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
            items:2,
            margin:30,
        },
        1199:{
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
            items:4
        },
        1199:{
            items:6
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