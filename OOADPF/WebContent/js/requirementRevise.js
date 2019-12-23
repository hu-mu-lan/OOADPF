var reviseNumR = parseInt("0");

function requirementRevise(id){
    reviseNumR = parseInt(id.substring(11));
    console.log(reviseNumR);
    laywindow13 = layer.open({
        type: 1
        ,title: 'Revise Requirement'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'reviseRequirement' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form><b>Description:</b><br><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="newDescription" class="layui-input"></input><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHasRR(form.description)">submit</button></form></div>'
		,success: function(layero){
            
        }
      });
}

function checkHasRR(description){
    if(description.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
    	requirementReviseAjax(description.value);
    }
}

function requirementReviseAjax(Description){
	var xmlHttp = new XMLHttpRequest();
	var des = Description;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "reviseRequirement.do?Description="+des+"&Id="+reviseNumR, false);            
	xmlHttp.send();
    var reviseName = document.getElementById("requirementName" + reviseNumR);
    reviseName.innerHTML = des;
    layer.closeAll();
}