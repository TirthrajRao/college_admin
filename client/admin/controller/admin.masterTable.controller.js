angular.module('admin')
.controller('adminMasterTableCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){


  activate();
getStudents();
function getStudents(){
  document.getElementsByClassName("checked").defaultChecked;
  adminFactory.getStudents()
  .then(function(response){
    $scope.students=response.data;
  },function(error){
    console.log(error);
  });
}
function activate(){
  adminFactory.getCourses()
  .then(function(response){
    $scope.courses=response.data;
    console.log($scope.courses)
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
$scope.getStudentsByCourse = function(course){

  adminFactory.getStudentsByCourse(course)
  .then(function(response){
    $scope.students=response.data;

  },function(error){
    console.log(error);
  });
}
$scope.getStudentsBySem = function(sem){

    adminFactory.getStudentsBySem($scope.courseid,sem)
    .then(function(response){
      $scope.students=response.data;

    },function(error){
      console.log(error);
    });
}
}])
