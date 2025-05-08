# React Table demo project

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To Do

- [ ] upgrade json-server from 0.17.4 to 1.0.0-beta.3
      Problems:
       - server.js doesn't work.
         
         Variants:
         - rewritten server.js
           json-server 1.0.0 used tinyhttp (not express)
         - use cli json-server 
           json-server --watch db.json --routes routes.json --port 8089
