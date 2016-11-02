app.factory('bases', [function() {
	
	var bases = [{
		name:'Casa vieja',
		bought:0,
		capacity:5,
		improvements:5,
		conflict:10,
		income:2,
		price:5,
		index:0,
		improve:0
	},
	{
		name:'Pequeño apartamento',
		bought:0,
		capacity:20,
		improvements:10,
		conflict:20,
		income:10,
		price:15,
		index:1,
		improve:0
	},
	{
		name:'Centro comercial',
		bought:0,
		capacity:40,
		improvements:15,
		conflict:25,
		income:20,
		price:50,
		index:2,
		improve:0
	},
	{
		name:'Cárcel',
		bought:0,
		capacity:60,
		improvements:20,
		conflict:30,
		income:35,
		price:120,
		index:3,
		improve:0
	},
	{
		name:'Base militar',
		bought:0,
		capacity:100,
		improvements:25,
		conflict:40,
		income:70,
		price:500,
		index:4,
		improve:0
	}];

	return {
		getBases:function(baseName) {
			return bases;
		},
		getYourBases:function() {
			return bases.filter((base) => {
				return base.bought;
			});
		}
	}
}]);