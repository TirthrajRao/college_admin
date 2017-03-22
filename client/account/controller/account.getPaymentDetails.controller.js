angular.module('account')
  .controller('accountPaymentDetailsCtrl',['$scope','$rootScope','$state','accountFactory',function($scope,$rootScope,$state,accountFactory){

    $scope.year = new Date().getFullYear();
    var month = new Date().getMonth();

    if (month == 0 || month == 1 || month == 2 || month == 3 || month == 4 || month == 5){
      $scope.pyear=  new Date().getFullYear() - 1;

    }
    else {
      $scope.nyear=  new Date().getFullYear() + 1;
    }

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

      $scope.getPaymentDetails = function(sem){
        accountFactory.getPaymentDetails($rootScope.courseid,sem)
        .then(function(response){
          $scope.pDetails = response.data;
          console.log($scope.pDetails);

        },function(error){
          console.log(error);
        });
      }
  }]);
