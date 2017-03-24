
angular.module('admin')
.controller('cancelStudentsByCurrentYearCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  
  // $scope.date = new Date();
  // $scope.year = new Date().getFullYear();
  // var month = new Date().getMonth();
  // if (month == 0 || month == 1 || month == 2 || month == 3 || month == 4 || month == 5){
  //   $scope.pyear=  new Date().getFullYear() - 1;
  // 	console.log($scope.pyear);
  // }
  // else {
  //   $scope.nyear=  new Date().getFullYear() + 1;
  // }

  function activate(){
  	adminFactory.getAdmissionCancelStudents()
    .then(function(response){
      $scope.students = response.data;
      console.log($scope.students);
    },function(error){
      console.log(error);
    });
  }

  activate();
  
}])
