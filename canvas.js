var canvas = document.getElementById("slate");
var ctx = canvas.getContext('2d');
var circle = false;
var trigger = document.getElementById("trigger");
var clear = document.getElementById("clear");

trigger.addEventListener("click", function(){
    circle = !circle;
})

clear.addEventListener("click", function(){
    ctx.clearRect(0,0,500,500);
})
    
canvas.addEventListener("click",function(){
    if(circle){
	drawcircle();
    }
    else{
	drawsquare();
    };
})
ctx.fillStyle = "red";
var drawcircle= function(){
    ctx.beginPath()
    ctx.arc(event.clientX, event.clientY, 20,0, 2 * Math.PI);
    ctx.fill();
}
var drawsquare= function(){
    ctx.beginPath()
    ctx.rect(event.clientX, event.clientY, 40, 40);
    ctx.fill();
}
