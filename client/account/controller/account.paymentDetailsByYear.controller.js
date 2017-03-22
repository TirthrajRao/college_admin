angular.module('account')
  .controller('accountPaymentDetailsByYearCtrl',['$scope','$rootScope','$state','accountFactory',function($scope,$rootScope,$state,accountFactory){


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

      $scope.getPaymentDetailsByYear = function(y){
        y['courseid']= $rootScope.courseid;
        accountFactory.getPaymentDetailsByYear(y)
        .then(function(response){
          $scope.pDetails = response.data;
          console.log($scope.pDetails);

        },function(error){
          console.log(error);
        });
      }
  }]);
