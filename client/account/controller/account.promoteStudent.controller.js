angular.module('account')
.controller('accountPromoteStudentCtrl',['$scope','$state','accountFactory',function($scope,$state,accountFactory){

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
    console.log(course);
    $scope.semester =[];
    $scope.courseid=course.courseid;

    $scope.sem=course.sem;
    for(var x = 1; x <= $scope.sem; x++){
      $scope.semester.push(x);
    }
  }

  $scope.getSemester = function(sem){
    $scope.sem = sem;
    console.log($scope.sem);
  }

  $scope.insertIntoPassout = function(sem){

    accountFactory.insertIntoPassout($scope.courseid,sem)
    .then(function(Response){
      $("button[type=submit]").attr('disabled','disabled');
      $('.alert-successful-passout').show();
    },function(error){
      $("button[type=submit]").removeAttr('disabled'); 
      $('.alert-error').show();
    });
  }

  $scope.promoteToNextSem = function(sem){
    $("button[type=submit]").attr('disabled','disabled');
    accountFactory.promoteToNextSem($scope.courseid,sem)
    .then(function(Response){
      $('.alert-successful-nextsem').show();
      $("button[type=submit]").removeAttr('disabled');
    },function(error){
      $('.alert-error').show();
    });
  }

}])
