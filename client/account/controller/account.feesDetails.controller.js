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


    $scope.deleteFees = function(id){

      accountFactory.deleteFeesStructure(id)
      .then(function(response){
        // $scope.fees=response.data;
        activate();
      },function(error){
        console.log(error);
      });
    }


  }])
