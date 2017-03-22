angular.module('account')
  .controller('accountSemWiseDetailsCtrl',['$scope','$rootScope','$state','$stateParams','accountFactory',function($scope,$rootScope,$state,$stateParams,accountFactory){
var str = $stateParams.course;
var pos = str.search("sem");
$scope.course = str.slice(0,pos-1);
var a = pos + 3;
$scope.sem = str.slice(a);
getSemWiseDetails($scope.course,$scope.sem,$rootScope.fromDate,$rootScope.toDate);
function getSemWiseDetails(){
accountFactory.getSemWiseDetails($scope.course,$scope.sem,$rootScope.fromDate,$rootScope.toDate)
.then(function(response){
  $scope.record = response.data;
  console.log($scope.record)
},function(error){
  console.log(error);
});
}
}])
