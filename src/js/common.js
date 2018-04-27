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
            768:{
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
                items:1,
                margin:0
            },
            576:{
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
            576:{
                items:2
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

function AjaxFormRequest(result_id,formMain,url) { 
    if ($('#'+formMain).find('input').val() != ''){
    jQuery.ajax({ 
        url: url, 
        type: "POST", 
        dataType: "html", 
        data: jQuery("#"+formMain).serialize(), 
        success: function(response) { 
            document.getElementById(result_id).innerHTML = response; 
        }, 
        error: function(response) { 
            $('.m-0').remove();
            var par = document.getElementById(result_id);
            var error = document.createElement('p');
            error.classList.add("m-0");
            error.innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
            if (result_id != 'messegeResult-sub'){
                par.appendChild(error);
            }
        } 
    }); 
    }
    // jQuery(':input','#'+formMain) 
    // .not(':button, :submit, :reset, :hidden') 
    // .val('') 
    // .removeAttr('checked') 
    // .removeAttr('selected'); 
}


window.addEventListener("DOMContentLoaded", function() {
	function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
	}
    
	function mask(event) {
        var matrix = "+7 (___) ___ __ __",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
	};
    var input = document.querySelector("#phone");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});
