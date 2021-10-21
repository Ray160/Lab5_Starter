// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let synth = window.speechSynthesis;
  let voices = synth.getVoices();

  let voiceSelect = document.getElementById("voice-select");
  console.log(voices);
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.add(option);
  }
  
}