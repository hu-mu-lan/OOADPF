function newCanvas(){
      layer.open({
        type: 1
        ,title: 'New Project'
        ,closeBtn: 1
        ,area: '300px;'
        ,shade: 0.8
        ,id: 'newCanvas' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><b>Description:</b><br><form><input type="text" name="description" id="description" required lay-verify="required" autocomplete="off" placeholder="Description" class="layui-input"><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHas(form.description)">submit</button></form></div>'
        ,success: function(layero){
            document.getElementById("back").classList.remove("layui-btn-disabled");
            document.getElementById("next").classList.remove("layui-btn-disabled");
            document.getElementById("machine").classList.remove("layui-btn-disabled");
        }
      });
}

function checkHas(description){
    if(description.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
        sendDescription(description);
    }
}

function sendDescription(description){
	var xmlHttp = new XMLHttpRequest();
	var des = description.value;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "newCanvas.do?description="+des, true);            
	xmlHttp.send();
	document.getElementById("newli").setAttribute("onclick",null);
    document.getElementById("new").setAttribute("href","javascript:return false;");
    document.getElementById("new").style.opacity = 0.2;
//    layer.close(layer.index);
    
    layer.closeAll();
    layer.msg('Succeed to creating a Project!', {time: 500, icon:1});
    document.getElementById("DiagramDescription").innerHTML = "Description: " + des;
    document.getElementById("DiagramDescription").classList.add("layui-show");
}
