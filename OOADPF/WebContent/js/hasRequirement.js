var requirementNums = parseInt("0");

function hasRequirement(){
	requirementNums = parseInt("0");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	if(result == "1"){
	    		document.getElementById("requirement").classList.add("layui-btn-disabled");
	    		requirementNums = requirementNums + 1;
	    	}else{
	    		document.getElementById("requirement").classList.remove("layui-btn-disabled");
	    	}
	    }
	}
	xmlHttp.open("GET", "hasRequirement.do", true);            
	xmlHttp.send();
	return requirementNums;
}