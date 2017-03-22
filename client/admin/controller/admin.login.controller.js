angular.module('admin')
	.controller('adminLoginCtrl',['$scope','$localStorage','$state','adminFactory',function($scope,$localStorage,$state,adminFactory){
		$localStorage.$reset();
		$scope.doLogin = function(x){
  		 adminFactory.login(x)
			 .then(function(response){
				 $localStorage.user = response.data;
				 $localStorage.adminId = $localStorage.user.id; 
				 $state.go('account.PaymentDetailsByGrno');

			 },function(error){
				console.log(error);
		 		$('.alert-login').show();
			 });
	}
}]);
