(function() {
	'use strict';

	angular
		.module('furtherApp')
		.directive('furtherDestinationList', furtherDestinationList);

	function furtherDestinationList() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/destination-list/destination-list.html',
			scope: {
				furtherListItems: '='
			},
			controller: DestinationListController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function DestinationListController() {
			var vm = this;

		}
	}

})();
