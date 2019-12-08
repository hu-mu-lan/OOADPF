var Step = 1;
var Period = 1;

function stepOnLoad(){
	layui.use('element', function(){
        var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
        //监听导航点击
        element.on('nav(demo)', function(elem){
        //console.log(elem)
        layer.msg(elem.text());
      });
    });
    document.getElementById("stepnum").innerHTML = Step;
    document.getElementById("periodnum").innerHTML = Period;
    document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
}

function next(){
    document.getElementById("step"+Step+Period).style.backgroundColor = '#90EE90';
    if(Step == 1){
        if(Period >= 1 && Period <= 3){
            Period = Period + 1;
            document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
        }else{
            if(checkOne()){
                Step = 2;
                Period = 1;
                document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
            }else{
                window.alert("Something wrong in step one!");
            }
        }
    }else{
        if(Period >= 1 && Period <= 2){
            Period = Period + 1;
            document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
        }else{
            if(checkTwo()){
                window.alert("Complete!");
            }else{
                window.alert("Something wrong in step two!");
            }
        }
    }
//    document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
    document.getElementById("stepnum").innerHTML = Step;
    document.getElementById("periodnum").innerHTML = Period;
    nextOperation(Step, Period);
}

function nextOperation(step, period){
    if(step == 1 && period == 2){
        document.getElementById("machine").classList.remove("layui-btn-primary");
        document.getElementById("machine").classList.add("layui-btn-disabled");
        document.getElementById("domain").classList.remove("layui-btn-disabled");
        document.getElementById("domain").classList.add("layui-btn-primary");
    }else if(step == 1 && period == 3){
        document.getElementById("domain").classList.remove("layui-btn-primary");
        document.getElementById("domain").classList.add("layui-btn-disabled");
        document.getElementById("interface").classList.remove("layui-btn-disabled");
        document.getElementById("interface").classList.add("layui-btn-primary");
    }else if(step == 1 && period == 4){
        document.getElementById("interface").classList.remove("layui-btn-primary");
        document.getElementById("interface").classList.add("layui-btn-disabled");
    }else if(step == 2 && period == 1){
        document.getElementById("requirement").classList.remove("layui-btn-disabled");
        document.getElementById("requirement").classList.add("layui-btn-primary");
    }else if(step == 2 && period == 2){
        document.getElementById("requirement").classList.remove("layui-btn-primary");
        document.getElementById("requirement").classList.add("layui-btn-disabled");
        document.getElementById("reference").classList.remove("layui-btn-disabled");
        document.getElementById("reference").classList.add("layui-btn-primary");
        document.getElementById("constraint").classList.remove("layui-btn-disabled");
        document.getElementById("constraint").classList.add("layui-btn-primary");
    }else if(step == 2 && period == 3){
        document.getElementById("reference").classList.remove("layui-btn-primary");
        document.getElementById("reference").classList.add("layui-btn-disabled");
        document.getElementById("constraint").classList.remove("layui-btn-primary");
        document.getElementById("constraint").classList.add("layui-btn-disabled");
    }
}

function back(){
    document.getElementById("step"+Step+Period).style.backgroundColor = null;
    if(Step == 1){
        if(Period >= 2 && Period <= 4){
            Period = Period - 1;
        }else{
            window.alert("This is the first step!")
        }
    }else{
        if(Period >= 2 && Period <= 3){
            Period = Period - 1;
        }else{
            Step = Step - 1;
            Period = 4;
        }
    }
    backOperation(Step, Period);
    document.getElementById("step"+Step+Period).style.backgroundColor = '#FFFF66';
    document.getElementById("stepnum").innerHTML = Step;
    document.getElementById("periodnum").innerHTML = Period;
}

function backOperation(step, period){
    if(step == 1 && period == 1){
        document.getElementById("machine").classList.remove("layui-btn-disabled");
        document.getElementById("machine").classList.add("layui-btn-primary");
        document.getElementById("domain").classList.remove("layui-btn-primary");
        document.getElementById("domain").classList.add("layui-btn-disabled");
    }else if(step == 1 && period == 2){
        document.getElementById("domain").classList.remove("layui-btn-disabled");
        document.getElementById("domain").classList.add("layui-btn-primary");
        document.getElementById("interface").classList.remove("layui-btn-primary");
        document.getElementById("interface").classList.add("layui-btn-disabled");
    }else if(step == 1 && period == 3){
        document.getElementById("interface").classList.remove("layui-btn-disabled");
        document.getElementById("interface").classList.add("layui-btn-primary");
    }else if(step == 1 && period == 4){
        document.getElementById("requirement").classList.remove("layui-btn-primary");
        document.getElementById("requirement").classList.add("layui-btn-disabled");
    }else if(step == 2 && period == 1){
        document.getElementById("requirement").classList.remove("layui-btn-disabled");
        document.getElementById("requirement").classList.add("layui-btn-primary");
        document.getElementById("reference").classList.remove("layui-btn-primary");
        document.getElementById("reference").classList.add("layui-btn-disabled");
        document.getElementById("constraint").classList.remove("layui-btn-primary");
        document.getElementById("constraint").classList.add("layui-btn-disabled");
    }else if(step == 2 && period == 2){
        document.getElementById("reference").classList.remove("layui-btn-disabled");
        document.getElementById("reference").classList.add("layui-btn-primary");
        document.getElementById("constraint").classList.remove("layui-btn-disabled");
        document.getElementById("constraint").classList.add("layui-btn-primary");
    }
}


function checkOne(){
    window.alert("此处应添加检查第1步函数！")
    return true;
}

function checkTwo(){
    window.alert("此处应添加检查第2步函数！")
    return true;
}
