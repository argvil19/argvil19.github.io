app.factory('gameStatus', function(){
    
    var days = 1;
    var money = 0;
    var food = 20;
    var water = 10;
    var foodForMoney = (Math.random() * 100) + 50;
    
    
    return {
        getFood:function() {
            return food;
        },
        getMoney:function() {
            return money;
        },
        getWater:function() {
            return water;
        },
        getDays:function() {
            return days;
        },
        increaseFood:function(by) {
            food += by;
        },
        increaseMoney:function(by) {
            money += by;
        },
        increaseWater:function(by) {
            water += by;
        },
        increaseDay:function() {
            days++;
        },
        newMoneyOffer:function(to0) {
            if (to0) {
                foodForMoney = 0;
                return;
            }
            foodForMoney = (Math.random() * 100) + 50;
        },
        getMoneyOffer:function() {
            return foodForMoney;
        }
    };
});