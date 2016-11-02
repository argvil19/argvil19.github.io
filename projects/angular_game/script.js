var app = angular.module('game', ['ui.bootstrap']);

app.controller('eventLog', ['$scope', 'loggerSvc', function($scope, loggerSvc){
        $scope.log = loggerSvc;
}]);

app.controller('gameStatus', ['$scope', 'gameStatus', 'brigade', 'globalActions', '$uibModal', function($scope, gameStatus, brigade, globalActions, $uibModal){
        $scope.gameStatus = gameStatus;
        $scope.brigade = brigade;
        $scope.globalActions = globalActions;


        $scope.openBrigadeModal = function() {
            $uibModal.open({
                animation:true,
                templateUrl:'./directives/brigade_modal.html',
                controller:function($scope, $uibModalInstance, brigade, bases) {
                    $scope.dissmiss = function(){
                        $uibModalInstance.close('close');
                    };
                    $scope.brigade = brigade;
                    $scope.bases = bases;
                },
                size:'lg'

            });
        };

        $scope.openShopModal = function() {
            $uibModal.open({
                animation:true,
                templateUrl:'./directives/tienda_modal.html',
                size:'lg',
                controller:function($scope, $uibModalInstance, shop, gameStatus, bases) {
                    $scope.dissmiss = function() {
                        $uibModalInstance.close('close');
                    };
                    $scope.shop = shop;
                    $scope.scouts = shop.getAvailableScouts();
                    $scope.improvements = shop.getAvailableImprovements();
                    $scope.gameStatus = gameStatus;
                    $scope.bases = bases;

                    $scope.buyGold = function() {
                        gameStatus.increaseFood(-gameStatus.getMoneyOffer());
                        gameStatus.increaseMoney(1);
                        gameStatus.newMoneyOffer(true);
                    }
                }
            });
        };

        $scope.openBasesModal = function() {
            $uibModal.open({
                animation:true,
                templateUrl:'./directives/base_modal.html',
                size:'lg',
                controller:function($scope, $uibModalInstance, shop, bases, gameStatus, brigade) {
                    $scope.dissmiss = function() {
                        $uibModalInstance.close('close');
                    };
                    $scope.shop = shop;
                    $scope.bases = bases;
                    $scope.brigade = brigade;
                }
            })
        };

        $scope.openArenaModal = function() {
            $uibModal.open({
                animation:true,
                templateUrl:'./directives/arena_modal.html',
                size:'lg',
                controller:function($scope, $uibModalInstance, brigade, arena, loggerSvc) {
                    $scope.dissmiss = function() {
                        $uibModalInstance.close('close');
                    }
                    $scope.arena = arena;
                    $scope.brigade = brigade;
                    $scope.select = {
                        toggle:0,
                        selected:undefined
                    };

                    $scope.selectMember = function(member) {
                        $scope.select.selected = member;
                        $scope.select.toggle = 1;
                    };

                    $scope.deselectMember = function() {
                        $scope.select.toggle = 0;
                        $scope.select.selected = undefined;
                    };

                    $scope.checkSurvivalRange = function(part1, part2) {
                        if (!part1) {
                            return false;
                        }
                        return ((part1.survival*100) - 10) < (part2.survival*100) && ((part1.survival*100) + 10) > (part2.survival*100);
                    };

                    $scope.fight = function(part1, part2) {
                        var fightResult = arena.fight(part1, part2);
                        if (fightResult.result) {
                            loggerSvc.log({
                                type:'success',
                                message:'El miembro de tu brigada ' + part1.name + ' ha ganado la batalla de arena. Sin embargo, ha sufrido una cantidad de ' + fightResult.damage.toFixed(0) +' de daño. Una cantidad de ' + fightResult.moneyWon.toFixed(0) + ' ha sido añadida a tus fondos.'
                            });
                        } else {
                            loggerSvc.log({
                                type:'danger',
                                message:'El miembro de tu brigada ' + part1.name + ' ha muerto durante la batalla.'
                            });
                        }

                        $scope.deselectMember();
                        brigade.checkHealthBrigade();
                    };

                    $scope.checkSameMember = function(member) {
                        return (!member.available || select.toggle) && member === $scope.select.selected;
                    }
                }
            })
        }
}]);

app.controller('brigadeControl', ['$scope', 'brigade', function($scope, brigade) {
        $scope.brigade = brigade;
}]);