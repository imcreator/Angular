'use strict';

/**
 * @ngdoc function
 * @name webstormProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webstormProjectsApp
 */
angular.module('webstormProjectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
