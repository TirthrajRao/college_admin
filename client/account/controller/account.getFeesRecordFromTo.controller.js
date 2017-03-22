angular.module('account')
  .controller('accountFeesRecordFromToCtrl',['$scope','$rootScope','$state','accountFactory',function($scope,$rootScope,$state,accountFactory){

    $scope.getFeesRecordFromTo = function(fDate,tDate){
    		$rootScope.fromDate =fDate.getFullYear() + "/"+
    						(fDate.getMonth()+1) + "/"+
    						fDate.getDate();

    		$rootScope.toDate = tDate.getFullYear() + "/"+
    						(tDate.getMonth()+1) + "/"+
    						tDate.getDate();

            accountFactory.getFeesReportFromTo($rootScope.fromDate,$rootScope.toDate)
            .then(function(response){
              $scope.record = response.data;
              console.log($scope.record);
            },function(error){
              console.og(error);
            }) ;

          }
          $scope.getAccountBySem = function(course){
            var str = course;
            str = str.replace(/\s+/g, '-').toLowerCase();
                        $state.go('account.SemWiseDetails',{ 'course' : str });

          }

}])
