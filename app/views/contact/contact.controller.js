'use strict';

/**
* @ngdoc function
* @name furtherApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the furtherApp
*/
angular.module('furtherApp')
.controller('ContactCtrl', function ($http) {


  var vm = this;

  vm.topDestinations = [];


  var url = 'http://ea0856a7.ngrok.io/further-service/v1/user/save';
  var url2 = 'http://ea0856a7.ngrok.io/further-service/v1/top/destinations/LAX?region=Africa';

  vm.getTopDestinations = function(){

    console.log('in top Ds');

    $http({
      method : "GET",
      url : url2
    }).then(function mySuccess(response) {

      vm.topDestinations = response.data.destinations;

    }, function myError(response) {
      console.log(response.statusText);
    });

  }

  vm.getFlightToDestinations = function(dest){
    console.log('get flight to: ', dest);
  }

});
