var app = angular.module('app', [])
.config(function($routeProvider,$locationProvider, $httpProvider) {

    $routeProvider.when('/home',
    {
      templateUrl:    './Views/Welcome.html',
      controller:     'WelcomeCtrl'
    });
    $routeProvider.when('/login',
    {
      templateUrl:    './Views/Login-Register.html',
      controller:     'LoginCtrl'
    });
    $routeProvider.when('/contact',
    {
      templateUrl:    './Views/contact.html',
      controller:     'ContactCtrl'
    });
    $routeProvider.otherwise(
    {
      redirectTo:     '/home',
      controller:     'WelcomeCtrl',
    }
  );
});
