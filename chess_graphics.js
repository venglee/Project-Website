var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#dbd76e"
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = "#33c42d"
var draw = false;
var size = canvas.width;
var tileSize = size/8;

for (let x = 0; x < 8; x++) {
    draw = !draw;
    for (let y = 0; y < 8; y++) {
        draw = !draw;
        if (draw)
            ctx.fillRect(x*tileSize, y*tileSize, tileSize, tileSize)
    }
}