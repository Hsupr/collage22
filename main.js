var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90


});
camera = document.getElementById("camera");
function start() {
    
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
   
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie---")
        speak()
    }

}
function speak() {
    var synth = window.speechSynthesis;
     Webcam.attach(camera);
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    timeout = setTimeout(alertFunc, 5000);
}
function take_snapshot(imgid) {
    Webcam.snap(function (data_uri) {
        document.getElementById(imgid).innerHTML = '<img id="selfie_img" src="' + data_uri + '">'
    });
}

function alertFunc() {
    take_snapshot("resultt1");
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    timeout = setTimeout(alertFunc1, 10000);
}
function alertFunc1() {
    take_snapshot("resultt2");
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    timeout = setTimeout(alertFunc2, 15000);
}
function alertFunc2() {
    take_snapshot("resultt3");
    
}
