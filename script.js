let c = document.getElementById("c");
let logo = document.getElementById("logo")
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
let matrix = "10";
matrix = matrix.split("");
let font_size = 30;
let columns = c.width/font_size;
let drops = [];
let columncounter = 0


function draw(){  
    c = document.getElementById("c");
    ctx = c.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#b50000";
    ctx.font = font_size + "px Dos";

    for(let i = 0; i < drops.length; i++)
    {
        let text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

for(let i=0; i<columns; i++){
    drops[i] = 1; 
    columncounter++;
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#b50000";
    ctx.font = font_size + "px Arial";
}

function test(){  
    let newcolumns = window.innerWidth/font_size;
    let addcolumns = newcolumns-columns

    for(let i=0; i<addcolumns; i++) {
        columns = newcolumns
        columncounter = columncounter+1
        drops[columncounter] = 1; 
    }
}

window.addEventListener('resize',function(){
    var width  = window.innerWidth;
    var height = window.innerHeight;
    ctx.canvas.width  = width;
    ctx.canvas.height = height;
},false);

logo.ondragstart = () => {
    return false;
};

setInterval(draw, 35);
setInterval(test, 1000);
