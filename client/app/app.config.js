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

$urlRouterProvider.otherwise('/admin/login');

}])
.run(['$rootScope','$localStorage','$state','$stateParams',function($rootScope,$localStorage,$state,$stateParams){
  // $rootScope.serverUrl = 'http://132.140.160.112/collegeAdmin-1.1/server/admin/';
  // $rootScope.serverImage = 'http://132.140.160.112/collegeAdmin-1.1/server/';
  $rootScope.serverUrl = 'http://localhost/Hosting_Websites/College_admin/server/admin/';
  $rootScope.serverImage = 'http://localhost/Hosting_Websites/College_admin/server';
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess',function(event , toState ,fromState){
  if($localStorage.atype != undefined || toState.name.substr(0,7) == $localStorage.user.type || toState.name.substr(0,5) == $localStorage.user.type )
  {
    if(toState.name.substr(0,7).localeCompare('account') == 0 || toState.name.substr(0,5).localeCompare('admin')==0)
    {
      if(toState.name.localeCompare("admin.login") == 0 )
      {
      }
      else{
        if(typeof($localStorage.adminId) == undefined || $localStorage.adminId == null){
          $state.go('admin.login');
        }
       }
    }
  }
  else
  {
    $state.go('admin.login');
  }

  });





}]);
