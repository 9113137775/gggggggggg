function dark() {
    document.getElementById("dark").style = "background-color: darkorange; width:100%; color: white;";
}
function leave() {
    document.getElementById("dark").style = "background-color: orange; width:100%; color: white;";

}
function draw() {
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!')
}
function gotPoses(results) {
    if (results.lenght > 0) {
        console.log(results);
    }
}
function setup() {
    video = createCapture(VIDEO);
  video.size(300, 300);
  poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}
