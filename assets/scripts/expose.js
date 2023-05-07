// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // constants defined
  const horn = document.getElementById("horn-select");
  const img = document.querySelector("[alt='No image selected']");
  const audio = document.querySelector("audio.hidden");
  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  const volume = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  //

  // changing image and sound when horn type is selected
  horn.addEventListener("change", function() {
    img.src = `assets/images/${horn.value}.svg`;
    audio.src = `assets/audio/${horn.value}.mp3`;
  });
  //

  // play button for sound is pressed
  button.addEventListener("click", (event) => {
    audio.play();
    if(horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
  //

  // for volume adjust
  volume.addEventListener("change", function() {
    const volumeValue = volume.value;

    if (volumeValue == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue > 0 && volumeValue < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  
    audio.volume = volumeValue / 100;
  });
  //

}