$(document).ready(function() {
	$('#primary-nav').addClass('closed');

	$('#primary-nav').live('click', function(){
		$(this).toggleClass('open closed');
	});
});