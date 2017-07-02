'use strict';

/**
* @ngdoc function
* @name furtherApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the furtherApp
*/
angular.module('furtherApp')
.controller('ContactCtrl', function ($scope, $http) {


  var vm = this;

  vm.getTopDestinations = function(){

    console.log('in top Ds');

  }


  // $http({
  //   method : "GET",
  //   url : "welcome.htm"
  // }).then(function mySuccess(response) {
  //   $scope.myWelcome = response.data;
  // }, function myError(response) {
  //   $scope.myWelcome = response.statusText;
  // });

  console.log("in contact controller");

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
