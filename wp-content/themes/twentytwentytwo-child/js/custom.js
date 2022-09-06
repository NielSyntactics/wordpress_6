(function($) {
	var scroll = $(window).scrollTop();
	if (scroll >= 100) {
		$(".site-header").addClass("scrolled");
	} 
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$(".site-header").addClass("scrolled");
		} else {
			$(".site-header").removeClass("scrolled");
		}
	});
	if ($('.marquee').length) {
		var $marqueeCarousel = $('.marquee');
		if (!$marqueeCarousel.hasClass('cloned')) {
			$marqueeCarousel.find('.wp-block-image').clone(true).appendTo($marqueeCarousel.find('.wp-block-gallery'));
			$marqueeCarousel.addClass('cloned');
		}
        $marqueeCarousel.find('.wp-block-gallery').removeAttr('class').addClass('swiper-wrapper').wrap('<div class="swiper marquee-swiper" />').find('.wp-block-image').removeAttr('class').addClass('swiper-slide');
        var swiper = new Swiper(".marquee-swiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        });
	}
	if ($('.tabs').length) {
        $('.tabs').wrapInner('<div class="tabs-content"></div>');
        $('.tabs').prepend('<div class="tabs-nav"></div>');
        $('.tabs details').each(function(index){
            var number = index+1;
            $(this).find('.gb-accordion-title').hide();
            var tabItem = $(this).find('.gb-accordion-title').html();
            $('.tabs-nav').append('<button class="tab-link" type="button">'+tabItem+'</button>');
            if ($(this).prop( "open" )) {
               $('.tabs-nav button:nth-child('+number+')').addClass('active');
            }
        });
        $('.tabs-nav button').click(function(){
            var number = $('.tabs-nav button').index(this)+1;
            $(this).addClass('active').siblings('button').removeClass('active');
            $(this).closest('.tabs').find('.tabs-content .gb-block-accordion details').attr('open', false);
            $(this).closest('.tabs').find('.tabs-content .gb-block-accordion:nth-child('+number+') details').attr('open', true);
        }); 
	}
})(jQuery);