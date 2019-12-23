var reviseNumD = parseInt("0");

function domainRevise(id){
	console.log(id);
    reviseNumD = id.substring(6);
    console.log(id.substring(6));
    console.log(reviseNumD);
    laywindow2 = layer.open({
        type: 1
        ,title: 'Revise Domain'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'reviseDomain' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Description:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="newDescription" class="layui-input"></input></div></div><b>ShortName:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="shortname" id="shortname" lay-verify="title" autocomplete="off" placeholder="newShortName" class="layui-input"></input></div></div><b>Physical Property:</b><div class="layui-form-item"><div class="layui-input-block"><select name="physicalproperty" lay-filter="aihao"><option value="1">GivenDomain</option><option value="2">DesignDomain</option></select></div></div><b>Domain Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="domaintype" lay-filter="aihao"><option value="1">Casual</option><option value="2">Biddable</option><option value="3">Lexical</option></select></div></div><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHasDR(form.description, form.shortname, form.physicalproperty, form.domaintype)">submit</button></form><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
		,success: function(layero){
            
        }
      });
}

function checkHasDR(description, shortname, physicalproperty, domaintype){
    if(description.value.length == 0 || shortname.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
    	domainReviseAjax(description.value, shortname.value, physicalproperty.value, domaintype.value);
    }
}

function domainReviseAjax(description, shortname, physicalproperty, domaintype){
	var xmlHttp = new XMLHttpRequest();
	var des = description;
    var shn = shortname;
    var ppt = physicalproperty;
    var dmt = domaintype;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "reviseDomain.do?Description="+des+"&ShortName="+shn+"&Id="+reviseNumD+"&Property="+ppt+"&Type="+dmt, false);            
	xmlHttp.send();
    var reviseImage = document.getElementById("domain" + reviseNumD);
    if(ppt == 1){
        reviseImage.src = "img/givenDomainBigBack.png";
    }else if(ppt == 2){
        reviseImage.src = "img/designDomainBigBack.png";
    }
    var reviseName = document.getElementById("domainName" + reviseNumD);
    reviseName.innerHTML = description;
    var reviseType = document.getElementById("domainType" + reviseNumD);
    if(dmt == 1){
        reviseType.innerHTML = "C";
    }else if(dmt == 2){
        reviseType.innerHTML = "B";
    }else if(dmt == 3){
        reviseType.innerHTML = "X";
    }
    layer.closeAll();
}