declare namespace Telegram {
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