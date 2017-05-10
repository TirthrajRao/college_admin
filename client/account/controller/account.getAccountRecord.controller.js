angular.module('account')
.controller('accountGetAccountRecord',['$scope','$rootScope','$localStorage','$state','$timeout','accountFactory', function($scope,$rootScope,$localStorage,$state,$timeout,accountFactory){

  activate();
  getLocal();
  console.log($scope.student);
  function activate(){
    accountFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }


  function getLocal(){
    $scope.student = $localStorage.student;

  }

  $scope.getStudentsByCourse = function(courseid){

    $scope.courseid = courseid;
    accountFactory.getStudentsByCourse(courseid)
    .then(function(response){
      $scope.students=response.data
    },function(error){
      console.log(error);
    });
  }

  $scope.showArray = ['name','courseid','ophone'];
  $scope.searchArray = ['name','grno','sid'];

$scope.getAccountRecord = function(){
    event.preventDefault()
    $timeout(function(){
  $localStorage.student=$scope.student;
  $scope.student = $localStorage.student;
      $scope.$apply();
      accountFactory.getAccountRecord($scope.student)
      .then(function(response){
        $scope.record=response.data;
        console.log($scope.record);
      },function(error){
        console.log(error);
      });


    });
  }
$scope.getAccountRecord($scope.student);
  $scope.printReceipt = function(x){

      $state.go('account.PrintReceipt',{ 'id' : x });

    }


}])
