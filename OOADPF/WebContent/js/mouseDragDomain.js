var dragableElem = document.getElementsByName('dragableDomain')[0];
drag2(dragableElem);

var mouseOutLeft;
var mouseOutTop;

var laywindow2;

function drag2(elem) {
    var disX,
        disY;
    
    var rawLeft = parseInt(elem.getBoundingClientRect().left);
    var rawTop = parseInt(elem.getBoundingClientRect().top);
    
    var rawOffsetLeft = elem.offsetLeft;
    var rawOffsetTop = elem.offsetTop;

    elem.style.left = elem.offsetLeft + "px";
    elem.style.top = elem.offsetTop + "px";
    elem.style.position = "absolute";
    
    elem.onmousedown = function (e) {
        //兼容性操作
        var event = e || window.event;

        //鼠标按下的时候,距离元素的左/上距离     
        disX = event.pageX - parseInt(elem.style.left);     //elem.style.left  返回的是字符串 XXXpx,
        disY = event.pageY - parseInt(elem.style.top);		//用parseInt方法可以将数字提取出来
        
        document.onmousemove = function (e) {

            var event = e || window.event;
                    //鼠标按下的点(相对document) - 鼠标按下的点(相对当前点击的元素) 
            elem.style.left = event.pageX - disX + "px";
            elem.style.top = event.pageY - disY + "px";

        }
        //当鼠标按上时,使move事件失效,这样元素就不会再跟着移动了
        document.onmouseup = function(e){
            document.onmousemove = null;
            mouseOutLeft = elem.getBoundingClientRect().left;
            mouseOutTop = elem.getBoundingClientRect().top;
            elem.style.left = rawOffsetLeft + "px";
            elem.style.top = rawOffsetTop + "px";
            console.log("still working");
            newDomain();
            document.onmouseup = null;
            
//            var myParent = document.getElementById("body"); 
//            var myImage = document.createElement("img");
//            myImage.src = "img/domainBigBack.png";
//            myParent.appendChild(myImage);
//            myImage.style.position = "absolute";
//            myImage.style.left = mouseOutLeft + "px";
//			myImage.style.top = mouseOutTop + "px";
        }
    }
}

function newDomain(){
      laywindow2 = layer.open({
        type: 1
        ,title: 'New Domain'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newDomain' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<link rel="stylesheet" href="lib\\layui-v2.5.5\\css\\layui.css" media="all"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form class="layui-form"><b>Description:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="Description" class="layui-input"></input></div></div><b>ShortName:</b><br><div class="layui-form-item"><div class="layui-input-block"><input type="text" name="shortname" id="shortname" lay-verify="title" autocomplete="off" placeholder="ShortName" class="layui-input"></input></div></div><b>Physical Property:</b><div class="layui-form-item"><div class="layui-input-block"><select name="physicalproperty" lay-filter="aihao"><option value="1">GivenDomain</option><option value="2">DesignDomain</option></select></div></div><b>Domain Type:</b><br><div class="layui-form-item"><div class="layui-input-block"><select name="domaintype" lay-filter="aihao"><option value="1">Casual</option><option value="2">Biddable</option><option value="3">Lexical</option></select></div></div><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHasD(form.description, form.shortname, form.physicalproperty, form.domaintype)">submit</button></form><script src="lib\\layui-v2.5.5\\layui.all.js"></script><script>layui.use("form", function(){var form = layui.form;form.render();});</script></div>'
		,success: function(layero){
            
        }
      });
}

function checkHasD(description, shortname, physicalproperty, domaintype){
    if(description.value.length == 0 || shortname.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
    	newDomainAjax(description, shortname, physicalproperty, domaintype);
    }
}

function newDomainAjax(description, shortname, physicalproperty, domaintype){
	var xmlHttp = new XMLHttpRequest();
	var des = description.value;
    var shn = shortname.value;
    var ppt = physicalproperty.value;
    var dmt = domaintype.value;
    console.log(dmt);
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "newDomain.do?Description="+des+"&ShortName="+shn+"&top="+mouseOutTop+"&left="+mouseOutLeft+"&Property="+ppt+"&Type="+dmt, true);            
	xmlHttp.send();
    layer.closeAll();
    var myParent = document.getElementById("body"); 

    
    if(dmt == 1){
        var myDomainType = document.createElement("b");
        myParent.appendChild(myDomainType);
        myDomainType.innerHTML = "C";
        myDomainType.style.position = "absolute";
        myDomainType.style.left = mouseOutLeft + 175 + "px";
        myDomainType.style.top = mouseOutTop + 75 + "px";
        myDomainType.id = "domainType" + shapeNum;
    }else if(dmt == 2){
        var myDomainType = document.createElement("b");
        myParent.appendChild(myDomainType);
        myDomainType.innerHTML = "B";
        myDomainType.style.position = "absolute";
        myDomainType.style.left = mouseOutLeft + 175 + "px";
        myDomainType.style.top = mouseOutTop + 75 + "px";
        myDomainType.id = "domainType" + shapeNum;
    }else if(dmt == 3){
        var myDomainType = document.createElement("b");
        myParent.appendChild(myDomainType);
        myDomainType.innerHTML = "X";
        myDomainType.style.position = "absolute";
        myDomainType.style.left = mouseOutLeft + 175 + "px";
        myDomainType.style.top = mouseOutTop + 75 + "px";
        myDomainType.id = "domainType" + shapeNum;
    }
    
    if(ppt == 1){
        var myImage = document.createElement("img");
        myImage.src = "img/givenDomainBigBack.png";
        myParent.appendChild(myImage);
        myImage.style.position = "absolute";
        myImage.style.left = mouseOutLeft + "px";
		myImage.style.top = mouseOutTop + "px";
		myImage.id = "domain" + shapeNum;
        myImage.ondblclick = function(){domainRevise(this.id);};
    }else if(ppt == 2){
        var myImage = document.createElement("img");
        myImage.src = "img/designDomainBigBack.png";
        myParent.appendChild(myImage);
        myImage.style.position = "absolute";
        myImage.style.left = mouseOutLeft + "px";
		myImage.style.top = mouseOutTop + "px";
		myImage.id = "domain" + shapeNum;
		myImage.ondblclick = function(){domainRevise(this.id);};
    }
    var myDomainName = document.createElement("b");
    myParent.appendChild(myDomainName);
    myDomainName.innerHTML = des;
    myDomainName.style.position = "absolute";
    myDomainName.style.left = mouseOutLeft + 30 + "px";
    myDomainName.style.top = mouseOutTop + 30 + "px";
    myDomainName.id = "domainName" + shapeNum;
}