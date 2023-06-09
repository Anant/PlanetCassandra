# Gatsby Project 

This project is built using Gatsby. It uses Algolia for content indexing, with separate environments for development and production linked to Airtable and two WordPress instances.

## Prerequisites

You need to have the following installed on your machine before following the instructions below:
- Node.js and npm
- Gatsby CLI

## Getting Started

1. Clone this repository to your local machine.
```shell
git clone https://github.com/your_username/your_repository.git
```
2. Install the project dependencies.
```shell
cd your_repository
npm install
```
3. Create a .env file at the root of your project and add the environment variables mentioned below. Remember, the development and production environments have separate variables.

```shell
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=
ALGOLIA_ADMIN_KEY=
WP_GRAPHQL=
WP_GRAPHQL_DEV=
GA_TRACKING_ID=
AIRTABLE_BASE=
AIRTABLE_KEY_1=
AIRTABLE_KEY_2=
YOUTUBE_API_KEY=
LEAVES_URL=
EVENTS_URL=
BLOG_POSTS_AIRTABLE_FORM=
USE_CASES_AIRTABLE_FORM=
RESOURCES_AIRTABLE_FORM=
```
Fill in the correct values for each variable. Never share your private keys or add them to the public repository.

## Development

Start the development server.
```shell
gatsby develop
```
or
```shell
npm run develop
```
Your site is now running at `http://localhost:8000`.

## Build

Before building, ensure Algolia has indexed the content. Then, run the following command to create a production build of your site. This will index the data in algolia

```shell
gatsby build
```
## Deployment

This will create a static version of your website in the `public` folder in the root directory of your application. This can be deployed using various hosting options like Netlify, Vercel, GitHub pages, etc.

Remember, it's important to keep your environment variables secure and update them according to your current development or production environment.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
