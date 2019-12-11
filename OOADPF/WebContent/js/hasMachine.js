function hasMachine(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	if(result == "1"){
	    		document.getElementById("machine").classList.add("layui-btn-disabled");
	    	}else{
	    		document.getElementById("machine").classList.remove("layui-btn-disabled");
	    	}
	    }
	}
	xmlHttp.open("GET", "hasMachine.do", true);            
	xmlHttp.send();
}