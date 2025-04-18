declare namespace Telegram {
  interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: Function) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
  }

  interface BackButton {
    isVisible: boolean;
    onClick: (callback: Function) => void;
    show: () => void;
    hide: () => void;
  }

  interface WebApp {
    ready: () => void;
    expand: () => void;
    close: () => void;
    setBackgroundColor: (color: string) => void;
    enableClosingConfirmation: () => void;
    disableClosingConfirmation: () => void;
    isClosingConfirmationEnabled: boolean;
    onEvent: (eventType: string, eventHandler: Function) => void;
    offEvent: (eventType: string, eventHandler: Function) => void;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    setViewportHeight: (height: number) => void;
    MainButton: MainButton;
    BackButton: BackButton;
    platform: string;
    version: string;
    initData: string;
    initDataUnsafe: {
      user?: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
      };
    };
  }
}

interface Window {
  Telegram?: {
    WebApp: Telegram.WebApp;
  };
} 