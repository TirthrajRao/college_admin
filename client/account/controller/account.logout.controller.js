angular.module('account')

.controller('logoutCtrl',['$scope','$localStorage','$state','$rootScope',function($scope,$localStorage,$state,$rootScope){
  $rootScope.user = $localStorage.user;
  $scope.removelocal = function(){
    // $localStorage.$reset();
    delete $localStorage.user;
    delete $localStorage.adminId;
    $rootScope.user = $localStorage.user;
    $state.go('admin.login');

  }
}])
