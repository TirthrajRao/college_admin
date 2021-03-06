angular.module('admin')
.controller('adminStudentsCtrl',['$scope','$state','$rootScope','$localStorage','adminFactory',function($scope,$state,$rootScope,$localStorage,adminFactory){
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
  $scope.editStudent = function(x){
    $state.go('admin.EditStudent',{ 'id' : x });
    console.log(x);
  }
  $scope.getStudents = function(x){
    console.log("sem jay che ke nai",x);
    adminFactory.getStudentsBySem($scope.courseid,x)
    .then(function(response){
      console.log("students details when sem select",response);
      $scope.students=response.data;
      console.log($scope.students);
    },function(error){
      console.log(error);
    });
  }
}])
