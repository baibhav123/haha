function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(130, 270);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image(video, 40, 40, 540, 380);
    circle(10, 500, 250);
    circle(10, 10, 250);
    circle(600, 10, 250);
    circle(600, 500, 250);
    tint(tint_color);
    fill(180,0,0);
}
function take_snapshot(){
    save('whitehat_jr.png')
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}