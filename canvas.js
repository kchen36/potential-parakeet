var canvas = document.getElementById("slate");
var ctx = canvas.getContext('2d');
var circle = false;
var trigger = document.getElementById("trigger");
var clear = document.getElementById("clear");
ctx.beginPath();

trigger.addEventListener("click", function(){
    circle = !circle;
})

clear.addEventListener("click", function(e){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
})
    
canvas.addEventListener("click",function(e){
    if(circle){
	drawcircle(e);
    }
    else{
	drawsquare(e);
    };
})
ctx.fillStyle = "red";
var drawcircle= function(e){
    ctx.lineTo(e.offsetX - 20, e.offsetY - 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.offsetX - 20, e.offsetY - 20, 20,0, 2 * Math.PI);
    ctx.fill();
}
var drawsquare= function(e){
    ctx.lineTo(e.offsetX - 20, e.offsetY - 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(e.offsetX - 20, e.offsetY - 20, 40, 40);
    ctx.fill();
}
