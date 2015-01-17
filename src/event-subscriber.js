'use strict';

(function() {

  var module = angular.module('event.subscriber', []);

  module.service('eventSubscriber', ['$rootScope', function($rootScope) {
    var listOfSubscribers = {};
    var innerCallback = function(event, data) {
      angular.forEach(listOfSubscribers[event.name], function(callback) {
        callback(data);
      });
    };

    return {
      subscribe: function(eventName, callback, key) {
        if(!$rootScope[eventName]) {
          $rootScope.$on(eventName, innerCallback);
          $rootScope[eventName] = true;
        }
        if(!listOfSubscribers[eventName]) {
          listOfSubscribers[eventName] = {};
        }
        listOfSubscribers[eventName][key] = callback;
      }
    };
  }]);
})();
