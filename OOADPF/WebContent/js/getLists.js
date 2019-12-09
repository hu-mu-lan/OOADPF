function getSlist(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "getLists.do?Symbol=1&List=slist", true);            
	xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var result = xmlHttp.responseText;
            var resultList = result.split(";");
            for(var i = 1; i <= resultList.length; i++){
                document.getElementsByName("Initator")[0].options.add(new Option(resultList[i-1], i)); 
                document.getElementsByName("Terminal")[0].options.add(new Option(resultList[i-1], i));
            }
            renderForm();
	    }
	}
}

function getSlistAndLoc(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "getLists.do?Symbol=2&List=slist", true);            
	xmlHttp.send();
    xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            var result = xmlHttp.responseText;
            window.alert(result);
	    }
	}
}

function renderForm(){
  layui.use('form', function(){
   var form = layui.form;//高版本建议把括号去掉，有的低版本，需要加()
   form.render();
  });
}