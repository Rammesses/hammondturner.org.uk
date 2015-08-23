'use strict';

/**
 * @ngdoc overview
 * @name hammondTurnerorgukApp
 * @description
 * # hammondTurnerorgukApp
 *
 * Main module of the application.
 */
angular
  .module('hammondTurnerorgukApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/speaking', {
        templateUrl: 'views/speaking.html',
        controller: 'SpeakingCtrl',
        controllerAs: 'speaking'
      })
      .when('/history/:param', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
