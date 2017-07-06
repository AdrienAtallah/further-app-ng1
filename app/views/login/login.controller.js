'use strict';

/**
 * @ngdoc function
 * @name furtherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the furtherApp
 */
angular.module('furtherApp')
  .controller('LoginCtrl', function($q, $http, dataService) {

    var vm = this;
    vm.currentLocation = {};

    vm.intializeUser = function(){

      setLocation().then(function mySuccess(response) {

      vm.currentLocation = response;
      console.log("vm.currentLocation ", vm.currentLocation);
      console.log("vm.currentLocation.city ", vm.currentLocation.city);
      console.log("vm.currentLocation.lat ", vm.currentLocation.lat);
      dataService.setLat(vm.currentLocation.lat);
      
      console.log("vm.currentLocation.lon ", vm.currentLocation.lon);
      dataService.setLon(vm.currentLocation.lon);

      }, function myError(response) {
        vm.loadingTopDestinations = false;
        console.log(response.statusText);
      });
    }

    // function setLocation() {
    //
    //   var loc = {};
    //
    //   $http({
    //     method: "GET",
    //     url: 'http://ip-api.com/json'
    //   }).then(function(data) {
    //       vm.currentLocation = data.data;
    //   });
    //
    // }

    function setLocation() {
      var _deferred = $q.defer();

      $http({
        method: "GET",
        url: 'http://ip-api.com/json'
      }).then(function (__data) {
        if (__data)
          _deferred.resolve(__data.data);
      });
      return _deferred.promise;
    }


  });
