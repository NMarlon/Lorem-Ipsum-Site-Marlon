 $(function() {
 	$('.scroll-down').click (function() {
 		$('html, body').animate({scrollTop: $('#PrimeiroTexto').offset().top }, 'slow');
 		return false;
 	});
 });