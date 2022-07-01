leftWristX = 0;
rightWristX = 0;

difference = 0;

function setup()
{
    
    video = createCapture(VIDEO);
    video.size(550, 500);
    

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');

    document.getElementById("font_size").innerHTML = "Font Size of the text will be = " + difference +"px";

    textSize(difference);
    fill('#00ff0a');
    text('Ankan Datta', 50, 250);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results)
{
    
    
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        
        difference = floor(leftWristX - rightWristX)

        console.log("rightwrist_x = " + results[0].pose.rightWrist.x + " rightwrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftwrist_x = " + results[0].pose.leftWrist.x + " leftwrist_y = " + results[0].pose.leftWrist.y);
    }
}