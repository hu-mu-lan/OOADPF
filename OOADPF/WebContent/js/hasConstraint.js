var constraintNums = parseInt("0");

function hasConstraint(){
	constraintNums = parseInt("0");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
            constraintNums = parseInt(result);
	    }
	}
	xmlHttp.open("GET", "hasConstraint.do", false);            
	xmlHttp.send();
    return constraintNums;
}