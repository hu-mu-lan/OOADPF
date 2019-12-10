function newInterface(){
      laywindow = layer.open({
        type: 1
        ,title: 'New Interface'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newInterface' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Initator:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Initator" lay-filter="aihao"></select></div></div><b>Terminal:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Terminal" lay-filter="aihao"></select></div></div><b>Phenomenon:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Phenomenon" id="Phenomenon" lay-verify="title" autocomplete="off" placeholder="Phenomenon" class="layui-input"></input></div></div><b>Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Type" lay-filter="aihao"><option value="1">event</option><option value="2">state</option><option value="3">value</option></select></div></div><br><br><button type="button" class="layui-btn layui-btn-fluid">add</button><br><br><button type="button" class="layui-btn layui-btn-fluid">delete</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="newInterfaceAjax(form.Initator, form.Terminal, form.Type)">submit</button><br></form><script src="js\\getLists.js"></script><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>getSlistIF();layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
        ,success: function(layero){
            
        }
      });
}

function newInterfaceAjax(initator, terminal, type){
	var xmlHttp = new XMLHttpRequest();
	var init = initator.value;
    var term = terminal.value;
    var Type = type.value;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var result = xmlHttp.responseText;
	    	var resultList = result.split(";");
	    	var c=document.getElementById("myCanvas");
	    	var cxt=c.getContext("2d");
            var r1 = parseFloat(resultList[0]);
            var r2 = parseFloat(resultList[1]);
            var r3 = parseFloat(resultList[2]);
            var r4 = parseFloat(resultList[3]);
	    	cxt.moveTo(r2,r1);
	    	cxt.lineTo(r4,r3);
	    	cxt.stroke();
	    }
	}
	xmlHttp.open("GET", "newInterface.do?origin="+init+"&terminal="+term+"&Type="+Type, true);            
	xmlHttp.send();
    layer.closeAll();
}