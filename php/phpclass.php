<?php 
	/**
	* class party
	*/
	class party
	{
		private $partyName = '';
		private $partyAddr = '';
		private $partyDate = '';
		private $createUser = '';
		function __construct($name, $addr, $date, $user)
		{
			$partyName = $name;
			$partyAddr = $addr;
			$partyDate = $date;
			$createUser = $user;
		}
		public function createParty(){
			$mysql = new MySql();
			$db = $mysql->dbConnect();
			$query = "insert into party(partyName, partyAddr, partyDate, createDate, createUser) values('".$partyName."','".$partyAddr."','".$partyDate."',now(),'".$createUser."')";
			$result = $db->query($query);
			if (!$result) {
				return false;
			}
			$partyID = $db->insert_id;
			return $partyID;
		}
	}

	/**
	* Mysql connect to database
	*/
	class MySql
	{
		
		function __construct()
		{	
		}
		public function dbConnect()
		{
			$result = new mysqli('localhost','root','chenfushan','judianer');
			if (!$result) {
				return false;
			}
			$result = $result->autocommit(TRUE);
			return $result;
		}
		public function resultToArray($result)
		{
			$resArray = array();
			for ($count=0; $row = $result->fetch_assoc(); $count++) { 
				$resArray[$count] = $row;
			}
			return $resArray;
		}
	}
	
 ?>