angular.module('account')
  .controller('accountPrintReceiptCtrl',['$scope','$state','$rootScope','$stateParams','accountFactory',function($scope,$state,$rootScope,$stateParams,accountFactory){
    var id = $stateParams.id;
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

    searchReceipt(id);
     function searchReceipt(id){
      accountFactory.getReceipt(id)
      .then(function(response){
        $scope.receipt= response.data[0];
             $scope.receipt['amountString'] = inWords($scope.receipt.paid_fees);
         yearFromSem($scope.receipt);
        console.log($scope.receipt);

      },function(error){
        console.log(error);
      });
    }

    function yearFromSem (){
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

  }])
