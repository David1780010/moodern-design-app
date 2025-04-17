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

  return { launchIntoFullscreen };
}; 