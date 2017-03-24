angular.module('admin')
.controller('adminCancelStudentsByYearCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  
  $scope.getAdmissionCancelByYear = function(academicYear){
    console.log(academicYear);
  	// $scope.academic = academicYear;
    adminFactory.getAdmissionCancelByYear(academicYear)
    .then(function(response){
      $scope.students = response.data;
    },function(error){
      console.log(error);
    });
  }

  function activate(){
  	adminFactory.getAdmissionCancelByYear()
    .then(function(response){
      $scope.students = response.data;
      console.log($scope.students);
    },function(error){
      console.log(error);
    });
  }
  activate();
}])
