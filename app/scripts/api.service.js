(function() {
	'use strict';

	angular
		.module('furtherApp')
		.service('api', apiService);

	function apiService($http, $q) {

		apiService.$inject = ['__env'];

		function _get(__service) {
			var _deferred = $q.defer();

			$http({
				method: "GET",
				url: __env.apiUrl + __service
			}).then(function (__data) {
				if (__data)
					_deferred.resolve(__data.data)

			});
			return _deferred.promise;
		}

		var publicApi = {
			getTopDestinations: function (__departure, __arrival) {
				return _get('top/destinations/' + __departure + '?region=' + __arrival);
			},
			getFlights: function (__departure, __arrival) {
				return _get('top/destinations/' + __departure + '?region=' + __arrival);
			},
			getAirports: function (__lat, __lon, __distance) {
				return _get('airport/nearby?lat=' + __lat + '&lon=' + __lon + '&distance=' + __distance);
				// http://localhost:9090/further-service/v1/airport/nearby?lat=41.1557&lon=-73.99&distance=100
			}
		};

		return publicApi;
	}

})();
