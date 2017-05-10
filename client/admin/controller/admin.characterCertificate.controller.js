angular.module('admin')
.controller('adminCharacterCertificateCtrl',['$scope','$state','$rootScope','$localStorage','adminFactory',function($scope,$state,$rootScope,$localStorage,adminFactory){
  activate();
  function activate(){
    adminFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.getStudentsByCourse = function(courseid){
    $scope.courseid = courseid.courseid;
    adminFactory.getStudentsByCourse($scope.courseid)
    .then(function(response){
      $scope.students=response.data
    },function(error){
      console.log(error);
    });
  }

  $scope.date = new Date();
  $scope.year = new Date().getFullYear();
  var month = new Date().getMonth();
  if (month == 0 || month == 1 || month == 2 || month == 3 || month == 4 || month == 5){
    $scope.pyear=  new Date().getFullYear() - 1;
  }
  else {
    $scope.nyear=  new Date().getFullYear() + 1;
  }

  $scope.getStudentByGrno = function(grno){
    adminFactory.getStudentByGrno(grno)
    .then(function(response){
      $scope.student=response.data[0];
      if ($scope.student['gender'] == "Male")
      {
        $scope.student['hello']="Mr";
        $scope.student['hello1']="He";
        $scope.student['hello2']="His";
        $scope.student['hello3']="he";
      }
      else{
        $scope.student['hello']="Miss";
        $scope.student['hello1']="She";
        $scope.student['hello2']="Her";
        $scope.student['hello3']="she";
      }
    },function(error){
      console.log(error);
    });
  }
}])
