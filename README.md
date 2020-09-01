This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Single Page Application (SPA)

This application is built in [React Router](https://reactrouter.com/) to make single page application.

[ExpressJS](https://expressjs.com/) is used to create simple local proxy server to mitigate CORS issue.

This SPA is also using Redux store to manage state, local storage to persist store between pages.

Width is set to only 75% to give you better view in desktop, you can change it to make it full screen in.

# How to run

Please follow below steps in order to run this single page application in your local environment.

- Clone this repo 
```bash
git clone git@github.com:anjee10/tiny-spa.git
cd tiny-spa
```
- Install Node modules
```bash
npm install
```
- Rename `.env.dist` to `.env`
- Start proxy server. Proxy server is set to listen on port 4000 by default. You can change it in `.env` file
```bash
node src\proxy.js
```
- Start application
```bash
npm run start
```
- Visit to `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
