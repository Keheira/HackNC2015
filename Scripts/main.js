var app = angular.module('app', [])
.config(function($routeProvider,$locationProvider, $httpProvider) {

    $routeProvider.when('/home',
    {
      templateUrl:    './Views/Welcome.html',
      controller:     'WelcomeCtrl.js'
    });
    $routeProvider.when('/login',
    {
      templateUrl:    './Views/Login-Register.html',
      controller:     'LoginCtrl.js'
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

app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

  $scope.loadHome = function () {
        $location.url('/home');
    };

      $scope.loadLogin = function () {
        $location.url('/login');
    };

      $scope.loadContact = function () {
        $location.url('/contact');
    };

}]);
