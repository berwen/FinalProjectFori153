$(document).ready(function(){
	/*当前被访问的活动编号*/
	var Id = localStorage["CurrentId"];
	console.log(Id);
	var names, times, locations, descriptions, pays;
	names = JSON.parse(localStorage['names']);
	times = JSON.parse(localStorage['times']);
	locations = JSON.parse(localStorage['locations']);
	descriptions = JSON.parse(localStorage['descriptions']);
	pays = JSON.parse(localStorage['pays']);
	$('#description').append("<br>"+descriptions[Id]);
	$('#time').append("<br>"+times[Id]);
	$('#location').append("<br>"+locations[Id]);
	$('#pays').append(":"+pays[Id]);
});