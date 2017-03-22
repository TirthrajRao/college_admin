angular.module('admin')
.controller('adminCertificatesCtrl',['$scope','$state','$rootScope','$localStorage','adminFactory',function($scope,$state,$rootScope,$localStorage,adminFactory){
  if($state.current.name == 'admin.Bonafide'){
    var type = 'bonafide';
  }else if($state.current.name == 'admin.NocCertificate') {
    var type = 'noc';
  }else if($state.current.name == 'admin.CharacterCertificate'){
    var type = 'character';
  }else if($state.current.name == 'admin.TransferCertificate'){
    var type = 'transfer';
  }

  $scope.x = {};
  $(document).on('keydown', function(e) {
      if(e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
         
          e.cancelBubble = true;
          e.preventDefault();

          e.stopImmediatePropagation();
      }
  });
  activate();
  function activate(){
    adminFactory.getCourses()
    .then(function(response){
      $scope.courses=response.data;
    },function(error){
      console.log(error);
    });
  }
  generateCid(type);
  function generateCid(type){
    adminFactory.generateCid(type)
    .then(function(response){
      $scope.cid=response.data;
      console.log($scope.cid);
    },function(error){
      console.log(error);
    });
  }

  $scope.getStudentsByCourse = function(courseid){
    $scope.courseid = courseid.courseid;
    adminFactory.getStudentsByCourse($scope.courseid)
    .then(function(response){
      $scope.students=response.data
    },function(error){
      console.log(error);
    });
  }

  $scope.date = new Date();
  $scope.year = new Date().getFullYear();
  var month = new Date().getMonth();
  if (month == 0 || month == 1 || month == 2 || month == 3 || month == 4 || month == 5){
    $scope.pyear=  new Date().getFullYear() - 1;
  }
  else {
    $scope.nyear=  new Date().getFullYear() + 1;
  }

  $scope.getStudentByGrno = function(grno){
    adminFactory.getStudentByGrno(grno)
    .then(function(response){
      $scope.student=response.data[0];
      if ($scope.student['gender'] == "Male")
      {
        $scope.student['hello']="Mr";
        $scope.student['hello1']="He";
        $scope.student['hello2']="His";
        $scope.student['hello3']="he";
      }
      else{
        $scope.student['hello']="Miss";
        $scope.student['hello1']="She";
        $scope.student['hello2']="Her";
        $scope.student['hello3']="she";
      }
    },function(error){
      console.log(error);
    });
  }
  $scope.purpose = '';
  $scope.generateCertificate= function(sid){
    $scope.x['type'] = type;
    $scope.x['purpose'] = $scope.purpose;
    console.log($scope.x['purpose']);
    $scope.x['sid'] = sid;
    $scope.x['cid'] = $scope.cid;
    $scope.x['issuer'] = $localStorage.user.username;
    generateCid(type);
    console.log($scope.x);
    adminFactory.generateCertificate($scope.x)
    .then(function(response){
      generateCid(type);
    },function(error){
      console.log(error);
    })

  }
  function checkCertificates(){
    adminFactory.checkCertificates($scope.student.sid,type)
    .then(function(response){
      $scope.duplicate = response.data;
    },function(error){
      console.log(error);
    })

  }

}])
