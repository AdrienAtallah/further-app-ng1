'use strict';

/**
 * @ngdoc function
 * @name furtherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the furtherApp
 */
angular.module('furtherApp')
  .controller('AboutCtrl', function () {

    console.log("in about controller");

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
