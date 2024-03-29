declare module "gatsby-plugin-mailchimp";
declare module "*.png";
declare module "showdown";
declare module "react-jotform-embed";
declare module "react-helmet";
declare module "html-to-text";
declare module "axios";
declare module "react-hook-form";

declare namespace NodeJS {
  export interface ProcessEnv {
    ALGOLIA_APP_ID: string;
    ALGOLIA_API_KEY: string;
  }
}
