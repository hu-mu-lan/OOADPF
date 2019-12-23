var hasNum = parseInt("0");

function hasSingleShape(){
	hasNum = parseInt("0");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	if(result == "1"){
	    		hasNum = 1;
	    	}else{
	    		hasNum = 0;
	    	}
	    }
	}
	xmlHttp.open("GET", "hasSingleShape.do", false);            
	xmlHttp.send();
	return hasNum;
}