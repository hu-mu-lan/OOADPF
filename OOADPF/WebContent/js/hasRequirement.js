function hasRequirement(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	if(result == "1"){
	    		document.getElementById("requirement").classList.add("layui-btn-disabled");
	    	}else{
	    		document.getElementById("requirement").classList.remove("layui-btn-disabled");
	    	}
	    }
	}
	xmlHttp.open("GET", "hasRequirement.do", true);            
	xmlHttp.send();
}