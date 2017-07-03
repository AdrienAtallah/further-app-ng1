(function() {
	'use strict';

	angular.module('furtherApp')
		.directive('navbar', navbar);

	function navbar() {

		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar.directive.js',
			scope:{
				menuItems: '='
			},
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

}());
