window.onload = function() {
	
	$('.grid').masonry({
		itemSelector:'.grid-item',
	});
	
	$('img').on('load', function() {
		$('.grid').masonry({
			itemSelector:'.grid-item',
		});
	});
	
}