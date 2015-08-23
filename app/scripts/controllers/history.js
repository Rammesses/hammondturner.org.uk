'use strict';

/**
 * @ngdoc function
 * @name hammondTurnerorgukApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hammondTurnerorgukApp
 */
angular.module('hammondTurnerorgukApp')
  .controller('HistoryCtrl', ['$scope', function ($scope) {
    $scope.historyIndexUrl = "/history/index.html";
  }]);
