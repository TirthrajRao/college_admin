angular.module('account')
.controller('accountAddPendingFeesCtrl',['$scope','$stateParams','$state','$rootScope','$localStorage','accountFactory',function($scope,$stateParams,$state,$rootScope,$localStorage,accountFactory){

  $scope.zero = 0;

  var id = $stateParams.id;
  getStudent(id);

  function getStudent(id){

    accountFactory.getStudentPendingFees(id,$localStorage.sem)
    .then(function(response){
      $scope.student=response.data[0];
      $scope.student.paid_fees['paid_fees'] = parseInt($scope.student.paid_fees['paid_fees']);
      $scope.student.pending_fees['pending_fees'] = parseInt($scope.student.pending_fees['pending_fees']);
      $scope.student.discount['discount'] = parseInt($scope.student.discount['discount']);
      console.log($scope.student);
    },function(error){
      console.log(error);
    });

  }
  $scope.addPendingFees = function(x){
    $("button[type=submit]").attr('disabled','disabled');
    console.log(x['discount_']);
    x['discount_'] = parseInt(x['discount_']);
    x['sid'] = $scope.student['sid'];
    x['courseid'] = $scope.student['courseid'];
    x['sem'] = $scope.student.pending_fees['sem'];
    x['paid'] = x['tution_fees'] + x['su_exam_fees'] + x['su_sports_fees'] + x['su_enlistment_fees'] + x['misc_fees'] + x['lib_fees'] + x['su_degree_fees'] + x['viva_project_fees'] + x['su_enrollment_fees'] + x['su_exam_project_fees'] ;
    x['paid_fees'] = $scope.student.paid_fees['paid_fees'] + x['paid'];
    x['pending_fees']=$scope.student.pending_fees['pending_fees'] - (x['paid'] + x['discount_']);
    x['discount'] = $scope.student.discount['discount'] + x['discount_'];
    console.log(x);
    accountFactory.addPendingFees(x)
    .then(function(response){
     $scope.receipt=response.data;
     console.log($scope.receipt);
     $('.alert-successful').show();
     $("button[type=submit]").removeAttr('disabled');
    $state.go('account.PrintReceipt',{ 'id' : $scope.receipt.id });
    getStudent(id);
  },function(error){
    console.log(error);
    /*if(error.status == 409){
        alert("You have already paid fess.");
      }
      else{
        alert("Couldn't paid fees right now.  try again later.")
      }*/
  });

  }
  $scope.printReceipt = function(x){

    $state.go('account.PrintReceipt',{ 'id' : x });

  }


}]);
