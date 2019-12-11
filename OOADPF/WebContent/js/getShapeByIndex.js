var resultShape;

function getShapeByIndex(index){
	var xmlHttp = new XMLHttpRequest();
	var indexNum = index;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	resultShape = xmlHttp.responseText;
	    }
	}
	xmlHttp.open("GET", "getShapeByIndex.do?index="+indexNum, false);            
	xmlHttp.send();
	console.log(resultShape);
    return resultShape;
}