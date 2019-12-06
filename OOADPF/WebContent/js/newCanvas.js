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
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><b>Description:</b><br><form><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="Description" class="layui-input"><br><button type="button" class="layui-btn layui-btn-fluid" onclick="sendDescription(form.description)">submit</button></form></div>'
        ,success: function(layero){
        	
        }
      });
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
    layer.close(layer.index);
}
