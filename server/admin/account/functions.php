<?php

include("config.php");

$month = date("m");
		if($month < 6){
			$academicYear = (date('Y')-1).'-'.date('Y');
		}
		else {
			$academicYear = date('Y').'-'.(date('Y')+1);
	}

function getStudentBySid($con,$sid){
		$result = mysqli_query($con,"SELECT * FROM student where sid = '$sid'");
		while($x = mysqli_fetch_assoc($result)){
			return $x;
		}
		return $x;
	}

function getStudentByGrno($con,$grno){
			$result = mysqli_query($con,"SELECT * FROM student where grno = '$grno'");
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return NULL;
		}

function getPaidFeesBySid($con,$sid){
		$result = mysqli_query($con,"SELECT `paid_fees` FROM paid_fees where `sid` = '$sid'");
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
		return $x;
		}
		return $x['paid_fees'];
	}

function getPendingFeesBySid($con,$sid,$sem){
  		$result = mysqli_query($con,"SELECT * FROM pending_fees where `sid` = '$sid' AND `sem` = '$sem' ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
  		return $x;
  		}
  		return $x;
  	}
function getDiscountFeesBySid($con,$sid,$sem){
	  		$result = mysqli_query($con,"SELECT `discount` FROM paid_fees where `sid` = '$sid' AND `sem` = '$sem' ")or die(mysqli_error($con));
				while($x = mysqli_fetch_assoc($result)){
	  		return $x;
	  		}
	  		return $x['discount'];
	  	}

function getPendingFees($con,$paid_fees,$courseid,$sem){
			$total_fees = getTotalFeesBySem($con,$courseid,$sem);
			$x = $total_fees['total_fees'];
			$pending_fees = $x - $paid_fees;
			return $pending_fees;
		}

function getTotalFeesBySem($con,$courseid,$sem){
		$result = mysqli_query($con,"SELECT `total_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
		while($x = mysqli_fetch_assoc($result)){
			return $x;
			}
			return $x['total_fees'];
		}
		function getEnlistmentFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_enlistment_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_enlistment_fees'];
		}
		function getTutionFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `tution_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['tution_fees'];
		}
		function getExamFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_exam_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_exam_fees'];
		}
		function getSportsFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_sports_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_sports_fees'];
		}
		function getMiscFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `misc_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['misc_fees'];
		}
		function getLibFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `lib_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['lib_fees'];
		}
		function getSuDegreeFeeBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_degree_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_degree_fees'];
		}
		function getProjectFeeBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_exam_project_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_exam_project_fees'];
		}

		function getVivaFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `viva_project_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['viva_project_fees'];
		}
		function getEnrollmentFeesBySem($con,$courseid,$sem){
			$result = mysqli_query($con,"SELECT `su_enrollment_fees` FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x['su_enrollment_fees'];
		}
		function getStudentNameFromSid($con,$sid){
			$result = mysqli_query($con,"SELECT `name` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
				return $x;
			}
			return $x;
		}

	function getStudentContactDetailsFromSid($con,$sid){
			$result = mysqli_query($con,"SELECT `sphone`,`rphone`,`fphone`,`ophone` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
			while($x = mysqli_fetch_assoc($result)){
					return $x;
					}
					return $x;
				}

		function getStudentGrnoFromSid($con,$sid){
				$result = mysqli_query($con,"SELECT `grno` FROM student WHERE `sid` = '$sid' ") or die(mysqli_error($con));
				while($x = mysqli_fetch_assoc($result)){
					return $x;
					}
					return $x['grno'];
				}
			function getFeesDetailsBySem($con,$courseid,$sem){
				$result = mysqli_query($con,"SELECT * FROM course_fees WHERE `courseid` = '$courseid' and `sem` = '$sem'  ")or die(mysqli_error($con));
				while($x = mysqli_fetch_assoc($result)){
					return $x;
				}
				return $x;
			}



 function addPendingFees($con,$sid,$rid,$paid_fees,$tution_fees,$su_exam_fees,$su_sports_fees,$su_enlistment_fees,$misc_fees,$lib_fees,$su_exam_project_fees,$su_degree_fees,$viva_project_fees,$su_enrollment_fees,$discount,$courseid,$sem,$payMode,$ddOrC_Nub,$bankName,$date,$academicYear){

	 	$total_fees = getTotalFeesBySem($con,$courseid,$sem);
 	 	$x = $total_fees['total_fees'];
 	$enlistFees = getEnlistmentFeesBySem($con,$courseid,$sem);
 	$enlistFees = $enlistFees['su_enlistment_fees'];
 	$sportFees = getSportsFeesBySem($con,$courseid,$sem);
 	$sportFees = $sportFees['su_sports_fees'];
 	$tutionFees = getTutionFeesBySem($con,$courseid,$sem);
 	$tutionFees = $tutionFees['tution_fees'];
 	$examFees = getExamFeesBySem($con,$courseid,$sem);
 	$examFees = $examFees['su_exam_fees'];
 	$miscFees = getMiscFeesBySem($con,$courseid,$sem);
 	$miscFees = $miscFees['misc_fees'];
 	$libFees = getLibFeesBySem($con,$courseid,$sem);
 	$libFees = $libFees['lib_fees'];
	$degreeFees = getSuDegreeFeeBySem($con,$courseid,$sem);
	$degreeFees = $degreeFees['su_degree_fees'];
	$projectFees = getProjectFeeBySem($con,$courseid,$sem);
	$projectFees = $projectFees['su_exam_project_fees'];
	$vivaFees = getVivaFeesBySem($con,$courseid,$sem);
	$vivaFees = $vivaFees['viva_project_fees'];
	$enrollFees = getEnrollmentFeesBySem($con,$courseid,$sem);
	$enrollFees = $enrollFees['su_enrollment_fees'];




 	$pending_tution = $tutionFees - $tution_fees ;
	$pending_exam = $examFees - $su_exam_fees;
 	$pending_misc = $miscFees - $misc_fees;
 	$pending_lib = $libFees - $lib_fees;
 	$pending_enlist = $enlistFees - $su_enlistment_fees;
 	$pending_sport = $sportFees - $su_sports_fees;
	$pending_exam_project_fees = $projectFees - $su_exam_project_fees;
	$pending_degree_fees = $degreeFees - $su_degree_fees;
	$pending_enroll = $enrollFees - $su_enrollment_fees;
	$pending_viva = $vivaFees - $viva_project_fees;

//$newSem = $sem + 1;
 		$pending_fees = $x - $paid_fees - $discount;
 		if ($pending_fees >= 1){
 			mysqli_query($con," INSERT INTO `pending_fees`(`pending_fees`,`sid`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`sem`,`courseid`,`academicYear`,`total_fees`)
 			VALUES ('$pending_fees','$sid',$pending_tution,'$pending_exam','$pending_sport','$pending_enlist','$pending_misc','$pending_lib','$pending_degree_fees','$pending_exam_project_fees','$pending_enroll','$pending_viva','$sem','$courseid','$academicYear','$x')") or die(mysqli_error($con));


		mysqli_query($con,"INSERT INTO `payment_details`(`sid`,`rid`, `sem`,`courseid`, `payMode`, `paid_fees`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`pending_fees`, `ddOrC_Nub`, `bankName`, `date`,`academicYear`)
 		VALUES ('".$sid."','".$rid."','".$sem."','".$courseid."','".$payMode."','".$paid_fees."','".$tution_fees."','".$su_exam_fees."','".$su_sports_fees."','".$su_enlistment_fees."','".$misc_fees."','".$lib_fees."','".$su_degree_fees."','".$su_exam_project_fees."','".$su_enrollment_fees."','".$viva_project_fees."','".$pending_fees."','".$ddOrC_Nub."','".$bankName."','".$date."','".$academicYear."')") or die(mysqli_error($con));
 		$last_id = mysqli_insert_id($con);
 		$ara = array();
 		$ara['id'] = $last_id;
 		$ara['courseid'] = $courseid;
 		$ara['sem'] = $sem;
		$ara['rid'] = $rid;
 		echo json_encode($ara);
 			}
 		else {
			
 			mysqli_query($con,"INSERT INTO `full_paid`(`sid`,`paid`,`discount`,`sem`,`academicYear`)
 			VALUES ('$sid','$paid_fees','$discount','$sem','$academicYear')") or die(mysqli_error($con));
 		mysqli_query($con,"INSERT INTO `payment_details`(`sid`,`rid`, `sem`,`courseid`, `payMode`, `paid_fees`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`pending_fees`, `ddOrC_Nub`, `bankName`, `date`,`academicYear`)
 		VALUES ('".$sid."','".$rid."','".$sem."','".$courseid."','".$payMode."','".$paid_fees."','".$tution_fees."','".$su_exam_fees."','".$su_sports_fees."','".$su_enlistment_fees."','".$misc_fees."','".$lib_fees."','".$su_degree_fees."','".$su_exam_project_fees."','".$su_enrollment_fees."','".$viva_project_fees."','".$pending_fees."','".$ddOrC_Nub."','".$bankName."','".$date."','".$academicYear."')") or die(mysqli_error($con));
 		$last_id = mysqli_insert_id($con);
 		$ara = array();
 		$ara['id'] = $last_id;
 		$ara['courseid'] = $courseid;
 		$ara['sem'] = $sem;
		$ara['rid'] = $rid;
 		echo json_encode($ara);
 				}
 }


function updatePendingFees($con,$sid,$rid,$pending_fees,$paid_fees,$tution_fees,$su_exam_fees,$su_sports_fees,$su_enlistment_fees,$misc_fees,$lib_fees,$su_degree_fees,$su_enrollment_fees,$su_exam_project_fees,$viva_project_fees,$paid,$discount,$courseid,$sem,$payMode,$ddOrC_Nub,$bankName,$date,$academicYear){

			$total_fees = getTotalFeesOfPending($con,$sid,$sem);
 			$x = $total_fees['total_fees'];
 		 //	$pending = $x - ($paid_fees + $discount);
		 	mysqli_query($con,"UPDATE pending_fees set
 			`pending_fees` = '".$pending_fees."'
      	WHERE `sid` = '".$sid."' ") or die(mysqli_error($con));
   			if($pending_fees <= 0) {

						mysqli_query($con,"INSERT INTO full_paid (`sid`,`paid`,`discount`,`sem`,`academicYear`)
							VALUES ('$sid','$paid_fees','$discount','$sem','$academicYear')") or die(mysqli_error($con));

					mysqli_query($con,"DELETE from `pending_fees` where `sid` = '$sid' AND `sem` = '$sem' ")or die(header("HTTP/1.1 409 Conflict"));

					mysqli_query($con,"INSERT INTO `payment_details` (`sid`,`rid`, `sem`,`courseid`,`payMode`,
					`paid_fees`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,
					`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,
					`pending_fees`, `ddOrC_Nub`, `bankName`, `date`,`academicYear`)
						VALUES ('".$sid."','".$rid."','".$sem."','".$courseid."','".$payMode."',
					'".$paid."','".$tution_fees."','".$su_exam_fees."','".$su_sports_fees."',
					'".$su_enlistment_fees."','".$misc_fees."','".$lib_fees."','".$su_degree_fees."',
					'".$su_exam_project_fees."','".$su_enrollment_fees."','".$viva_project_fees."',
					'".$pending_fees."','".$ddOrC_Nub."','".$bankName."','".$date."','".$academicYear."')")
					 or die(mysqli_error($con));

					$last_id = mysqli_insert_id($con);
					$ara = array();
					$ara['id'] = $last_id;
					$ara['courseid'] = $courseid;
					$ara['sem'] = $sem;
					$ara['rid'] = $rid;

					echo json_encode($ara);
			}
			else{
				echo "hello1";
				mysqli_query($con,"INSERT INTO `payment_details`(`sid`,`rid`, `sem`,`courseid`, `payMode`, `paid_fees`,`tution_fees`,`su_exam_fees`,`su_sports_fees`,`su_enlistment_fees`,`misc_fees`,`lib_fees`,`su_degree_fees`,`su_exam_project_fees`,`su_enrollment_fees`,`viva_project_fees`,`pending_fees`, `ddOrC_Nub`, `bankName`, `date`,`academicYear`)
					VALUES ('".$sid."','".$rid."','".$sem."','".$courseid."','".$payMode."','".$paid."','".$tution_fees."','".$su_exam_fees."','".$su_sports_fees."','".$su_enlistment_fees."','".$misc_fees."','".$lib_fees."','".$su_degree_fees."','".$su_exam_project_fees."','".$su_enrollment_fees."','".$viva_project_fees."','".$pending_fees."','".$ddOrC_Nub."','".$bankName."','".$date."','".$academicYear."')") or die(mysqli_error($con));

				$last_id = mysqli_insert_id($con);
				$ara = array();
				$ara['id'] = $last_id;
				$ara['courseid'] = $courseid;
				$ara['rid'] = $rid;

				echo json_encode($ara);
			}
 		}

function getSidOfAllStudentBySem($con,$courseid,$sem){
 		$result = mysqli_query($con,"SELECT `sid` FROM student WHERE `courseid` = '".$courseid."' and `sem` = '".$sem."' ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
			array_push($ara,$x['sid']);
		}
		return $ara;
	}

	function getSidOfAllStudentByCourse($con,$courseid){
	 		$result = mysqli_query($con,"SELECT `sid` FROM student WHERE `courseid` = '".$courseid."' ") or die(mysqli_error($con));
			$ara = array();
			while($x = mysqli_fetch_assoc($result)){
				array_push($ara,$x['sid']);
			}
			return $ara;
		}
function getSidFromPaidFees($con,$sem){
		$result = mysqli_query($con,"SELECT DISTINCT `sid`  FROM paid_fees WHERE `sem` = '$sem'  ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x['sid']);
		}
		return $ara;
	}

function getSidFromFullPaid($con,$sem){
		$result = mysqli_query($con,"SELECT DISTINCT `sid`  FROM full_paid WHERE `sem` = '$sem' ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x['sid']);
		}
		return $ara;
	}

function getSidFromPendingFees($con,$sem){
		$result = mysqli_query($con,"SELECT DISTINCT `sid` FROM pending_fees WHERE `sem` = '$sem'  ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x['sid']);
		}
		return $ara;
	}

function getSidOfPendingStudents($con,$courseid,$sem){
	$result = mysqli_query($con,"SELECT DISTINCT `sid` FROM pending_fees WHERE `sem` = '$sem' AND `courseid` = '$courseid' ") or die(mysqli_error($con));
	$ara = array();
	while($x = mysqli_fetch_assoc($result)){
	array_push($ara,$x['sid']);
	}
	return $ara;
}

 function getSidOfAllNewPending($con,$courseid,$sem){
	 	$allSid = getSidOfAllStudentBySem($con,$courseid,$sem);
	 	$pendingSid = getSidFromPendingFees($con,$sem);
 		$fullPaid = getSidFromFullPaid($con,$sem);
 		$new = array();
	 	$allNew = array();
	 	foreach($allSid as $x){
		 	if(!in_array($x,$pendingSid))
				array_push($allNew,$x);
	 	}
	 foreach($allSid as $x){
			if(!in_array($x,$fullPaid))
				array_push($new,$x);
	 }
	 return $new;
 }

function allSidFullPaid($con,$academicYear){
	 	$result = mysqli_query($con,"SELECT DISTINCT `sid`  FROM full_paid WHERE  `academicYear` = '$academicYear' ") or die(mysqli_error($con));
 		$ara = array();
 		while($x = mysqli_fetch_assoc($result)){
 		array_push($ara,$x['sid']);
 		}
 		return $ara;
	}

 function allSidPending($con,$academicYear){
	 	$result = mysqli_query($con,"SELECT DISTINCT `sid`  FROM pending_fees WHERE  `academicYear` = '$academicYear' ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
				array_push($ara,$x['sid']);
		}
		return $ara;
		}

 function getSidOfStudentsByCourse($con,$courseid){
	 	$result = mysqli_query($con,"SELECT `sid`  FROM student WHERE  `courseid` = '$courseid' ") or die(mysqli_error($con));
		$ara = array();
		while($x = mysqli_fetch_assoc($result)){
		array_push($ara,$x['sid']);
		}
		return $ara;
	}
function getTotalFeesOfPending($con,$sid,$sem){
	$result = mysqli_query($con,"SELECT `total_fees` FROM pending_fees WHERE `sid` = '$sid' and `sem` = '$sem'  ")or die(mysqli_error($con));
	while($x = mysqli_fetch_assoc($result)){
		return $x;
		}
		return $x;
}
function getSidByGrno($con,$courseid,$grno){
	 $result = mysqli_query($con,"SELECT `sid`  FROM student WHERE  `courseid` = '$courseid' AND `grno` = '$grno' ") or die(mysqli_error($con));
	 $ara = array();
	 while($x = mysqli_fetch_assoc($result)){
	 array_push($ara,$x['sid']);
	 }
	 return $ara;
 }

function getTotolPaymentCourseWiseFromTo($con,$courseid,$sem,$fromdate,$todate){
	 $result = mysqli_query($con,"select `paid_fees` from payment_details where courseid = '".$courseid."' AND sem = '".$sem."' AND date BETWEEN '$fromdate' AND '$todate'")or die(mysqli_error($con));
	 $ara = array();
	 while($x = mysqli_fetch_assoc($result)){
		 array_push($ara,$x);
	 }

	 foreach(	$ara as $value){
		 	$total+=$value['paid_fees'];
	 }
	 return $total;
 }
?>
