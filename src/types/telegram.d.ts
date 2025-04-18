declare namespace Telegram {
  interface WebApp {
    ready: () => void;
    expand: () => void;
    close: () => void;
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

interface TelegramWebApp {
  expand: () => void;
  setBackgroundColor: (color: string) => void;
  enableClosingConfirmation: () => void;
}

interface Window {
  Telegram?: {
    WebApp: TelegramWebApp;
  };
} 