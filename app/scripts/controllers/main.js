'use strict';

angular.module('angularEventSubscriberApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'eventSubscriber', function ($scope, $rootScope, eventSubscriber) {

    // If we used $on, like this, callback function would be called multiple times.
    // For every time this controller is instantiated (main page is opened)
    //$rootScope.$on('dummyEvent', function () {
    //  alert('Event fired');
    //});

    eventSubscriber.subscribe('dummyEvent', function () {
      alert('Event fired');
    });

    $scope.emitEvent = function () {
      $rootScope.$emit('dummyEvent');
    };
  }]);
