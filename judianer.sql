create database judianer;

	create table party{
		partyID int primary key auto_increment,
		partyName varchar(100) not null,
		partyAddr varchar(200) not null,
		partyDate date not null
		};

	