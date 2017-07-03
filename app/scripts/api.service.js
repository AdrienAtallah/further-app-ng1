(function() {
	'use strict';

	angular
		.module('furtherApp')
		.service('api', apiService);

	function apiService($http) {

		apiService.$inject = ['__env'];

		function _get(__service) {
			$http({
				method: "GET",
				url: __env.apiUrl + __service
			}).then(function mySuccess(response) {

				console.log("In service : ", respone.data);

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

		var publicApi = {
			getTopDestinations: function (__departure, __arrival) {
				return _get('top/destinations/' + __departure + '?region=' + __arrival);
			},
			getFlights: function (__departure, __arrival) {
				return _get('top/destinations/' + __departure + '?region=' + __arrival);
			}
		};

		return publicApi;
	}

})();
