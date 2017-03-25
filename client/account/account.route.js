angular.module('account',['ui.router','ngStorage','ngAnimate'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state('account.Home',{
    url : '/home',
    templateUrl : 'account/view/accountHome.html',
    controller : 'accountHomeCtrl'
  })

  .state('account.AddFeesDetails',{
    url : '/addFeesDetails',
    templateUrl : 'account/view/addFeesDetails.html',
    controller : 'accountAddFeesCtrl'
  })

  .state('account.AddFeesByName',{
   url : '/addFees',
   templateUrl : 'account/view/addFeesByName.html',
   controller : 'accountAddFeesByNameCtrl'
  })

  .state('account.PrintReceipt',{
   url : '/receipt/:id',
   templateUrl : 'account/view/printReceipt.html',
   controller : 'accountPrintReceiptCtrl'
  })
  .state('account.AllPending',{
   url : '/allPending',
   templateUrl : 'account/view/allPending.html',
   controller : 'accountAllPendingCtrl'
  })
  .state('account.AddPendingFees',{
   url : '/allPending/:id',
   templateUrl : 'account/view/addPendingFees.html',
   controller : 'accountAddPendingFeesCtrl'
  })
  .state('account.FeesDetails',{
    url : '/feesDetails',
    templateUrl : 'account/view/feesDetails.html',
    controller : 'accountFeesDetailsCtrl'
  })
  .state('account.EditFees',{
    url : '/editFees/:id',
    templateUrl : 'account/view/editFeesDetails.html',
    controller : 'accountEditFeesCtrl'
  })
  .state('account.PaymentDetails',{
    url : '/paymentDetails',
    templateUrl : 'account/view/paymentDetails.html',
    controller : 'accountPaymentDetailsCtrl'
  })
  .state('account.PaymentDetailsByYear',{
    url : '/pastPaymentRecord',
    templateUrl : 'account/view/paymentDetailsByYear.html',
    controller : 'accountPaymentDetailsByYearCtrl'
  })
  .state('account.PaymentDetailsByGrno',{
    url : '/searchRecord',
    templateUrl : 'account/view/accountRecord.html',
    controller : 'accountGetAccountRecord'
  })
  .state('account.SearchReceipt',{
    url : '/searchReceipt',
    templateUrl : 'account/view/searchReceipt.html',
    controller : 'accountSearchReceiptCtrl'
  })
  .state('account.DateWiseRecord',{
    url : '/RecordByDate',
    templateUrl : 'account/view/dateWiseRecord.html',
    controller : 'accountDateWiseRecordCtrl'
  })
  .state('account.FeesDetailsFromTo',{
    url : '/FeesRecord',
    templateUrl : 'account/view/feesDetailFromTo.html',
    controller : 'accountFeesRecordFromToCtrl'
  })
  .state('account.SemWiseDetails',{
    url : '/SemWise/:course',
    templateUrl : 'account/view/semWiseDetails.html',
    controller : 'accountSemWiseDetailsCtrl'
  })

  .state('account.DateWiseAdmissionChart',{
    url : '/dateWiseAdmission',
    templateUrl : 'account/view/dateWiseAdmission.html',
    controller : 'accountDateWiseAdmissionCtrl'
  })
  .state('account.PromoteStudent',{
    url : '/promoteStudent',
    templateUrl : 'account/view/promoteStudent.html',
    controller : 'accountPromoteStudentCtrl'
  })
  .state('account.notPaid',{
    url : '/notPaid',
    templateUrl : 'account/view/notPaidListOfStudents.html',
    controller : 'accountNotPaidCtrl'
  })
  
  }])