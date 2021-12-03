noseX = 0;
noseY = 0;
difference = 0;
leftwrist_X = 0;
rightwrist_X = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    background ('#20c5e2');
    fill('#cea41b');
    stroke('#cea41b');
    square(noseX, noseY,difference);
    document.getElementById("square_side").innerHTML = "Width and height of square will be = " + difference + "px";

}

function gotPoses(results){
 if(results.length > 0){
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("nosex = " + noseX + " nosey = " + noseY);
 
    leftwrist_X = results[0].pose.leftWrist.x;
    rightwrist_X = results[0].pose.rightWrist.x;
    difference = floor(leftwrist_X - rightwrist_X);
    console.log("leftwristX = " + leftwrist_X + " rightwristX = " + rightwrist_X + " difference = " + difference);

 }   
 
}