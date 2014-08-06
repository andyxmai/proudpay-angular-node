'use strict';

angular.module('proudpayAngularNodeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'parse-angular',
  'parse-angular.enhance',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/home', {
        templateUrl: 'partials/home',
        controller: 'HomeCtrl'
      })
      .when('/terms', {
        templateUrl: 'partials/terms',
        controller: 'TermsCtrl'
      })
      .when('/privacy', {
        templateUrl: 'partials/privacy',
        controller: 'PrivacyCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact',
        controller: 'ContactCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });