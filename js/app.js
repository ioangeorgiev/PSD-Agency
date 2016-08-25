$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('.scroll-top').fadeIn(200);
		} else {
			$('.scroll-top').fadeOut(200);
		}
	});

	$('.scroll-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600)
		return false;
	});
});

$(document).ready(function() {
	$('#s-icon-click').click(function() {
		$('#search-box').fadeToggle(100);
	});
});