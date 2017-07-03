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

		function NavbarController() {
			var vm = this;

			//action here

		}
	}

})();
