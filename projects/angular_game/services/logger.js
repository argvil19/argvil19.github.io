app.factory('loggerSvc', [function() {
        
        var eventsOnGoing = [];
        
        return {
            dayEvents:[{
                type:'announce',
                message:'Primer día. El sol brilla en el cielo. Haz tu primer movimiento'
            }],
            log:function(ev) {
                this.dayEvents.push(ev);
            },
            clearLog:function() {
                this.dayEvents.length = 0;
            },
            logOnGoing:function(event) {
                eventsOnGoing.push(event);
            },
            getOnGoing:function() {
                return eventsOnGoing;
            },
            deleteOnGoing:function(event) {
                var eventIndex = typeof event === 'number'? event:eventsOnGoing.indexOf(event);
                eventsOnGoing.splice(eventIndex, 1);
            },
            cleanOnGoing:function() {
                var i = 0;
                
                if (this.getOnGoing().length)
                    while (true) {
                        this.getOnGoing()[i].finished? this.deleteOnGoing(i):i++;
                        if (i>=this.getOnGoing().length)
                            return;
                    }
            }
        };
}]);