$(function() {
	// 1. Инициализации.
    // Lazyload
    lazyload();

    // Validation
    $('#pro-request').valida();

    // Masked Input
    $('#form__phone').mask('(000) 000-0000');
    $('#form__zip').mask('00000');
});


$(function() {
	// 2. Скрипты.
	// Проверка поля индекса
	$("#form__zip").focusout(function() {
		var zipValue = document.getElementById('form__zip').value;
		if (zipValue.length < 5) {
			$(this).val('');
			$(this).closest('li').addClass('tooltip-is-active');
		}
		else {
			$(this).closest('li').removeClass('tooltip-is-active');
		};
	});

	// Проверка поля телефона
	$("#form__phone").focusout(function() {
		var phoneValue = document.getElementById('form__phone').value;
		if (phoneValue.length < 14) {
			$(this).val('');
			$(this).closest('li').addClass('tooltip-is-active');
		}
		else {
			$(this).closest('li').removeClass('tooltip-is-active');
		};
	});

    // Modal
    $('.modal__body .bottom .modal-close').on('click', function() {
        $('body').removeClass('form-is-submitted');
    });

    $('.modal__shadow').on('click', function() {
        $('body').removeClass('form-is-submitted');
    });

    // Callback Icon
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() > $(document).height() - 1200) {
            $('body').removeClass('callback-is-shown');
        }
        else {
            $('body').addClass('callback-is-shown');
        }

    });

    // Misc.
    $('.click-form-trigger').click(function(){
        $('#form__first-name').focus();
    });

});


// Slick Slider -- Brands
$(function(){
    $('#slick__brands').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: false,
        arrows: false,
        responsive: [
		    {
		      breakpoint: 99999,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 1,
	    		rows: 1
		      }
		    },
		    {
		      breakpoint: 1023,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
	    		rows: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
	    		rows: 3,
		      }
		    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  	]
    });
});


// Captcha
$(document).ready(function() {
    
   $(".form__submit-wrapper.is-disabled").on( "click", function() {

    	$('.g-recaptcha').addClass('is-warning');
    
    	setTimeout(function () { 
    	    $('.g-recaptcha').removeClass('is-warning');
    	}, 100);
    
    });

});