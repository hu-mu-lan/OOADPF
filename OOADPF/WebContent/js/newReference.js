function newReference(){
      laywindow = layer.open({
        type: 1
        ,title: 'new Reference'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newReference' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Initator:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Initator" lay-filter="aihao"></select></div></div><b>Terminal:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="Terminal" lay-filter="aihao"></select></div></div><b>Phenomenon:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Phenomenon" id="Phenomenon" lay-verify="title" autocomplete="off" placeholder="Phenomenon" class="layui-input"></input></div></div><b>Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="Type" id="Type" lay-verify="title" autocomplete="off" placeholder="Type" class="layui-input"></input></div></div><br><br><button id="add" type="button" class="layui-btn layui-btn-fluid" onclick="addPhenomenonR(form.Initator, form.Phenomenon)">add</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="removePhenomenonR(form.Initator, form.Phenomenon)">delete</button><br><br><button type="button" class="layui-btn layui-btn-fluid" onclick="newReferenceAjax(form.Initator, form.Terminal, form.Type)">submit</button><b>Pay Attention! Once you submitted, you cannot revise the phenomenon!</b><br></form><script src="js\\getLists.js"></script><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>getSlistIF();layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
        ,success: function(layero){
            
        }
      });
}

var allPhenomenonR = "";
var allpheNumsR = parseInt("0");
function addPhenomenonR(init, phe){
	console.log(init.value);
	console.log(getShapeByIndex(init.value));
    allPhenomenonR = allPhenomenonR + getShapeByIndex(init.value) + "!" + phe.value + ";";
    var myParent = document.getElementById("IndexInt"); 
    var myNewPhe = document.createElement("div");
    myParent.appendChild(myNewPhe);
    myNewPhe.innerHTML = getShapeByIndex(init.value) + " ! " + phe.value;
    myNewPhe.id = getShapeByIndex(init.value) + "!" + phe.value;
    myNewPhe.classList.add("layui-colla-content");
    myNewPhe.classList.add("layui-show");
}

function removePhenomenonR(init, phe){
    var removePhe =  getShapeByIndex(init.value) + "!" + phe.value;
    var myParent = document.getElementById("IndexInt"); 
    var pheLists = allPhenomenonR.split(";");
	console.log(removePhe);
    allPhenomenonR = "";
    for(var i = 0; i < pheLists.length; i++){
        if(pheLists[i] == ""){
            continue;
        }else{
            if(pheLists[i] == removePhe){
                myParent.removeChild(myParent.childNodes[i + allpheNumsR + 3]);
            }else{
                allPhenomenonR = allPhenomenonR + pheLists[i] + ";";
            }
        }
    }
}



function newReferenceAjax(initator, terminal, type){
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
            cxt.beginPath();
            cxt.setLineDash([10, 5]);
	    	cxt.moveTo(r2,r1);
	    	cxt.lineTo(r4,r3);
	    	cxt.stroke();
	    	cxt.setLineDash([]);
	    	cxt.closePath();
	    	
            var innerans = getShapeByIndex(init) + " ! {";
	    	var allPhenomenonsR = allPhenomenonR.substring(0,allPhenomenonR.length-1).split(";");
            console.log(allPhenomenonsR);
            for (var i=0;i<allPhenomenonsR.length;i++)
            { 
                var tmp = allPhenomenonsR[i].split("!")
                console.log(tmp);
                innerans = innerans + tmp[1] + ",";
                console.log(tmp[1]);
            }
            console.log(innerans);
	    	innerans = innerans.substring(0,innerans.length-1);
            console.log(innerans);
            innerans = innerans + "}";
	    	console.log(innerans);
	    	
            var myParent = document.getElementById("body"); 
            var myReferenceName = document.createElement("b");
            myParent.appendChild(myReferenceName);
            console.log(allPhenomenonR.length-1);
            myReferenceName.innerHTML = innerans;
            myReferenceName.style.position = "absolute";
            myReferenceName.style.left = ((r2 + r4) / 2) + "px";
            myReferenceName.style.top = ((r1 + r3) / 2) + 60 + "px";
            
            var myParent2 = document.getElementById("IndexInt"); 
            allpheNumsR = myParent2.childNodes.length - 3;
	    }
	}
	xmlHttp.open("GET", "newReference.do?origin="+init+"&terminal="+term+"&Type="+Type+"&Phenomenons="+allPhenomenonR, false);            
	xmlHttp.send();
	allPhenomenonR = "";
    layer.closeAll();
}