export const useFullscreen = () => {
  const launchIntoFullscreen = (element: HTMLElement) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if ((element as any).mozRequestFullScreen) { // для Firefox
      (element as any).mozRequestFullScreen();
    } else if ((element as any).webkitRequestFullscreen) { // для Chrome, Safari, Opera
      (element as any).webkitRequestFullscreen();
    } else if ((element as any).msRequestFullscreen) { // для IE/Edge
      (element as any).msRequestFullscreen();
    } else {
      console.error('Fullscreen API не поддерживается в данном браузере.');
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  };

  return { launchIntoFullscreen, exitFullscreen };
}; 