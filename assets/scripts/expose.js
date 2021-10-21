// expose.js

window.addEventListener('DOMContentLoaded', init);




function init() {
  const jsConfetti = new JSConfetti();

  let option = document.getElementById('horn-select');
  let audio = document.getElementsByClassName('hidden')[0];

  function select_changes(){
    console.log('selected = ',document.getElementById('horn-select').value);
  
    let image = document.getElementsByTagName('img')[0];
    //let selected = document.getElementById('horn-select').value;
    let selected = option.value;
    
  
    if(selected == 'air-horn'){
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }else if(selected == 'car-horn'){
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }else if(selected == 'party-horn'){
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  }

  option.addEventListener('change', select_changes);

  let volume_slider = document.getElementById('volume');

  function volume_changes(){
    let volume = volume_slider.value;
    let volume_icon = document.getElementsByTagName('img')[1];
    console.log(volume/100);
    audio.volume = volume/100;

    if(volume == 0){
      volume_icon.src = 'assets/icons/volume-level-0.svg';
    }else if(volume >= 1 && volume < 33){
      volume_icon.src = 'assets/icons/volume-level-1.svg';
    }else if(volume >= 33 && volume < 67){
      volume_icon.src = 'assets/icons/volume-level-2.svg';
    }else if(volume >= 67){
      volume_icon.src = 'assets/icons/volume-level-3.svg';
    }
  
  }

  volume_slider.addEventListener('change', volume_changes);

  let button = document.getElementsByTagName('button')[0];

  function button_click(){
    if(option.value != 'party_horn'){
      jsConfetti.addConfetti();
    }
    if(option.value != 'select'){
      audio.play();
    }
    
  }
  button.addEventListener('click', button_click);


}