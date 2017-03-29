angular.module('account')

.controller('logoutCtrl',['$scope','$localStorage','$state','$rootScope','accountFactory',function($scope,$localStorage,$state,$rootScope,accountFactory){
  $rootScope.user = $localStorage.user;
  $scope.removelocal = function(){
    // $localStorage.$reset();
    delete $localStorage.user;
    delete $localStorage.adminId;
    $rootScope.user = $localStorage.user;
    $state.go('admin.login');

  }

  $scope.changePassword = function(x){

		x['id'] = $localStorage.adminId;

		if(x.newPassword == x.confirmPassword){
			if(x.newPassword != x.current ){
				accountFactory.changeAdminPassword(x)
		    	.then(function(response){
		      	$scope.std=response.data;
		      	if($scope.std == 'true')
		      	{
		    	  	$('.alert-success').show();
		      	}
		      	else
		      	{
		      		$('.alert-error').show();
		      	}
		    	},function(error){
      			console.log(error);
    			});	
			}
			else{
				$('.alert-samepassword').show();
			}
		}
		else
		{
			$('.alert-nomatch').show();
		}
	}
}])
