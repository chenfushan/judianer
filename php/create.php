<?php 
	include 'class.php';
	session_start();
	if (isset($_SESSION['partyName']) && isset($_SESSION['partyAddr'])) {
		$partyName = $_SESSION['partyName'];
		$partyAddr = $_SESSION['partyAddr'];
	}else{
		echo "empty";
		return 0;
	}
	$partyDate = $_POST['DateSelected'];
	$createName = $_POST['name'];
	if ($partyDate == '' || $createName = '') {
		echo "false";
		return 0;
	}
	$party = new party($partyName, $partyAddr, $partyDate, $createName);
	echo $party;
	$partyID = $party->createParty();
	if ($partyID != '') {
		echo $partyID;
	}else{
		echo "false";
	}
	echo "good";
 ?>