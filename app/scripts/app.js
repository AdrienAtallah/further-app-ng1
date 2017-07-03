'use strict';

/**
* @ngdoc overview
* @name furtherApp
* @description
* # furtherApp
*
* Main module of the application.
*/
angular
.module('furtherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMaterial'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .when('/top-destinations', {
        templateUrl: 'views/top-destinations/top-destinations.html',
        controller: 'TopDestinationsCtrl',
        controllerAs: 'topDestinations'
    })
    .when('/flights', {
        templateUrl: 'views/flights/flights.html',
        controller: 'AboutCtrl',
        controllerAs: 'flights'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('');
});
