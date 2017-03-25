angular.module('admin')
.controller('editStudentCtrl', ['$scope','$stateParams','$state','adminFactory','$rootScope',function($scope,$stateParams,$state,adminFactory,$rootScope){

	$scope.getBonafide = function(x){

		$state.go('admin.GetBonafide',{ 'id' : x });
		console.log(x);
	}
	var id=$stateParams.id;
	activated(id);
	function activated(id){
		adminFactory.getStudent(id)
		.then(function(response){
			$scope.student=response.data;
			$scope.student['sphone'] = parseInt($scope.student['sphone']);
			$scope.student['grno'] = parseInt($scope.student['grno']);
			$scope.student['fphone'] = parseInt($scope.student['fphone']);
			$scope.student['rphone'] = parseInt($scope.student['rphone']);
			$scope.student['ophone'] = parseInt($scope.student['ophone']);
			$scope.student['pincode'] = parseInt($scope.student['pincode']);
			$scope.student['yop'] = parseInt($scope.student['yop']);
			$scope.student['attempt'] = parseInt($scope.student['attempt']);
			$scope.student['total_marks'] = parseInt($scope.student['total_marks']);
			$scope.student['obtain_marks'] = parseInt($scope.student['obtain_marks']);
			console.log($scope.student);
		},function(error){
			console.log(error);
		});
	}

	$scope.roundedPercentage = function(myValue, totalValue){
		var result = ((myValue/totalValue)*100)
		return Math.round(result, 2);
	}
	$scope.doUpdate= function(student,adhar,photo){
		$("button[type=submit]").attr('disabled','disabled');
		student['sphone']=parseInt(student['sphone']);
		student['fphone']=parseInt(student['fphone']);
		student['rphone']=parseInt(student['rphone']);
		student['ophone']=parseInt(student['ophone']);
		student['pincode'] = parseInt(student['pincode']);
		student['yop'] = parseInt(student['yop']);
		student['attempt'] = parseInt(student['attempt']);
		student['total_marks'] = parseInt(student['total_marks']);
		student['obtain_marks'] = parseInt(student['obtain_marks']);
		student['percent']= $scope.roundedPercentage(student['obtain_marks'],student['total_marks']);
		console.log(student);
		adminFactory.updateStudent(student,adhar,photo)
		.then(function(response){
			$('.alert-success').show();
			$("button[type=submit]").removeAttr('disabled');
			//	$state.go('admin.home');
		},function(error){
			console.log(error);
		});
	}
$scope.getSem = function(course){
		console.log(course);
		$scope.semester =[];
		$rootScope.courseid=course.courseid;
		$scope.sem=course.sem;
		for(var x = 1; x <= $scope.sem; x++){
			$scope.semester.push(x);  }
			adminFactory.getLastGrno($rootScope.courseid)
			.then(function(response){
				$scope.lastGr=response.data;
			},function(error){
				console.log(error);
			});
		}
	activate();
	function activate(){
		adminFactory.getCourses()
		.then(function(response){
			$scope.courses=response.data;
			console.log($scope.courses);
		},function(error){
			console.log(error);
		});
	}
}]);
