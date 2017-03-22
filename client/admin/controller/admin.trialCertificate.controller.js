angular.module('admin')
.controller('adminTrialCertificateCtrl',['$scope','$rootScope','$state','accountFactory','$timeout', function($scope,$rootScope,$state,accountFactory,$timeout){
  $scope.date = new Date();
  activate();
  function activate(){
    accountFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }

  $scope.getStudentsByCourse  = function(courseid){


    $scope.courseid = courseid;
    accountFactory.getStudentsByCourse(courseid)
    .then(function(response){
      $scope.students=response.data;

    },function(error){
      console.log(error);
    });
  }
  $scope.showArray = ['name','courseid','ophone'];
  $scope.searchArray = ['name','grno','sid'];
  $scope.generateTransfer = function(){
    event.preventDefault()
    $timeout(function(){
      $scope.$apply();
    });
  }
}])
