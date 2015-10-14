 document.addEventListener("DOMContentLoaded", init, false);
function init(){
    var onebt=document.getElementById("one");
    var twobt=document.getElementById("two");
    var threebt=document.getElementById("three");
    var fourbt=document.getElementById("four");
    var fivebt=document.getElementById("five");
    var sixbt=document.getElementById("six");
    var sevenbt=document.getElementById("seven");
    var eightbt=document.getElementById("eight");    
    var ninebt=document.getElementById("nine");
    var zerobt=document.getElementById("zero");
    var plusbt=document.getElementById("plus");
    var minusbt=document.getElementById("minus");
    var timesbt=document.getElementById("times");
    var dividbt=document.getElementById("divid");
    var pointbt=document.getElementById("point");
    var equalbt=document.getElementById("equal");

    onebt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    twobt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    threebt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    fourbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    fivebt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    sixbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    sevenbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    eightbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    ninebt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    zerobt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    plusbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    minusbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    timesbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    dividbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    pointbt.addEventListener("click",function(event){
        enter(this.innerHTML);
    },false);
    equalbt.addEventListener("click",calculate,false);  
}

function enter(val){
    console.log(val);
    document.getElementById("result").value+=val;
}
        
function calculate(){
    var result=document.getElementById("result");
    console.log(result.value);
    result.value=eval(result.value);
}       
        
        
        