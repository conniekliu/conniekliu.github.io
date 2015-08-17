function menubutton(resizeLimit) {
	// Handle default parameter
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	if ($(window).width() <= resizeLimit) {
		$('.menu-icon').show()
		$('.dropdown-menu').hide()
		$('.navbar').hide()
	} else if ($(window).width() > resizeLimit) {
		$('.menu-icon').hide()
		$('.dropdown-menu').hide()
		$('.navbar').show()
}
};

function resizeimage(fullmargin, smallmargin, div, resizeLimit) {
	$(div).each(function() {
	if ($(this).width() <= parseInt($(this).css("min-width"))) {
			$(this).css({"float":"none", "margin":smallmargin});
		} else {
			$(this).css({"float":"left", "margin":fullmargin});
		}
	});
};


function resize(padsmall, margtop, largemarg, div, resizeLimit) {
	$(div).each(function() {
	if ($(this).width() <= parseInt($(this).css("min-width"))) {
			$(this).css({"float":"none", "margin":"0 auto", "margin-top":margtop,"display":"table","padding":"padsmall"});
		} else {
			$(this).css({"float":"left", "margin":largemarg,"margin-top":margtop, "display":"table-cell"});
		}
	});
};

function resizesocial(resizeLimit) {
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	if ($(window).width() <= resizeLimit) {
		$('.social-full').show()
		$('.footer-social').hide()
		$('.footer-sections').css({'width':'100%', 'padding':'0'})
	} else if ($(window).width() > resizeLimit) {
		$('.social-full').hide()
		$('.footer-social').show() 
		$('.footer-sections').css({'width':'70%'})
	}
};


function toppage() {
	var header_size = $('header').offset().top + $('header').outerHeight();
	$('.main-wrapper').css({'padding-top': header_size});
}


function sliderimg() {
	$('.slider-img').each(function(i, obj) {
			obj.width = $(window).width() * 0.6;
			obj.height = obj.width * 0.666;
		});
}


function sliderfix() {
	$('#featured').unwrap();
	$('.timer').remove();
	$('.orbit-caption').remove();
	$('.slider-nav').remove()
	$('#featured').orbit({
		timer:false, 
		captions:false
	});
}

