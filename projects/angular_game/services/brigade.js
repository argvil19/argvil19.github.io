app.factory('brigade', ['loggerSvc', 'gameStatus', function(loggerSvc, gameStatus) {
        
        var brigadeMembers = [
                Scout(),
                Scout(),
                Scout()
        ];
        
    return {
        sendToMission:function(member){
            var memberIndex = brigadeMembers.indexOf(member);
            brigadeMembers[memberIndex] !== -1? brigadeMembers[memberIndex].available = 0: false;
            loggerSvc.log({
                type:'info',
                message:'El miembro ' + member.name + ' ha salido a una misión.'
            });
            loggerSvc.logOnGoing({
                type:'scout',
                member:member
            });
	    this.changeStatus(member, 'Haciendo scout');
            
        },
        restMembers:function() {
            for (var i=0;i<brigadeMembers.length;i++) {
                (brigadeMembers[i].health < 100 && brigadeMembers[i].available === 0)? brigadeMembers[i].health += 10:false;

        		if (brigadeMembers[i].health >= 100 && brigadeMembers[i].available === 0) {
                    brigadeMembers[i].health = 100;
        		    brigadeMembers[i].available = 1;
        		    brigadeMembers[i].status = 'En espera';
        		}
            }
        },
        sendAllToMission:function() {
            for (var i=0;i<this.getBrigade().length;i++) {
                this.getBrigade()[i].available? this.sendToMission(this.getBrigade()[i]):false;
            }
        },
        getBrigade:function() {
            return brigadeMembers;
        },
        getUnoccupiedMembers:function() {
            return this.getBrigade().filter((member)=>{
                return member.located === -1;
            });
        },
        deleteMember:function(member) {
            var memberIndex = brigadeMembers.indexOf(member);
            brigadeMembers.splice(memberIndex, 1);
        },
        addMember:function(newMember) {
            brigadeMembers.push(newMember);
        },
    	changeStatus:function(member, status) {
    	    brigadeMembers[brigadeMembers.indexOf(member)].status = status;
    	},
        brigadeEat:function() {
            var brigade = this.getBrigade();
            for (var i=0;i<brigade.length;i++) {
                if (gameStatus.getFood()) {
                    if (brigade[i].status == 'En espera' || brigade[i].status === 'Descansando') {
                        brigade[i].eat();
                        gameStatus.increaseFood(-1);
                    } else 
                    brigade[i].apetit--;
                }
            }
        },
        checkHealthBrigade:function() {
            for (var i=0;i<this.getBrigade().length;i++) {
                if (this.getBrigade()[i].health !== 100) {
                    loggerSvc.log({
                        type:'announce',
                        message:'El miembro ' + this.getBrigade()[i].name + ' śe encuentra herido. Estará descansando durante unos días hasta recuperarse.'
                    })
                    this.getBrigade()[i].available = 0;
                    this.getBrigade()[i].status = 'Descansando';
                }
            }
        },
        getAlocatedMembers:function(baseIndex) {
            return this.getBrigade().filter((member)=>{
                if (baseIndex === 0) {
                    console.log(member.located === member.located);
                }
                if (baseIndex)
                    return member.located === baseIndex;
                else
                    return false;
            });
        },
        changeHome:function(member, baseIndex) {
            member.located = baseIndex;
        },
        checkPatience:function() {
            for (var i=0;i<this.getBrigade().length;i++) {
                if (this.getBrigade()[i].available) {
                    this.getBrigade()[i].decPatience();
                    if (this.getBrigade()[i].patience < 50) {
                        loggerSvc.log({
                            type:'warning',
                            message:this.getBrigade()[i].name + ' se está cansando de no hacer nada.'
                        });                    }
                } else {
                    this.getBrigade()[i].restorePatience();
                } 

                if (this.getBrigade()[i].patience < 1) {
                    loggerSvc.log({
                        type:'danger',
                        message:this.getBrigade()[i].name + ' se ha cansado de no hacer nada y ha desertado'
                    });
                    this.deleteMember(this.getBrigade()[i]);
                }
            }
        }
    };
}]);
