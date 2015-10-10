var app = angular.module('app', ['ngRoute']);

appconfig(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'Views/Welcome.html',
    controller: 'WelcomeCtrl'
  })
  .when('/login',{
    templateUrl: 'Views/Login-Register.html',
    controller: 'LoginCtrl'
  });
})
