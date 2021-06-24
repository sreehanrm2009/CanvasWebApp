canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
function circle(mx, my) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mx, my, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
canvas.addEventListener("mousedown", mousedown);
function mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    console.log("X = " + x + ", Y = " + y);
    circle(x, y);
}