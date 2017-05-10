angular.module('admin')
.controller('adminEnterEnrollmentCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  activate();
  function activate(){
    adminFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.getSem = function(course){
    $scope.semester =[];
    $scope.courseid=course.courseid;
    $scope.sem=course.sem;
    for(var x = 1; x <= $scope.sem; x++){
      $scope.semester.push(x);
    }
  }
  $scope.getStudents = function(sem){
    $scope.sem = sem;
    adminFactory.getStudentsBySem($scope.courseid,$scope.sem)
    .then(function(response){
      $scope.students=response.data;
      console.log($scope.students);
    },function(error){
      console.log(error);
    });
  }
  $scope.submitEntrollment = function(sid,enrollment){
    $("button[type=submit]").attr('disabled','disabled');
    adminFactory.submitEntrollment(sid,enrollment)
    .then(function(response){
 $("button[type=submit]").removeAttr('disabled');
      $scope.getStudents($scope.sem);
    },function(error){
      console.log(error);
    });
  }
}])
