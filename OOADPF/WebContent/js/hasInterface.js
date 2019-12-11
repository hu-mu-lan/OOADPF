var interfaceNums = parseInt("0");

function hasInterface(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
            interfaceNums = parseInt(result);
	    }
	}
	xmlHttp.open("GET", "hasInterface.do", false);            
	xmlHttp.send();
    return interfaceNums;
}