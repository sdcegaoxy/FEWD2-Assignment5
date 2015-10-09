 document.addEventListener("DOMContentLoaded", init, false);
function init(){
    var ibt=document.getElementsByTagName("button");
    ibt.addEventListener("click",enter,false);
}

function enter(){
    alert("get");
}