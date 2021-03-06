angular.module('collegeAdmin')
.factory('adminFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
	var obj ={};

	obj.login =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/login.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.addStudent =function(x,adhar,file){
		console.log("student detailsss", x,adhar,file);
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/addStudent.php",x)

		.then(function(success){
			var sid = success.data;
			$http.post($rootScope.serverUrl+"student/addStudentPhoto.php?sid="+sid,file);
			uploadFile(file,$rootScope.serverUrl+"student/addStudentPhoto.php?sid="+success.data);
			$http.post($rootScope.serverUrl+"student/addAdharCard.php?sid="+sid,adhar);
			uploadFile(adhar,$rootScope.serverUrl+"student/addAdharCard.php?sid="+success.data);
			defer.resolve(success);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getStudents =function(){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getStudents.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getStudentsBySem =function(x,y){
		console.log("passes courseId and sem",x,y);
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getStudentsBySem.php?courseid="+x+"&sem="+y)
		.then(function(response){
			console.log("response of selected sem",response);
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getStudent =function(id){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getStudent.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.cancelAdmission = function(student){
		console.log(student);
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/cancelAdmission.php",student)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getAdmissionCancelStudents =function(){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getListAdmissionCancel.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getAdmissionCancelByYear = function(academicYear){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getAdmissionCancelStudentsFromYear.php?academicYear="+academicYear)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getPastInqueryByYear = function(academicYear){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getInqueryStudentsFromYear.php?academicYear="+academicYear)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.moveInAdmission = function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/changeInquireStatus.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.AddInquiry = function(student){
		console.log(student);
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/AddInquire.php",student)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	
	obj.getAllInquires =function(academicYear){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getInquiryStudentsIncollege.php?academicYear="+academicYear)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}


	obj.getStudentByName =function(name){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getStudentByName.php?name="+name)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}


	obj.getStudentByGrno =function(grno){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getStudentByGrno.php?grno="+grno)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getCourses =function(course){
		console.log("course details",course);

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getCourses.php")
		.then(function(response){
			console.log("response of courses details",response);
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.updateStudent =function(x,adhar,file){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/updateStudent.php",x)
		.then(function(response){
			console.log("updated student when no changes",response);
			// var sid = response.data;
			// $http.post($rootScope.serverUrl+"student/addStudentPhoto.php?sid="+sid,file);
			// uploadFile(file,$rootScope.serverUrl+"student/addStudentPhoto.php?sid="+success.data);
			// $http.post($rootScope.serverUrl+"student/addAdharCard.php?sid="+sid,adhar);
			// uploadFile(adhar,$rootScope.serverUrl+"student/addAdharCard.php?sid="+success.data);
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getStudentsByCourse =function(courseid){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getStudentsByCourse.php?courseid="+courseid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getLastGrno = function(courseid){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/getLastGrno.php?courseid="+courseid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.submitEntrollment = function(sid,enrollment){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/submitEntrollment.php?sid="+sid+"&enrollment="+enrollment)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getCategoryChart = function(courseid){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/categoryChart.php?courseid="+courseid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.generateCertificate = function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"student/certificateDetails.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.generateCid = function(type){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/generateCid.php?type="+type)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.checkCertificates = function(sid,type){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"student/checkCertificates.php?sid="+sid+"&type="+type)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.changeAdminPassword =function(x){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/changeAdminPassword.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	function uploadFile (file, uploadUrl){

					 var fd = new FormData();
					 fd.append('file', file);
					 $http.post(uploadUrl, fd, {
							transformRequest: angular.identity,
							headers: {'Content-Type': undefined}
					 })
				}


	return obj;
}])

.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;

                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }])

.service('fileUpload', ['$http', function ($http) {

         }]);
