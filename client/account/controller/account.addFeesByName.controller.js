angular.module('account')
.controller('accountAddFeesByNameCtrl',['$scope','$rootScope','$state','accountFactory', function($scope,$rootScope,$state,accountFactory){
  $scope.zero = 0;
  $scope.date = new Date();
  $scope.year = new Date().getFullYear();
  var month = new Date().getMonth();


  if (month == 0 || month == 1 || month == 2 || month == 3 || month == 4 || month == 5){
    $scope.pyear=  new Date().getFullYear() - 1;

  }
  else {
    $scope.nyear=  new Date().getFullYear() + 1;
  }

  var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
  }

  activate();
  function activate(){
    accountFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }
  $scope.getSem = function(course){
   $scope.semester =[];
   $rootScope.courseid=course.courseid;
   $scope.sem=course.sem;
   for(var x = 1; x <= $scope.sem; x++){
    $scope.semester.push(x);
  }
}
$scope.getStudentsAccountRecord = function(sem){
  $rootScope.sem= sem;
  accountFactory.getStudentsAccountRecord($rootScope.courseid,sem)
  .then(function(response){
    $scope.record=response.data;
    console.log($scope.record);
    getCourseFeesDetails();
  },function(error){
    console.log(error);
  });
}
$scope.getStudentByName = function(name){

  accountFactory.getStudentByName($rootScope.courseid,$rootScope.sem,name)
  .then(function(response){
    $scope.student=response.data[0];
    $scope.studentname = $scope.student.name;
    console.log($scope.student.sid);
    getPendingFeesBySid($scope.student.sid);
  },function(error){
    console.log(error);
  });
}
$scope.addFees = function(y){
  console.log(y);
  getSlipDetails(y);
  y['sid'] = $scope.student.sid;
  y['courseid'] = $scope.student.courseid;

  y['sem'] = $scope.student.sem;
  y['paid_fees'] = y['tution_fees'] + y['su_exam_fees'] + y['su_sports_fees'] + y['su_enlistment_fees'] + y['misc_fees'] + y['lib_fees'] + y['su_degree_fees'] + y['viva_project_fees'] + y['su_enrollment_fees'] + y['su_exam_project_fees'] ;
  //  $scope.amountString = inWords(y['paid_fees']);
  accountFactory.addFees(y)
  .then(function(response){
    $scope.receipt = response.data;

    yearFromSem($scope.receipt);
    $('.alert-successful').show();
  },function(error){
    console.log(error);
  });
}
function getCourseFeesDetails(){
  accountFactory.getCourseFeesDetails($scope.courseid,$rootScope.sem)
  .then(function(response){
    $scope.totalFees = response.data;

    console.log($scope.totalFees);
  },function(error){
    $('.alert-notavailable').show();
    console.log(error);
  });
}
function getSlipDetails(y){

  $scope.bankName = y['bankName'];
  $scope.ddOrC_Nub = y['ddOrC_Nub'];

}
$scope.countPaid = function(a,b,c,d,e,f){

  $scope.paid_fees= a + b + c + d + e + f;


}

function yearFromSem (receipt){
  if($scope.receipt.sem == 1 || $scope.receipt.sem == 2){
    $scope.receipt['year'] = "f.y.";
  }
  else if ($scope.receipt.sem || $scope.receipt.sem == 4){
    $scope.receipt['year'] = "s.y.";
  }
  else {
    $scope.receipt['year'] = "t.y.";
  }
}
$scope.printReceipt = function(x){
  $state.go('account.PrintReceipt',{ 'id' : x });

}

function getPendingFeesBySid(sid){
  accountFactory.getPendingFeesBySid(sid)
  .then(function(response){
    $scope.feesData = response.data;
  },function(error){
    console.log(error);
  })
}
}])