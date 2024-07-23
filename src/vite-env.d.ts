/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Defines the port the dev server is run
   */
  VITE_DEV_SERVER_PORT: string;

  /**
   * Defines the app environment
   */
  VITE_APP_ENVIRONMENT: 'local' | 'stage' | 'production';

  /**
   * The backend API URL
   */
  VITE_API_URL: string;
}
