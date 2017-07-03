(function() {
	'use strict';

	angular
		.module('furtherApp')
		.directive('furtherNavbar', furtherNavbar);

	function furtherNavbar() {

		var directive = {
			restrict: 'E',
			templateUrl: 'components/navbar/navbar.html',
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		function NavbarController($location) {
			var vm = this;

			vm.goto = function(page) {
				switch (page) {
					case 'home':
						$location.path('home');
						break;
					case 'top destinations':
						$location.path('top-destinations');
						break;
					case 'flights':
						$location.path('flights');
						break;
					default:
						$location.path('home');
				}
			}

		}
	}

})();
