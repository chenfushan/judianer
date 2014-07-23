$(document).ready(function() {
	var CurDate = new Date();
	var Year = CurDate.getFullYear();
	var Month = CurDate.getMonth()+1;
	var Day = CurDate.getDate();
	var week = CurDate.getDay();
	var BoolYear;
	if ((Year%400 == 0 || (Year%100 != 0 && Year%4 == 0))) {
		BoolYear = true;
	}else{
		BoolYear = false;
	}
	var firstWeek = week + 1 - (Day)%7;
	if (firstWeek < 0) {
		firstWeek = firstWeek + 7;
	}
//	alert(Year + "-"+Month + "-" + Day + "-"+ BoolYear + "-" + week + "-" + firstWeek);
	var MonthDay = 0;
	switch(Month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			MonthDay = 31;
			break;
		case 4:
		case 6:
		case 9:
		case 10:
		case 11:
			MonthDay = 30;
			break;
		case 2:
			if (BoolYear == true) {
				MonthDay = 29;
				break;
			}else{
				MonthDay = 28;
				break;
			}
	}
	var innerHtml = '';
	var calDate = '';
	for (var i = 0; i <= 41; i++) {
		if (i%7 == 0) {
			innerHtml = innerHtml + "<tr class=\"date-line\">";
		}
		if(i < firstWeek){
			innerHtml = innerHtml + "<td class=\"date-day\"><a href=\"javascript:;\" hidefocus=\"true\" class=\"date-link\"></td>";
		}
		if (i >= firstWeek && i < MonthDay+firstWeek) {
			calDate = Year + "-" + Month + "-" + (i+1-firstWeek);
			innerHtml = innerHtml + "<td class=\"date-day\">" + 
			"<a href=\"javascript:;\" class=\"date-link \" " + 
			"date=\""+ calDate +"\"><span class=\"cal-number\">"+ (i+1-firstWeek) +"</span></a></td>";
		}
		if (i >= MonthDay + firstWeek) {
			innerHtml = innerHtml + "<td class=\"date-day\"><a href=\"javascript:;\" hidefocus=\"true\" class=\"date-link\"></td>";
		}
		if (i%7 == 6) {
			innerHtml = innerHtml + "</tr>"
		}
		
	}
	$('#cal-table tbody').append(innerHtml);

	/************************以上是显示日历代码**************************/

	
});
	


	






