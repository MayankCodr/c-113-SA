
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    
     image(video, 190, 120, 270, 270);
     tint(tint_color);
     fill("red");
stroke("white");
circle(100, 80, 80);
circle(550, 80, 80);
circle(100, 420, 80);
circle(550, 420, 80);
fill("green");
stroke("green")
rect(137, 65, 377, 30);
rect(137, 408, 377, 30);
rect(87, 113, 30, 275);
rect(534, 113, 30, 275);




}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}