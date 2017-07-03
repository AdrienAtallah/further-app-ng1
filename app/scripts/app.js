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
    .when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('');
});
