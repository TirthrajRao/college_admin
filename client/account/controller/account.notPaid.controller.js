angular.module('account')
  .controller('accountNotPaidCtrl',['$scope','$rootScope','$state','accountFactory', function($scope,$rootScope,$state,accountFactory){
   
    activate();
    function activate(){
      accountFactory.getCourses()
        .then(function(response){
        $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
    }
    $scope.getSem = function(course){
       $scope.semester =[];
       $scope.courseid=course.courseid;
        console.log($rootScope.courseid);
      $scope.sem=course.sem;
      for(var x = 1; x <= $scope.sem; x++){
        $scope.semester.push(x);
      }
      }
    $scope.getStudentsAccountRecord = function(sem){
      $rootScope.sem= sem;
      console.log(sem);
      accountFactory.getStudentsAccountRecord($scope.courseid,sem)
      .then(function(response){
        $scope.record=response.data;
        console.log($scope.record);
      // getCourseFeesDetails();
      },function(error){
        console.log(error);
      });
    }
    // $scope.getStudentByName = function(name){

    //   accountFactory.getStudentByName($rootScope.courseid,$rootScope.sem,name)
    //   .then(function(response){
    //     $scope.student=response.data[0];
    //     $scope.studentname = $scope.student.name;
    //     console.log($scope.student);
    //   },function(error){
    //     console.log(error);
    //   });
    // }
 
  $scope.printReceipt = function(x){
      $state.go('account.PrintReceipt',{ 'id' : x });

    }
}])