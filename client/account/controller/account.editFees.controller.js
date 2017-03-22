angular.module('account')
.controller('accountEditFeesCtrl',['$scope','$state','$stateParams','accountFactory',function($scope,$state,$stateParams,accountFactory){

  var id = $stateParams.id;

  activate();
  function activate(){
    
    accountFactory.getFeeDetails(id)
    .then(function(response){
      $scope.fee=response.data;
      $scope.fee['tution_fees']= parseInt($scope.fee['tution_fees']);
      $scope.fee['su_exam_fees']= parseInt($scope.fee['su_exam_fees']);
      $scope.fee['su_sports_fees']= parseInt($scope.fee['su_sports_fees']);
      $scope.fee['su_enlistment_fees']= parseInt($scope.fee['su_enlistment_fees']);
      $scope.fee['misc_fees']= parseInt($scope.fee['misc_fees']);
      $scope.fee['lib_fees']= parseInt($scope.fee['lib_fees']);
      $scope.fee['su_degree_fees']= parseInt($scope.fee['su_degree_fees']);
      $scope.fee['viva_project_fees'] = parseInt($scope.fee['viva_project_fees']);
      $scope.fee['su_exam_project_fees'] = parseInt($scope.fee['su_exam_project_fees']);
      $scope.fee['su_enrollment_fees'] = parseInt($scope.fee['su_enrollment_fees']);
      console.log($scope.fee);
    },function(error){
      $('.alert-error').show();
    })
  }

  $scope.updateFees= function(fee) {
    $("button[type=submit]").attr('disabled','disabled');
    fee['total_fees'] = fee['tution_fees'] + fee['su_exam_fees'] + fee['su_sports_fees'] + fee['su_enlistment_fees'] + fee['misc_fees'] + fee['lib_fees'] + fee['su_degree_fees'] + fee['viva_project_fees'] + fee['su_enrollment_fees'] + fee['su_exam_project_fees'] ;
    accountFactory.updateFees(fee)
    .then(function(response){
      $('.alert-successful').show();
      $("button[type=submit]").removeAttr('disabled');
    },function(error){
      $('.alert-error').show();
    }
    )
  }

}])
