app.factory('globalActions', ['loggerSvc', 'gameStatus', 'brigade', 'shop','arena', 'bases', function(loggerSvc, gameStatus, brigade, shop, arena, bases) {

        var eventTempStack = [];
        var analyzeEvent = function(event) {
            var eventIndex = loggerSvc.getOnGoing().indexOf(event);
            var brigadeMembers, brigadeMemberIndex, mission;

            if (((Math.random() * event.member.mood) + event.member.mood) > 1.4) {
            	eventTempStack.push({
            		type:'warning',
            		message:'Parece que el ' + event.member.name + ' no le gustaron tus ordenes y se ha quedado holgazaneando.'
            	});
            	event.finished = 1;
            	return false;
            }

            switch(event.type) {
                case 'scout':
                    brigadeMembers = brigade.getBrigade();
                    brigadeMemberIndex = brigadeMembers.indexOf(event.member);
                    mission = completeMission(event);

                    
                    if (!mission.result) {
                        eventTempStack.push({type:'danger', message:event.member.name + ' ha sido devorado por zombis mientras hacía scouting.'});
                        brigade.deleteMember(event.member);
                    } else {
                        brigade.getBrigade()[brigadeMemberIndex].takeDamage(20);
                        gameStatus.increaseFood(mission.food);
			            brigade.changeStatus(event.member, 'Descansando');

                        eventTempStack.push({type:'success', message:event.member.name + ' ha regresado de hacer scouting y trajo consigo una cantidad de ' + mission.food.toFixed(0) + ' de alimento'});
                    }
                    
                    event.finished = 1;
                    break;
                    
                default:
                    true;
            }
        };

        var completeMission = function(event){

            if ((Math.random() + event.member.survival) < 0.9) {
                return {result:false};
            } else {
                food = ((Math.floor(Math.random() * 5) + 20) * event.member.search) + 2;
                return {result:true, food:food};
            };
        };

        var collectBasesTribute = function() {
           	bases.getYourBases().forEach((base)=>{
                console.log(brigade.getAlocatedMembers(base.index));
           		if (brigade.getAlocatedMembers(base.index).length) {
           			gameStatus.increaseFood(base.income*brigade.getAlocatedMembers(base.index).length);
           			loggerSvc.log({
           				type:'announce',
           				message:'Tu base ' + base.name + ' te ha otorgado un tributo de ' + base.income*brigade.getAlocatedMembers(base.index).length + ' de alimento'
           			});
           		}
          	});
        }
        
        return {
            endDay:function() {
                var onGoing = loggerSvc.getOnGoing();

                loggerSvc.clearLog();
                
                for (var i=0;i<loggerSvc.getOnGoing().length;i++) {
                    analyzeEvent(loggerSvc.getOnGoing()[i]);
                }
                
                
                loggerSvc.cleanOnGoing();
                
                gameStatus.increaseDay();
                loggerSvc.log({type:'announce', message:'Día ' + gameStatus.getDays()});
                
                for (var i=0;i<eventTempStack.length;i++) {
                    loggerSvc.log(eventTempStack[i]);
                }
                
                eventTempStack.length = 0;
                
                brigade.restMembers();
                brigade.brigadeEat();
                shop.rotateScouts();
                arena.rotateFighters();
                collectBasesTribute();
                brigade.checkPatience();
                gameStatus.newMoneyOffer();
            },
            gameOver:function() {

            }
        };
}]);
