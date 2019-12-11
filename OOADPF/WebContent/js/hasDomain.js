var domainNums = parseInt("0");

function hasDomain(){
	domainNums = parseInt("0");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
            domainNums = parseInt(result);
	    }
	}
	xmlHttp.open("GET", "hasDomain.do", false);            
	xmlHttp.send();
    return domainNums;
}