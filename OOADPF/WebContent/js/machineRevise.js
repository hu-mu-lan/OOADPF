var reviseNum = parseInt("0");

function machineRevise(id){
    reviseNum = parseInt(id.substring(7));
    console.log(reviseNum);
    laywindow = layer.open({
        type: 1
        ,title: 'Revise Machine'
        ,closeBtn: 1
        ,area: '300px;'
        ,shade: 0.8
        ,id: 'reviseMachine' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form><b>Description:</b><br><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="newDescription" class="layui-input"></input><br><b>ShortName:</b><br><input type="text" name="shortname" id="shortname" lay-verify="title" autocomplete="off" placeholder="newShortName" class="layui-input"></input><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHasMR(form.description, form.shortname)">submit</button></form></div>'
        ,success: function(layero){
        	
        }
      });
}

function checkHasMR(description, shortname){
    if(description.value.length == 0 || shortname.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
    	machineReviseAjax(description.value, shortname.value);
    }
}

function machineReviseAjax(Description, Shortname){
	var xmlHttp = new XMLHttpRequest();
	var des = Description;
    var shn = Shortname;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "reviseMachine.do?Description="+Description+"&ShortName="+Shortname+"&Id="+reviseNum, false);            
	xmlHttp.send();
    var reviseName = document.getElementById("machineName" + reviseNum);
    reviseName.innerHTML = Description;
    layer.closeAll();
}