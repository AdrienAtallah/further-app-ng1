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

				console.log("In service : ", __data.data);
			});
			return _deferred.promise;
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
