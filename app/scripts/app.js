'use strict';

/**
 * @ngdoc overview
 * @name angularEventSubscriberApp
 * @description
 * # angularEventSubscriberApp
 *
 * Main module of the application.
 */
angular
  .module('angularEventSubscriberApp', [
    'ngRoute', 'event.subscriber'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
