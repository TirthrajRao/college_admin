angular.module('admin')
.controller('adminViewInquiryCtrl',['$scope','$state','$rootScope','adminFactory',function($scope,$state,$rootScope,adminFactory){

	function viewInquiry(){
		adminFactory.getAllInquires()
		.then(function(response){
			$scope.pending = response.data.pending;
			$scope.admission = response.data.admission;
			console.log($scope.pending[0]);
		},function(error){
			console.log(error);
		});
	}
	$scope.inquireByYear = function(academicYear){
		adminFactory.getAllInquires(academicYear)
		.then(function(response){
      		$scope.pending=response.data.pending;
    		$scope.admission = response.data.admission;
    		},function(error){
      		console.log(error);
    	});
	}
	viewInquiry();
}])