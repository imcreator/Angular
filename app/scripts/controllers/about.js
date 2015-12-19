'use strict';

/**
 * @ngdoc function
 * @name webstormProjectsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webstormProjectsApp
 */
angular.module('webstormProjectsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
