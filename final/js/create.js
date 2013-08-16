$(document).ready(function(){
	console.log(localStorage["names"]);
	console.log(localStorage["times"]);
	console.log(localStorage["locations"]);
	console.log(localStorage["descriptions"]);
	console.log(localStorage["pays"]);
	$('#submit').click(function(){
		/*首先判断列表是否为空 localStorage是本地浏览器的数据库 相当于cookie一样*/
		var names = new Array(), times = new Array(), locations = new Array(), descriptions = new Array(), pays = new Array(); 
		if (localStorage["Empty"] == "No"){
			console.log(names);
			names = JSON.parse(localStorage['names']);
			times = JSON.parse(localStorage['times']);
			locations = JSON.parse(localStorage['locations']);
			descriptions = JSON.parse(localStorage['descriptions']);
			pays = JSON.parse(localStorage['pays']);
		}
		localStorage["Empty"] = "No";
		/*获得输入的内容*/
		names.push(create.names.value);
		times.push(create.times.value);
		locations.push(create.locations.value);
		descriptions.push(create.descriptions.value);
		pays.push(create.pays.value);
		console.log(names);
		/*将输入的内容提交给本地的数据库*/
		localStorage["names"] = JSON.stringify(names);
		localStorage["times"] = JSON.stringify(times);
		localStorage["locations"] = JSON.stringify(locations);
		localStorage["descriptions"] = JSON.stringify(descriptions);
		localStorage["pays"] = JSON.stringify(pays);
		console.log(localStorage["names"]);
		console.log(localStorage["names"]);
		console.log(localStorage["times"]);
		console.log(localStorage["locations"]);
		console.log(localStorage["descriptions"]);
		console.log(localStorage["pays"]);
		$('#create').submit();
	});
});