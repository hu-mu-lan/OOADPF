for (i = 0; i < 6; i++) { 
    var dragableElem = document.getElementsByName('dragable')[i];
    drag(dragableElem);
 }

function drag(elem) {
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
            elem.style.left = rawOffsetLeft + "px";
            elem.style.top = rawOffsetTop + "px";
        }
    }
}