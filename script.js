// const SpeechRecognition = 
//     window.SpeechRecognition || window.webkitSpeechRecognition;

// if (!SpeechRecognition){
//     alert("Speech Recognition not supported in this browser");
// }

// const recognition = new SpeechRecognition();
// recognition.continuous = true;
// recognition.lang = "en-US";

// const startButton = document.getElementById("startButton");
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
    alert("Speech Recognition is not supported in this browser. Please use Chrome.");
}

/* Create recognition object */
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";

/* Get elements */
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");

/* Speech result handler */
recognition.onresult = function(event){
    let finalTranscript = "";
    let LoadingTranscript = "";

    for(let i=event.resultIndex;i<event.results.length;i++){
        let transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal){
            finalTranscript += transcript + " ";
        }
        else{
            LoadingTranscript += transcript;
        }
    }

    output.textContent += finalTranscript;
};

/* Buttons */
startBtn.onclick = function(){
    recognition.start();
};

stopBtn.onclick = function(){
    recognition.stop();
};

clearBtn.onclick = function(){
    output.textContent = "";
};

const languages = {
    "English": "en-US",
    "Spanish": "es-ES",
    "French": "fr-FR",
    "Hindi": "hi-IN",
    "Japanese": "ja-JP"
};