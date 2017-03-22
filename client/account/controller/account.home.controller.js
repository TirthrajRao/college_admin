angular.module('account')
  .controller('accountHomeCtrl',['$scope','$rootScope','$state','accountFactory', function($scope,$rootScope,$state,accountFactory){
activate();
function activate(){
accountFactory.getCourses()
.then(function(response){
  $scope.courses=response.data;
  console.log($scope.courses);

},function(error){
  console.log(error);
});
}

$scope.getSem = function(course){
   $scope.semester =[];
   $rootScope.courseid=course.courseid;
  console.log($rootScope.courseid);
  $scope.sem=course.sem;
  for(var x = 1; x <= $scope.sem; x++){
    $scope.semester.push(x);


  }
  console.log($scope.semester);

  }

$scope.getStudentsAccountRecord= function(sem){

accountFactory.getStudentsAccountRecord($rootScope.courseid,sem)
.then(function(response){
  $scope.record=response.data;
  console.log($scope.record);
},function(error){
  console.log(error);
});

}

}])
