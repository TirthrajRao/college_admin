angular.module('account')
.controller('accountAddFeesCtrl',['$scope','$rootScope','$state','accountFactory',function($scope,$rootScope,$state,accountFactory){


 activate();
 function activate(){
   accountFactory.getCourses()
   .then(function(response){
     $scope.courses=response.data;
     console.log($scope.courses);

   },function(error){
     console.log(error);
   });
 }

 $scope.getSem = function(course){
  $scope.semester =[];
  $rootScope.courseid=course.courseid;
  console.log($rootScope.courseid);
  $scope.sem=course.sem;
  for(var x = 1; x <= $scope.sem; x++){
   $scope.semester.push(x);


 }
 console.log($scope.semester);

}

$scope.addFeesDetails =function(x){
  console.log(x);
  $("button[type=submit]").attr('disabled','disabled');
  x['courseid']=x['course']['courseid'];
  x['sdate'] =x['fdate'].getFullYear() + "/" +
  (x['fdate'].getMonth()+1) + "/" +
  x['fdate'].getDate();

  x['edate'] =x['tdate'].getFullYear() + "/" +
  (x['tdate'].getMonth()+1) + "/" +
  x['tdate'].getDate();

  x['total_fees'] = x['tution_fees'] + x['su_exam_fees'] + x['su_sports_fees'] + x['su_enlistment_fees'] + x['misc_fees'] + x['lib_fees'] + x['su_degree_fees'] + x['viva_project_fees'] + x['su_enrollment_fees'] + x['su_exam_project_fees'] ;
  console.log(x);
  accountFactory.addFeesDetails(x)
  .then(function(response){
    $scope.x = null;
    $("button[type=submit]").removeAttr('disabled');
    $('.alert-updated').show();
  },function(error){
    console.log(error);
  });
}
}]);
