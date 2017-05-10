angular.module('admin')
.controller('adminCategoryChartCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
  activate();
  function activate(){
    adminFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.getCategoryChart = function(courseid){
    $scope.courseid = courseid;
    adminFactory.getCategoryChart(courseid)
    .then(function(response){
      $scope.chart = response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.showtable = 1;
  $scope.showTable = function(){
    $scope.showtable+=1;
  }
}])
