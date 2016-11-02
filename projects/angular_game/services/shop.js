app.factory('shop', ['brigade', 'loggerSvc', 'gameStatus', 'bases', function(brigade, loggerSvc, gameStatus, bases) {

	/*

	Improvement types

	0 = food
	1 = money <--- only at full capacity
	2 = capacity

	*/

	var dailyScouts = [Scout(), Scout(), Scout(), Scout(), Scout(), Scout(), Scout(), Scout(), Scout(), Scout()];
	var improvements = [{
		for:0,
		improvement:{
			type:0,
			qty:1
		},
		price:2
	},
	{
		for:0,
		improvement:{
			type:1,
			qty:0.5
		},
		price:2
	},
	{
		for:0,
		improvement:{
			type:2,
			qty:2
		},
		price:2
	},
	{
		for:1,
		improvement:{
			type:0,
			qty:5
		},
		price:5
	},
	{
		for:1,
		improvement:{
			type:1,
			qty:1
		},
		price:5
	},
	{
		for:1,
		improvement:{
			type:2,
			qty:10
		},
		price:5
	},
	{
		for:2,
		improvement:{
			type:0,
			qty:10
		},
		price:20
	},
	{
		for:2,
		improvement:{
			type:1,
			qty:5
		},
		price:35
	},
	{
		for:2,
		improvement:{
			type:2,
			qty:20
		},
		price:35
	},
	{
		for:3,
		improvement:{
			type:0,
			qty:25
		},
		price:70
	},
	{
		for:3,
		improvement:{
			type:1,
			qty:10
		},
		price:100
	},
	{
		for:3,
		improvement:{
			type:2,
			qty:40
		},
		price:100
	},
	{
		for:4,
		improvement:{
			type:0,
			qty:35
		},
		price:250
	},
	{
		for:4,
		improvement:{
			type:1,
			qty:20,
		},
		price:400
	},
	{
		for:4,
		improvement:{
			type:2,
			qty:50
		},
		price:450
	}];

	return {
		getAvailableScouts:function() {
			return dailyScouts;
		},
		getAvailableImprovements:function() {
			return dailyImprovements;
		},
		getAvailableBases:function() {
			return bases.getBases().filter((base) => {
				return !base.bought;
			});
		},
		rotateScouts:function() {
			dailyScouts.length = 0;
			for (i=0;i<10;i++) {
				dailyScouts.push(Scout());
			};
		},
		removeFromShop:function(scout) {
			var scoutIndex = this.getAvailableScouts().indexOf(scout);
			this.getAvailableScouts().splice(scoutIndex, 1);
		}
		,
		buyScout:function(scout) {
			brigade.addMember(scout);
			gameStatus.increaseFood(-scout.price);
			this.removeFromShop(scout);
			loggerSvc.log({type:'announce', message: 'El explorador ' + scout.name + ' se ha unido a tu grupo. Se han restado ' + scout.price.toFixed(0) + ' de comida.'})
		},
		buyBase:function(base) {
			var baseIndex = bases.getBases().indexOf(base);

			bases.getBases()[baseIndex].bought = 1;
			gameStatus.increaseMoney(-base.price);
			loggerSvc.log({
				type:'info',
				message:'Has comprado la base ' + base.name + '. Consulta sus ventajas en la ventana de Bases.'
			});
		},
		getAvailableImprovements:function() {
			return improvements;
		},
		buyImprovement:function(base, improv) {
			base.improvement = improv.improvement;
			gameStatus.increaseMoney(improv.price);
		}
	};
}]);