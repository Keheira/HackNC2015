var app = angular.module('app', []);

app.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };

  $scope.loadHome = function () {
        $location.url('/home');
    };

      $scope.loadAbout = function () {
        $location.url('/login');
    };

      $scope.loadContact = function () {
        $location.url('/contact');
    };

}]);
