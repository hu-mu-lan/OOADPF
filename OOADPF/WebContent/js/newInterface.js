function newInterface(){
      laywindow = layer.open({
        type: 1
        ,title: 'New Interface'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newInterface' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Initator:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Initator" lay-filter="aihao"></select></div></div><b>Terminal:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Terminal" lay-filter="aihao"></select></div></div><b>Phenomenon:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Phenomenon" id="Phenomenon" lay-verify="title" autocomplete="off" placeholder="Phenomenon" class="layui-input"></input></div></div><b>Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Type" lay-filter="aihao"><option value="1">event</option><option value="2">state</option><option value="3">value</option></select></div></div><br><br><button type="button" class="layui-btn layui-btn-fluid">add</button><br><br><button type="button" class="layui-btn layui-btn-fluid">delete</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="newDomainAjax(form.description, form.shortname, form.physicalproperty, form.domaintype)">submit</button><br></form><script src="js\\getLists.js"></script><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>getSlist();layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
        ,success: function(layero){
            
        }
      });
}

function newInterfaceAjax(description, shortname){
	var xmlHttp = new XMLHttpRequest();
	var des = description.value;
    var shn = shortname.value;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "newMachine.do?Description="+des+"&ShortName="+shn+"&top="+mouseOutTop+"&left="+mouseOutLeft, true);            
	xmlHttp.send();
    layer.closeAll();
}