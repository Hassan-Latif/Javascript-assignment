function changecolor(){

var bac=document.getElementById("bc").value;

document.body.style.background= bac;

       }

function changeParaColor(){
    var bac=document.getElementById("fc").value;   
    document.getElementById("para").style.background= bac;
}

function changeFontFamily(){
    var fontt = document.getElementById("fonts").value;
    document.getElementById("para").style.fontFamily=fontt;  
}

function changeFont(){
    var siz=document.getElementById("fz").value;
    document.getElementById("para").style.fontSize=siz;
}
function changePadding(){
    var pad=document.getElementById("pad").value;
    document.getElementById("para").style.padding=pad;
}
function changeMargin(){
    var mar=document.getElementById("marg").value;
    document.getElementById("para").margin=mar;
}