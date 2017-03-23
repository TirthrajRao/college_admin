angular.module('collegeAdmin')
.config(['$stateProvider','$urlRouterProvider','$locationProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  $stateProvider
  .state('account',{
    url : '/account',
    views:{
      'top' : {
        templateUrl : 'account/view/menu.html',
        controller  : 'logoutCtrl'
      },

      'bottom' : {
        template :'<ui-view></ui-view>'

      }
    }
  })
  .state('admin',{
    url : '/admin',
    views:{
      'top' : {
        templateUrl : 'admin/view/menu.html',
        controller  : 'logoutCtrl'
      },

      'bottom' : {
        template :'<ui-view></ui-view>',
      }
    }
  });

//    $locationProvider.html5Mode(true);
$urlRouterProvider.otherwise('/admin/login');

}])
.run(['$rootScope','$localStorage','$state','$stateParams',function($rootScope,$localStorage,$state,$stateParams){
  $rootScope.serverUrl = 'http://132.140.160.109/college/collegeAdminNew/server/admin/';
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event , toState ,fromState){  
    if(toState.name.substr(0,7).localeCompare('account') == 0 || toState.name.substr(0,5).localeCompare('admin')==0)
    {
      if(toState.name.localeCompare("admin.login") == 0 )
      {
      }       
      else{
        console.log($localStorage.adminId);
        if(typeof($localStorage.adminId) == undefined || $localStorage.adminId == null){
          console.log(typeof($localStorage.adminId));
          $state.go('admin.login');
        }
       }
    }
    console.log(toState.name);
  });





}]);
