'use strict';

/**
 * @ngdoc function
 * @name furtherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the furtherApp
 */
angular.module('furtherApp')
  .controller('TopDestinationsCtrl', function($http, api, dataService) {


    var vm = this;

    vm.topDestinations = [];
    vm.departureLocation = '';
    vm.arrivalLocation = '';
    vm.loadingTopDestinations = false;

    // vm.airports = ["LAX", "NYC", "CHI"];
    vm.airports = [];
    vm.regions = ["Asia Pacific", "Latin America", "Africa", "Middle East", "North America"];


    getAirports();


    function getAirports() {
      console.log("in airporst");
      var lat = dataService.getLat();
      var lon = dataService.getLon();
      var distance = "100";

      if (!lat || !lon) {
        alert("Log in Beech");
      } else {

        api.getAirports(lat, lon, distance).then(function mySuccess(response) {

          // for (var Object in response){
          //   vm.airports.push(Object.code);
          //   console.log("Object.code : ", Object);
          // }

          response.forEach(function(element){
            console.log("element: ", element);
            vm.airports.push(element.code)
          });

          console.log("response : ", response);

        }, function myError(response) {
          vm.loadingTopDestinations = false;
          console.log(response.statusText);
        });
      }
    }

    vm.getTopDestinations = function() {

      vm.loadingTopDestinations = true;

      api.getTopDestinations(vm.departureLocation, vm.arrivalLocation).then(function mySuccess(response) {

        vm.topDestinations = response.destinations;

        vm.topDestinations = vm.topDestinations.filter(function(element) {
          return (element.destination.cityName !== null);
        });

        vm.loadingTopDestinations = false;

      }, function myError(response) {
        vm.loadingTopDestinations = false;
        console.log(response.statusText);
      });

    }

    vm.getFlightToDestinations = function(dest) {
      console.log('get flight to: ', dest);
    }

    vm.isDestinations = function() {
      if (vm.topDestinations.length > 1)
        return true;
      else return false;
    }

  });
