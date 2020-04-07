declare namespace NodeJS {
  export interface ProcessEnv {
    /* All environment variable typings go here. */
    /** The default port where the application will be hosted locally. This will be automatically set in the deployed environment. */
    PORT: string;
  }
}
