export const openFullScreen = (el) => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) { /* Firefox */
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) { /* IE/Edge */
    el.msRequestFullscreen();
  }
};


export const closeFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
};

export const isFullScreen = () => {
  return   document.fullscreenElement || /* Standard syntax */
    document.webkitFullscreenElement || /* Chrome, Safari and Opera syntax */
    document.mozFullScreenElement ||/* Firefox syntax */
    document.msFullscreenElement /* IE/Edge syntax */
};

export const toggleFullScreen = (el) => {
  isFullScreen() ? closeFullScreen() : openFullScreen(el);
};
