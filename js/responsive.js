function menubutton(resizeLimit) {
	// Handle default parameter
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	if ($(window).width() <= resizeLimit) {
		$('.menu-icon').show()
		$('.dropdown-menu').hide()
		$('.dropdown-menu').css('z-index', '1001')
		$('.navbar').hide()
		$('.navbar2').hide()
		$('.home').hide()
	} else if ($(window).width() > resizeLimit) {
		$('.menu-icon').hide()
		$('.dropdown-menu').hide()
		$('.dropdown-menu').css('z-index', '-1001')
		$('.navbar').show()
		$('.navbar2').show()
		$('.home').show()
}
};

function resize(div, resizeLimit) {
	$(div).each(function() {
	if ($(this).width() <= parseInt($(this).css("min-width"))) {
			$(this).css({"display":"contents"});
		} else {
			$(this).css({"display":"table-cell"});
		}
	});
};

function resizesocial(div, resizeLimit) {
	resizeLimit = typeof resizeLimit !== 'undefined' ? resizeLimit : 800;
	if ($(window).width() <= resizeLimit) {
		$(div).css({"display":"block"});
	} else if ($(window).width() > resizeLimit) {
		$(div).css({"display":"table-cell"});
	}
};


function toppage() {
	var header_size = $('header').offset().top + ($('header').outerHeight()*1.5);
	$('.main-wrapper').css({'padding-top': header_size});
}

