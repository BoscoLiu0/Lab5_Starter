// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  //Initialize voice
  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[voiceSelect.value];
    utterance.voice = selectedVoice;

    //Change the picture when start talking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    //reset the picture after finish speak
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}