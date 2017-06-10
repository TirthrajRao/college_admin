angular.module('collegeAdmin')
.factory('accountFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
	var obj ={};

	obj.addFeesDetails =function(x){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/addFeesDetails.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getFeesDetails =function(){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getFeesDetails.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getFeeDetails =function(id){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getFeeDetails.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.deleteFeesStructure =function(id){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/deleteFeesStructure.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.updateFees =function(x){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/updateFees.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}


	obj.getCourses =function(){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getCourses.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getStudentsAccountRecord =function(courseid,sem){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getStudentsAccountRecord.php?courseid="+courseid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getStudentByName =function(courseid,sem,name){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getStudentByName.php?courseid="+courseid+"&sem="+sem+"&name="+name)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.addFees =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/addFees.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.allPending =function(courseid,sem){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/allPending.php?courseid="+courseid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.addPendingFees =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/addPendingFees.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getStudentPendingFees =function(sid,sem){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getStudentPendingFees.php?sid="+sid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getCourseFeesDetails =function(courseid,sem){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getCourseFeesDetails.php?courseid="+courseid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.addDiscountFees =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/addDiscountFees.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getPaymentDetails =function(courseid,sem){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getPaymentDetailsRecord.php?courseid="+courseid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getPaymentDetailsByYear =function(x){
		var defer = $q.defer();
		$http.grt($rootScope.serverUrl+"account/getPaymentDetailsByYear.php?courseid="+x['courseid']+"&sem="+x['sem'])
		.then(function(response){
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
	obj.getReceiptsBySid =function(sid){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getReceiptsBySid.php?sid="+sid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getPendingFeesBySid =function(sid){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getPendingFeesBySid.php?sid="+sid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getAccountRecord =function(x){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getAccountRecord.php?sid="+x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getReceipt =function(id){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getReceipt.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getReceiptByCourse =function(courseid,rid){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getReceiptByCourse.php?courseid="+courseid+"&rid="+rid)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getDateWiseRecord =function(date){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getDateWiseRecord.php?date="+date)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getDateWiseAdmissionRecord =function(date){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/dateWiseAdmission.php?date="+date)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getFeesReportFromTo =function(fromdate,todate){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/generateFeesReportFromTo.php?fromdate="+fromdate+"&todate="+todate)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getSemWiseDetails =function(course,sem,fromdate,todate){

		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"account/getSemWiseDetails.php?course="+course+"&sem="+sem+"&fromdate="+fromdate+"&todate="+todate)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.insertIntoPassout =function(courseid,sem){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/insertIntoPassout.php?courseid="+courseid+"&sem="+sem)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.promoteToNextSem =function(courseid,sem){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"account/promoteToNextSem.php?courseid="+courseid+"&sem="+sem)
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
    obj.cancelReceipt =function(id){

        var defer = $q.defer();
        $http.post($rootScope.serverUrl+"account/cancelReceipt.php?id="+id)
            .then(function(response){
                defer.resolve(response);
            },function(error){
                defer.reject(error);
            });
        return defer.promise;
    }
    obj.logout = function(){
    	var defer = $q.defer();
    	$http.get($rootScope.serverUrl+"account/logout.php")
			.then(function(response){
    		defer.resolve(response);
		},function(error){
				defer.reject(error);
		});
    	return defer.promise;
	}

    return obj;

}])
