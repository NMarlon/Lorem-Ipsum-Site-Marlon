$(function() {
	$('.scroll-down').click (function() {
		$('html, body').animate({scrollTop: $('#PrimeiroTexto').offset().top-100 }, 'slow');
		return false;
	});
});