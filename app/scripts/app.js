'use strict';

/**
* @ngdoc overview
* @name furtherApp
* @description
* # furtherApp
*
* Main module of the application.
*/

var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}

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
.constant('__env', env)
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
    })
    .when('/top-destinations', {
        templateUrl: 'views/top-destinations/top-destinations.html',
        controller: 'TopDestinationsCtrl',
        controllerAs: 'topDestinations'
    })
    .when('/flights', {
        templateUrl: 'views/flights/flights.html',
        controller: 'FlightsCtrl',
        controllerAs: 'flights'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('');
});
