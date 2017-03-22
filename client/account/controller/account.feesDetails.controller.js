angular.module('account')
  .controller('accountFeesDetailsCtrl',['$scope','$state','accountFactory',function($scope,$state,accountFactory){

    $scope.editFees = function(x){

        $state.go('account.EditFees',{ 'id' : x });
        
      }


    activate();
    function activate(){

      accountFactory.getFeesDetails()
      .then(function(response){
        $scope.fees=response.data;

      },function(error){
        console.log(error);
      });
    }

  }])
