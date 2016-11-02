app.filter('improvement', function() {
	return function(number) {
		switch(number) {
			case 0:
				return 'Comida';
			case 1:
				return 'Dinero';
			case 2:
				return 'Capacidad';
		}
	}
});