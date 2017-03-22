angular.module('admin')
.controller('adminBonafideCtrl', ['$scope','$stateParams','$state','adminFactory',function($scope,$stateParams,$state,adminFactory){
	$scope.date = new Date();
	$scope.year = new Date().getFullYear();
	$scope.nextyear = new Date().getFullYear() + 1;
	var id=$stateParams.id;
	activate();
	function activate(){
		adminFactory.getStudent(id)
		.then(function(response){
			$scope.student=response.data;
			console.log($scope.student);
		},function(error){
			console.log(error);
		});
	}
}]);
