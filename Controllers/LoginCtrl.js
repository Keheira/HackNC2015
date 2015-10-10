angular.module('app',[])
    .controller('LoginCtrl', ['$scope',function($scope){
    $scope.login = {};
    $scope.validate = function(){
      console.log($scope.login);
      $scope.namereq = '';
      $scope.passreq = '';

      if(!$scope.login.user){
        $scope.namereq = 'Username Required';
      }
      if(!$scope.login.pass){
        $scope.passreq = 'Password Required';
      }
    }
  }])
