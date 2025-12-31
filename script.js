const speakBtn = document.getElementById("speakBtn");
const textInput = document.getElementById("text");
const voiceSelect = document.getElementById("voiceSelect");

let voices = [];

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = 
            voice.name.replace( / Google | Microsoft | Apple | Voice/g, "")|| 
            `voice${index + 1}`;
        option.value = index;
        voiceSelect.appendChild(option);
    })
}