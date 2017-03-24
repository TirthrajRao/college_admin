angular.module('admin')
.controller('adminStudentInquiryCtrl',['$scope','$state','$rootScope','adminFactory',function($scope,$state,$rootScope,adminFactory){

	$scope.addInquiry = function(x){
		x['name'] = x['fname']+' '+x['mname']+' '+x['lname'];
		adminFactory.AddInquiry(x)
		.then(function(response){
		$state.reload();
		},function(error){
			console.log(error);
			console.error(error);
		});
	}
	activate();
	function activate(){
		adminFactory.getCourses()
		.then(function(response){
			$scope.courses=response.data;
			console.log($scope.courses);
		},function(error){
			console.log(error);
			console.error(error);
		});
	}
}])