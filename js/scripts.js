const videoElement = document.getElementById('video');

const videoPlayback = () => {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

videoElement.addEventListener('click', videoPlayback);
