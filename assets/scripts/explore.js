// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // constants defined
  const voicesSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  const img = document.querySelector("[alt='Smiling face']");
  //
  
  // Populate option menu with the list of voices once they have loaded
  speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voicesSelect.appendChild(option);
    });
  };
  //

  // On pressing the talk button, the text in the text field will be read by the SpeechSynthesis
  button.addEventListener("click", (event) => {
    // get the selected voice
    const selectedVoice = voicesSelect.value;
    
    // get the text to speak
    const textToSpeak = document.getElementById('text-to-speak').value;
    
    // check which voice is selected
    const voice = synth.getVoices().find((voice) => voice.name === selectedVoice);
    
    // create an utterance object with the text to speak and the selected voice
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = voice;
    
    // synthesis will speak the phrase out loud
    synth.speak(utterance);

    // switch between open and closed smiling face
    utterance.onstart = onStart;
    utterance.onend = onEnd;

  });  
  //

  // When the Synthesis starts speaking, change the image to the open mouth face
  function onStart(event) {
    img.src = "assets/images/smiling-open.png";
  }
  //

  // When the Synthesis stops speaking, change the image back to the closed mouth face
  function onEnd(event) {
    img.src = "assets/images/smiling.png";
  }
  //

}