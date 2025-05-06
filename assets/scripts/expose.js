// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  //selected horn then update the pic and sound
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  //update the sign and audio.volume when changing audio
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  //slick play button -> play audio and confetti(if is party-horn)
  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}