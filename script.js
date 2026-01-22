const SpeechRecognition = 
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition){
    alert("Speech Recognition not supported in this browser");
}

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";

const startButton = document.getElementById("startButton");