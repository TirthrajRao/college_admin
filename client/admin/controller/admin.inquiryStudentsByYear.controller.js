angular.module('admin')
.controller('adminInquiryByYearCtrl',['$scope','$state','$rootScope','adminFactory',function($scope,$state,$rootScope,adminFactory){

	$scope.inquireByYear = function(academicYear){
		adminFactory.getPastInqueryByYear(academicYear)
		.then(function(response){
      		$scope.pending=response.data.pending;
    		$scope.admission = response.data.admission;
    		},function(error){
      		console.log(error);
    	});
	}
}])