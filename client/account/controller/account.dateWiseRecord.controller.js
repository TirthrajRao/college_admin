angular.module('account')
  .controller('accountDateWiseRecordCtrl',['$scope','$state','$rootScope','$localStorage','accountFactory',function($scope,$state,$rootScope,$localStorage,accountFactory){
$scope.orderByCourse = "courseid";
    $scope.getDateWiseRecord = function(fDate){

      y =fDate.getFullYear();
      m = fDate.getMonth()+1;
      d = fDate.getDate();
      if(d < 10){
       d = "0"+d;
     };
     if(m < 10){
       m = "0"+m;
     };

		$scope.date =y +"-"+ m +"-"+	d;

		            accountFactory.getDateWiseRecord($scope.date)
            .then(function(response){
              $scope.record=response.data;
              console.log($scope.record);
            },function(error){
               $('.alert-error').show();
            });
}
}])
