'use strict';

/**
 * @ngdoc function
 * @name furtherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the furtherApp
 */
angular.module('furtherApp')
	.controller('FlightsCtrl', function($http) {


		var vm = this;

		vm.topDestinations = [];
		vm.departureLocation = '';
		vm.arrivalLocation = '';
		vm.loadingTopDestinations = false;

		vm.airports = ["LAX", "NYC", "CHI"];
		vm.regions = ["Asia Pacific", "Latin America", "Africa", "Middle East", "North America"];

		var url = 'http://ea0856a7.ngrok.io/further-service/v1/user/save';

		vm.getTopDestinations = function() {

			vm.loadingTopDestinations = true;

			console.log('in top Ds ' + vm.departureLocation + " : " + vm.arrivalLocation);
			var url2 = 'http://ea0856a7.ngrok.io/further-service/v1/top/destinations/' + vm.departureLocation + '?region=' + vm.arrivalLocation;

			$http({
				method: "GET",
				url: url2
			}).then(function mySuccess(response) {

				vm.topDestinations = response.data.destinations;

				vm.topDestinations = vm.topDestinations.filter(function(element) {
					console.log('element', element);
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
