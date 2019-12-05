var Step = 1;
var Period = 1;

function stepOnLoad(){
    window.alert("ok!");
}

function next(){
    document.getElementById("step"+Step+Period).style.backgroundColor = '#90EE90';
    if(Step == 1){
        if(Period >= 1 && Period <= 3){
            Period = Period + 1;
        }else{
            if(checkOne()){
                Step = 2;
                Period = 1;
            }else{
                window.alert("Something wrong in step one!");
            }
        }
    }else{
        if(Period >= 1 && Period <= 2){
            Period = Period + 1;
        }else{
            if(checkTwo()){
                window.alert("Complete!");
            }else{
                window.alert("Something wrong in step two!");
            }
        }
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
}
