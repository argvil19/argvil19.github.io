app.factory('arena', ['loggerSvc', 'gameStatus', 'brigade', function(loggerSvc, gameStatus, brigade) {
	
	var fighters = [Scout(), Scout(), Scout(), Scout(), Scout()];

	var fightResult = function(part1, part2) {
		var rand = Math.random();
		return (rand*part1.survival) >= (rand*part2.survival)? true:false;
	};

	var fightReward = function(part1, part2) {
		return 2 + Math.abs(part1.survival - part2.survival) * (Math.random() * 10);
	}

	return {
		fight:function(part1, part2) {
			var moneyWon, damage;
			if (fightResult(part1, part2)) {
				moneyWon = fightReward(part1, part2);
				gameStatus.increaseMoney(moneyWon);

				damage = Math.random() * 100;

				this.deleteFighter(part2);

				part1.takeDamage(damage < 100? damage:99);
				part1.survival <= 95? part1.incSurvival(5):false;

				return {
					result:true,
					damage:damage,
					moneyWon:moneyWon
				};
			} else {

				brigade.deleteMember(part1);

				return {
					result:false
				};
			}
		},
		deleteFighter:function(fighter) {
			var fighterIndex = this.getFighters().indexOf(fighter);
			fighters.splice(fighterIndex, 1);
		},
		getFighters:function() {
			return fighters;
		},
		rotateFighters:function() {
			fighters.length = 0;
			for (var i=0;i<5;i++) {
				fighters.push(Scout());
			}
		}
	};
}]);