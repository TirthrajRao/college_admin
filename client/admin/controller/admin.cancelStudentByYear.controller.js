angular.module('admin')
.controller('adminCancelStudentsByYearCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  
  $scope.getAdmissionCancelByYear = function(academicYear){
  	$scope.academic = academicYear;
    adminFactory.getAdmissionCancelByYear(academicYear)
    .then(function(response){
      $scope.students = response.data;
    },function(error){
      console.log(error);
    });
  }
}])
