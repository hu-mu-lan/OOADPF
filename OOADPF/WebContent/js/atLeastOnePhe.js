var hasPhe = parseInt("0");

function atLeastOnePhe(){
	hasPhe = parseInt("0");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	if(result == "1"){
	    		hasPhe = 1;
	    	}else{
	    		hasPhe = 0;
	    	}
	    }
	}
	xmlHttp.open("GET", "atLeastOnePhe.do", false);            
	xmlHttp.send();
	return hasPhe
}