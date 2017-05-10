angular.module('account')
  .controller('accountAllPendingCtrl',['$scope','$state','$rootScope','$localStorage','accountFactory',function($scope,$state,$rootScope,$localStorage,accountFactory){

    $scope.payPending = function(x){

    		$state.go('account.AddPendingFees',{ 'id' : x });
    		
    	}
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
       $rootScope.courseid=course.courseid;
      $scope.sem=course.sem;
      for(var x = 1; x <= $scope.sem; x++){
        $scope.semester.push(x);
      }
  }
  $scope.getFeesDetails = function(sem){
    accountFactory.getCourseFeesDetails($rootScope.courseid,sem)
    .then(function(response){
      $scope.totalFees = response.data;
      console.log($scope.totalFees);
    },function(error){
      console.log(error);
    });

  }

  $scope.allPendingFees = function(sem){
    $localStorage.sem= sem;
    accountFactory.allPending($rootScope.courseid,sem)
    .then(function(response){
      $scope.allPending = response.data;
      console.log($scope.allPending);
    },function(error){
      console.log(error);
    });

  }

}]);
