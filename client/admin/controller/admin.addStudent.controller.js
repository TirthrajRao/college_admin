
angular.module('admin')
.controller('addStudentCtrl', ['$scope','$state','$rootScope','adminFactory',function($scope,$state,$rootScope,adminFactory){
	$scope.roundedPercentage = function(myValue, totalValue){
		var result = ((myValue/totalValue)*100)
		return Math.round(result, 4);
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
	$scope.take_snapshot = function() {
			Webcam.snap( function(data_uri) {
				var myPhoto = data_uri;
				myPhoto = myPhoto.replace('data:image/jpeg;base64,','');
				console.log(myPhoto);
				$scope.myPhoto = JSON.stringify({imageData : myPhoto});
				document.getElementById('results').innerHTML =
				'<img src="'+data_uri+'"/>';
			} );
		}
		$scope.setup = function() {
		$scope.showcam =1;
		Webcam.attach( '#my_camera' );
	}

	$scope.getSem = function(course){
		$scope.semester =[];
		$rootScope.courseid=course.courseid;
		$scope.sem=course.sem;
		for(var x = 1; x <= $scope.sem; x++){
			$scope.semester.push(x);  
			}
		}

		$scope.addStudent = function(x,adhar){
		//	$scope.myPhoto;
		// $("button[type=submit]").attr('disabled','disabled');
			x['courseid']=x['course']['courseid'];
			x['percent']= $scope.roundedPercentage(x['obtain_marks'],x['total_marks']);
			x['name'] = x['lname']+' '+x['fname']+' '+x['mname'];
			x['dob'] =x['fdate'].getFullYear() + "/" +
			(x['fdate'].getMonth()+1) + "/" +
			x['fdate'].getDate();
			var p="images/students/"+x['fname']+x['lname']+'.jpg';
			x['path']=p.toLowerCase();
			// console.log(x['path']);
			if(x['sem'] == 1 || x['sem'] == 2 ){
				x['year'] = 'F.Y.';
			}else{
				if(x['sem'] == 3 || x['sem'] == 4 ){
					x['year'] = 'S.Y.';
				}
				else
				{
					x['year'] = 'T.Y.';
				}	
			} 
			x['sphone']=parseInt(x['sphone']);
			x['fphone']=parseInt(x['fphone']);
			x['rphone']=parseInt(x['rphone']);
			x['ophone']=parseInt(x['ophone']);
			console.log(x);
			adminFactory.addStudent(x,adhar,$scope.myPhoto)
			.then(function(response){
				//$scope.x=null;
			//	console.log($scope.myPhoto);
			 $("button[type=submit]").removeAttr('disabled');
				$('.alert-studentadded').show();
				$state.reload();
			},function(error){
				console.log(error);
				console.error(error);
			});
		}
	}]);
