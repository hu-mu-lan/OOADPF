function newConstraint(){
      laywindow = layer.open({
        type: 1
        ,title: 'new Constraint'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newConstraint' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Initator:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Initator" lay-filter="aihao"></select></div></div><b>Terminal:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Terminal" lay-filter="aihao"></select></div></div><b>Phenomenon:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Phenomenon" id="Phenomenon" lay-verify="title" autocomplete="off" placeholder="Phenomenon" class="layui-input"></input></div></div><b>Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Type" id="Type" lay-verify="title" autocomplete="off" placeholder="Type" class="layui-input"></input></div></div><br><br><b>isConstraint:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="checkbox" name="constraint" id="constraint" lay-text="YES|NO" lay-skin="switch"></input></div></div><br><br><button id="add" type="button" class="layui-btn layui-btn-fluid" onclick="addPhenomenonC(form.Initator, form.Phenomenon)">add</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="removePhenomenonC(form.Initator, form.Phenomenon)">delete</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="newConstraintAjax(form.Initator, form.Terminal, form.Type, form.constraint)">submit</button><b>Pay Attention! Once you submitted, you cannot revise the phenomenon!</b><br></form><script src="js\\getLists.js"></script><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>getSlistIF();layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
        ,success: function(layero){
            
        }
      });
}

var allPhenomenonC = "";
var allpheNumsC = parseInt("0");
function addPhenomenonC(init, phe){
	console.log(init.value);
	console.log(getShapeByIndex(init.value));
    allPhenomenonC = allPhenomenonC + getShapeByIndex(init.value) + "!" + phe.value + ";";
    var myParent = document.getElementById("IndexRef"); 
    var myNewPhe = document.createElement("div");
    myParent.appendChild(myNewPhe);
    myNewPhe.innerHTML = getShapeByIndex(init.value) + " ! " + phe.value;
    myNewPhe.id = getShapeByIndex(init.value) + "!" + phe.value;
    myNewPhe.classList.add("layui-colla-content");
    myNewPhe.classList.add("layui-show");
}

function removePhenomenonR(init, phe){
    var removePhe =  getShapeByIndex(init.value) + "!" + phe.value;
    var myParent = document.getElementById("IndexRef"); 
    var pheLists = allPhenomenonC.split(";");
	console.log(removePhe);
    allPhenomenonC = "";
    for(var i = 0; i < pheLists.length; i++){
        if(pheLists[i] == ""){
            continue;
        }else{
            if(pheLists[i] == removePhe){
                myParent.removeChild(myParent.childNodes[i + allpheNumsR + 3]);
            }else{
                allPhenomenonC = allPhenomenonC + pheLists[i];
            }
        }
    }
}



function newConstraintAjax(initator, terminal, type, isConstraint){
	var xmlHttp = new XMLHttpRequest();
	var init = initator.value;
    var term = terminal.value;
    var Type = type.value;
    var isCon = isConstraint.value;
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
            cxt.beginPath();
            cxt.setLineDash([10, 5]);
	    	cxt.moveTo(r2,r1);
	    	cxt.lineTo(r4,r3);
	    	cxt.stroke();
	    	cxt.setLineDash([]);
	    	cxt.closePath();
            var myParent = document.getElementById("body"); 
            var myConstraintName = document.createElement("b");
            myParent.appendChild(myConstraintName);
            console.log(allPhenomenonC.length-1);
            myConstraintName.innerHTML = "(Constraint)" + allPhenomenonC.substring(0,allPhenomenonC.length-1);
            myConstraintName.style.position = "absolute";
            myConstraintName.style.left = ((r2 + r4) / 2) + "px";
            myConstraintName.style.top = ((r1 + r3) / 2) + 60 + "px";
            
            var myParent2 = document.getElementById("IndexRef"); 
            allpheNumsC = myParent2.childNodes.length - 3;
	    }
	}
	xmlHttp.open("GET", "newConstraint.do?origin="+init+"&terminal="+term+"&Type="+Type+"&Phenomenons="+allPhenomenonC+"&isConstraint="+isCon, false);            
	xmlHttp.send();
	allPhenomenonC = "";
    layer.closeAll();
}