app.filter('base', function() {
	return function(number) {
		switch(number) {
			case -1:
				return 'Sin base';
			case 0:
				return 'Casa Vieja';
			case 1:
				return 'Pequeño apartamento';
			case 2:
				return 'Centro comercial';
			case 3:
				return 'Cárcel';
			case 4:
				return 'Base militar';
		}
	}
});