angular.module('account')

.controller('logoutCtrl',['$scope','$localStorage','$state','$rootScope',function($scope,$localStorage,$state,$rootScope){
  $rootScope.user = $localStorage.user;
  $scope.removelocal = function(){
    $localStorage.$reset();
    $rootScope.user = $localStorage.user;
    $state.go('admin.login');

  }
}])
