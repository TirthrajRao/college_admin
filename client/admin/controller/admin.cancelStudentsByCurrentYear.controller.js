
angular.module('admin')
.controller('cancelStudentsByCurrentYearCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  
  function activate(){
  	adminFactory.getAdmissionCancelStudents()
    .then(function(response){
      $scope.chart = response.data;
    },function(error){
      console.log(error);
    });
  }

  activate();
  
}])
