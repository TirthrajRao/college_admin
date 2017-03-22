angular.module('admin')
.controller('adminStudentContactInfoCtrl', ['$scope','$rootScope','$state','adminFactory',function($scope,$rootScope,$state,adminFactory){
	$scope.orderByField = 'name';
	$scope.reverseSort = false;
	activate();
	function activate(){
		adminFactory.getCourses()
		.then(function(response){
			$scope.courses=response.data;
		},function(error){
			console.log(error);
		});
	}
	$scope.getSem = function(course){
		$scope.semester =[];
		$scope.courseid=course.courseid;
		$scope.sem=course.sem;
		for(var x = 1; x <= $scope.sem; x++){
			$scope.semester.push(x);
		}
	}
	$scope.getContactInfo= function(sem){
		adminFactory.getStudentsBySem($scope.courseid,sem)
		.then(function(response){
			$scope.students=response.data;
		},function(error){
			console.log(error);
		});
	}
}])
