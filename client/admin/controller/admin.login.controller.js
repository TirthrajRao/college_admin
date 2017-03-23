angular.module('admin')
	.controller('adminLoginCtrl',['$scope','$localStorage','$state','adminFactory','$rootScope',function($scope,$localStorage,$state,adminFactory,$rootScope){
		$localStorage.$reset();
		$scope.user = $localStorage.user;
		$scope.doLogin = function(x){
  		 adminFactory.login(x)
			 .then(function(response){
				 $localStorage.user = response.data;
				 $localStorage.adminId = $localStorage.user.id; 
				 $rootScope.user = 	$localStorage.user;
				 if($localStorage.user.type == 'admin'){
				 	$state.go('admin.Students');
				 }
				 else{
				 	if($localStorage.user.type == 'account'){
				 		$state.go('account.PaymentDetailsByGrno');	
				 	}
				 }

			 },function(error){
				console.log(error);
		 		$('.alert-login').show();
			 });
	}
}]);
