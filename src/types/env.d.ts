declare module "gatsby-plugin-mailchimp";
declare module "*.png";
declare module "showdown";
declare namespace NodeJS {
  export interface ProcessEnv {
    ALGOLIA_APP_ID: string;
    ALGOLIA_API_KEY: string;
  }
}
