angular.module('admin',['ui.router','ngStorage','ngAnimate'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('admin.login',{
		url : '/login',
		templateUrl : 'admin/view/adminLogin.html',
		controller : 'adminLoginCtrl'	
	})
	
	.state('admin.Students',{
		url : '/students',
		templateUrl : 'admin/view/students.html',
		controller : 'adminStudentsCtrl'
	})
	.state('admin.Bonafide',{
		url : '/certificate/bonafide',
		templateUrl : 'admin/view/bonafideByGrno.html',
		controller : 'adminCertificatesCtrl'
	})
	.state('admin.TrialCertificate',{
		url : '/certificate/trial',
		templateUrl : 'admin/view/trialCertificate.html',
		controller : 'adminTrialCertificateCtrl'
	})

	.state('admin.studentInquiry',{
		url : '/inquiry',
		templateUrl : 'admin/view/studentInquiry.html',
		controller : 'adminStudentInquiryCtrl'
	})

	.state('admin.StudentContactInfo',{
		url : '/students/contact',
		templateUrl : 'admin/view/studentContactInfo.html',
		controller : 'adminStudentContactInfoCtrl'
	})
	.state('admin.EditStudent',{
		url : '/students/:id',
		templateUrl : 'admin/view/editStudent.html',
		controller : 'editStudentCtrl'
	})
	.state('admin.GetBonafide',{
		url : '/bonafide/:id',
		templateUrl : 'admin/view/bonafide.html',
		controller : 'adminBonafideCtrl'
	})
	.state('admin.EnterEnrollment',{
		url : '/enterEnrollment',
		templateUrl : 'admin/view/enterEnrollment.html',
		controller : 'adminEnterEnrollmentCtrl'
	})
	.state('admin.CategoryChart',{
		url : '/categoryChart',
		templateUrl : 'admin/view/categoryChart.html',
		controller : 'adminCategoryChartCtrl'
	})
	.state('admin.NocCertificate',{
		url : '/nocCertificate',
		templateUrl : 'admin/view/noc.html',
		controller : 'adminCertificatesCtrl'
	})
	.state('admin.TransferCertificate',{
		url : '/transferCertificate',
		templateUrl : 'admin/view/transferCertificate.html',
		controller : 'adminCertificatesCtrl'
	})
	.state('admin.CharacterCertificate',{
		url : '/characterCertificate',
		templateUrl : 'admin/view/characterCertificate.html',
		controller : 'adminCertificatesCtrl'
	})
	.state('admin.CourseFeeStructure',{
		url : '/feeStructure',
		templateUrl : 'admin/view/courseFeeStructure.html',
		controller : 'adminCertificatesCtrl'
	})
	.state('admin.MAsterTable',{
		url : '/masterTable',
		templateUrl : 'admin/view/masterTable.html',
		controller : 'adminMasterTableCtrl'
	})
	.state('admin.register',{
		url : '/register',
		templateUrl : 'admin/view/register.html',
		controller : 'addStudentCtrl'
	})
	.state('admin.generateIdCard',{
		url : '/generateIdCard',
		templateUrl : 'admin/view/generateIdCard.html',
		controller : 'admingenerateIdCardCtrl'
	})
	.state('admin.cancelAdmission',{
		url : '/cancelAdmission',
		templateUrl : 'admin/view/cancelAdmission.html',
		controller : 'adminCancelAdmissionCtrl'
	})

	.state('admin.viewInquiry',{
		url : '/viewInquiry',
		templateUrl : 'admin/view/viewInquiry.html',
		controller : 'adminViewInquiryCtrl'
	})

	.state('admin.cancelStudentByYear',{
		url : '/viewCancelStudentByYear',
		templateUrl : 'admin/view/getCancelAdmissionByYear.html',
		controller : 'adminCancelStudentsByYearCtrl'
	})

	.state('admin.cancelAdmissionCurrent',{
		url : '/currentYearCancelAdmission',
		templateUrl : 'admin/view/admissionCancelStudents.html',
		controller : 'cancelStudentsByCurrentYearCtrl'
	})

	.state('admin.InquiryByYear',{
		url : '/viewInquiryByYear',
		templateUrl : 'admin/view/viewInquiryByYear.html',
		controller : 'adminInquiryByYearCtrl'
	})
	
}])
