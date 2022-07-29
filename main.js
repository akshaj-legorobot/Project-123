leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is intialized!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftwristX + "rightWristX = " + rightwristX + "difference = " + difference);
    }
}


function draw() {
    background('#969A97');
    document.getElementById("font_size").innerHTML = 'font Size ot the text will be =' + difference + 'px';
    fill('#F90093');
    textSize(difference);
    text('AX', 50, 400);
}