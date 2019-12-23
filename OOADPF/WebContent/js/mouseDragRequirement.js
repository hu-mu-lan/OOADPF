var dragableElem = document.getElementsByName('dragableRequirement')[0];
drag3(dragableElem);

var mouseOutLeft;
var mouseOutTop;

var laywindow3;

function drag3(elem) {
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
            newRequirement();
            document.onmouseup = null;
            
                        
            var myParent = document.getElementById("body"); 
            var myImage = document.createElement("img");
            myImage.src = "img/requirementBigBack.png";
            myParent.appendChild(myImage);
            myImage.style.position = "absolute";
            myImage.style.left = mouseOutLeft + "px";
			myImage.style.top = mouseOutTop + "px";
			myImage.id = "requirement" + shapeNum;
			myImage.ondblclick = function(){requirementRevise(this.id);};
        }
    }
}

function newRequirement(){
      laywindow3 = layer.open({
        type: 1
        ,title: 'New Requirement'
        ,closeBtn: 1
        ,shade: 0.8
        ,id: 'newRequirement' //设定一个id，防止重复弹出
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><form><b>Description:</b><br><input type="text" name="description" id="description" lay-verify="title" autocomplete="off" placeholder="Description" class="layui-input"></input><br><button type="button" class="layui-btn layui-btn-fluid" onclick="checkHasR(form.description)">submit</button></form></div>'
		,success: function(layero){
            
        }
      });
}

function checkHasR(description){
    if(description.value.length == 0){
        layer.msg('Please Input!', {time: 800, icon:2});
    }else{
    	newRequirementAjax(description);
    }
}

function newRequirementAjax(description){
	var xmlHttp = new XMLHttpRequest();
	var des = description.value;
	xmlHttp.onreadystatechange = function(){
	    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
	        //成功信息
	    }
	}
	xmlHttp.open("GET", "newRequirement.do?Description="+des+"&top="+mouseOutTop+"&left="+mouseOutLeft, true);            
	xmlHttp.send();
    layer.closeAll();
    
    var myParent = document.getElementById("body"); 
    var myRequirementName = document.createElement("b");
    myParent.appendChild(myRequirementName);
    myRequirementName.innerHTML = des;
    myRequirementName.style.position = "absolute";
    myRequirementName.style.left = mouseOutLeft + 40 + "px";
    myRequirementName.style.top = mouseOutTop + 30 + "px";
    myRequirementName.id = "requirementName" + shapeNum;
    shapeNum = shapeNum + 1;
}