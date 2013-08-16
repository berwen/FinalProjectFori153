$(document).ready(function(){
	var names, times, locations, descriptions, pays; 
	if (localStorage["Empty"] == "Yes"){
		names = new Array();
		times = new Array();
		locations = new Array();
		descriptions = new Array();
		pays = new Array();
	}
	else{
		names = JSON.parse(localStorage['names']);
		times = JSON.parse(localStorage['times']);
		locations = JSON.parse(localStorage['locations']);
		descriptions = JSON.parse(localStorage['descriptions']);
		pays = JSON.parse(localStorage['pays']);
	}
	/* 把所有在列表里的活动一个个加到对应的div里去*/
	var size = names.length;
	for (var i = 0; i < size; ++i){
		$('#a'+(i+1).toString()).append('<a class="act"'+'href="detailDescription.html"><p>Activity name:'+names[i]+'</p>'+'<p>Time:'+times[i]+'</p>'+'<p>Location:'+locations[i]+'</p>'+'<p>Description:'+descriptions[i]+'</p>'+'Money:'+pays[i]+'</p></a>');
	}
	/*将选中的活动编号进行标记*/
	$('.activities').click(function(){
		var idString = this.getAttribute('id');
		var Id;
		switch (idString){
			case "a1":{
				Id = 0; break;
			}
			case "a2":{
				Id = 1; break;
			}
			case "a3":{
				Id = 2; break;
			}
			case "a4":{
				Id = 3; break;
			}
			case "a5":{
				Id = 4; break;
			}
			case "a6":{
				Id = 5; break;
			}
		}
        localStorage["CurrentId"] = Id;
	});
});