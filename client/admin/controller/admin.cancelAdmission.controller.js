
angular.module('admin')
.controller('adminCancelAdmissionCtrl', ['$scope','$state','$rootScope','adminFactory','accountFactory','$timeout',function($scope,$state,$rootScope,adminFactory,accountFactory,$timeout){
	
	activate();
	function activate(){
		adminFactory.getCourses()
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
		$scope.sem=course.sem;
		for(var x = 1; x <= $scope.sem; x++){
			$scope.semester.push(x);  
			}
		}
	 $scope.getStudentsByCourse = function(courseid){
	 console.log(courseid.courseid);
    $scope.courseid = courseid.courseid;
    console.log($scope.courseid)
    accountFactory.getStudentsByCourse($scope.courseid)
    .then(function(response){
      $scope.students=response.data
    },function(error){
      console.log(error);
    });
  }
	$scope.showArray = ['name','courseid','ophone'];
  $scope.searchArray = ['name','grno','sid'];

  $scope.getStudentRecord = function(){
    event.preventDefault()
    $timeout(function(){
  // $localStorage.student=$scope.student;
  // $scope.student = $localStorage.student;
      $scope.$apply();
      adminFactory.getStudent($scope.student.sid)
      .then(function(response){
        $scope.record=response.data;
        // console.log($scope.record);
      },function(error){
        console.log(error);
      });


    });
  }
  $scope.cancelStudent = function(x){
  	console.log(x);
  	adminFactory.cancelAdmission(x)
  	.then(function(response){
      $('.alert-studentRemoved').show();
  		// $state.reload();
  	},function(error){
  		console.log(error);
  		console.error(error);
  	})
  }
	}]);
