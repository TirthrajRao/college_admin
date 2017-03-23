angular.module('admin')
.controller('adminCancelStudentsByYearCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  
  $scope.getAdmissionCancelByYear = function(academicYear){
    adminFactory.getAdmissionCancelByYear(academicYear)
    .then(function(response){
      $scope.chart = response.data;
    },function(error){
      console.log(error);
    });
  }
}])
