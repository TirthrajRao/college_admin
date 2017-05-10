angular.module('admin')
.controller('admingenerateIdCardCtrl',['$scope','$rootScope','$timeout','$state','adminFactory',function($scope,$rootScope,$timeout,$state,adminFactory){
  $scope.generateIdPng = function(){
    $(function() {
      html2canvas($("#my-card"), {
        onrendered: function(canvas) {
          var a = document.createElement('a');
          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          var name = $scope.student.name.split(" ");
          a.download = name[1]+'_'+name[0]+'_'+$scope.student.courseid+'.jpg';
          a.click();
        }
      });
    });
  }
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
  $scope.getStudentsBySem = function(sem){
    adminFactory.getStudentsBySem($scope.courseid,sem)
    .then(function(response){
      $scope.students = response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.showArray = ['name','courseid','grno'];
  $scope.searchArray = ['name','grno','sid'];
  $scope.getStudents = function(){
    event.preventDefault()

    $timeout(function(){
      $scope.$apply();
    });
  }
}])
