const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



function Circles(x, y, radius, xspeed, yspeed){

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xspeed = xspeed;
    this.yspeed = yspeed;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.stroke();
        c.fill();
    }

    this.update = function(){
        if(this.x > window.innerWidth || this.x  < 0){
            this.xspeed = -this.xspeed;
        }
        if(this.y  > window.innerHeight || this.y < 0){
            this.yspeed = -this.yspeed;
        }
        this.x += this.xspeed;
        this.y += this.yspeed;
        console.log("dog");
        this.draw();
    }
}

var circleArray = [];


for(var i = 0; i<150; i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var xspeed = (Math.random() - 0.5) * 6; 
    var yspeed = (Math.random() - 0.5) * 6; 
    var radius = (Math.random()* 10) + 30;
    circleArray.push(new Circles(x, y, radius, xspeed, yspeed));
}
console.log(circleArray);

function animate(){
    requestAnimationFrame(animate);
        c.clearRect(0,0,window.innerWidth,window.innerHeight);
        for(var i = 0; i<circleArray.length; i++){
            circleArray[i].update();
    }
}
animate();