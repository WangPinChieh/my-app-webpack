# Build React from Scratch using Webpack

```cmd
mkdir my-app-webpack
cd my-app-webpack
npm install -y
```

Install webpack and webpack CLI

```powershell
npm install webpack webpack-cli --save-dev
```

Add the following:

- A folder called `src`
- An `index.html` file inside `src`
- An `index.js` file in side `src`
- A `dist` folder

Install react, react-dom

```powershell
npm install react react-dom
```

Add the content to `index.js`

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Add the content to `index.html`

```html
<html>
  <head>
    <title>Webpack Tutorial</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Add `App.js` with the content

```javascript
import React from "react";
function App() {
  return <div className="header">Hello React!</div>;
}

export default App;
```

Install webpack, webpack-cli, webpack-dev-server to bundle js files

```powershell
npm install webpack webpack-cli webpack-dev-server --save-dev
```

Install babel-loader and presets

```powershell
npm install babel-loader @babel/core --save-dev
npm install @babel/preset-env @babel/preset-react --save-dev
```

Add `.babelrc`

```javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Install html-webpack-plugin

```powershell
npm install --save-dev html-webpack-plugin
```

Create a `webpack.config.js` file with the content

```javascript
const path = require("path");
//html-webpack-plugin simplifies creation of HTML files to serve your webpack bundles.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    //path represents the absolute path for webpack file output in the file system
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    //publicPath represents the path from which bundled files should be accessed by the browser
    publicPath: "/",

    //publicPath is an alias for files located at path, and if specified, files are accessible from the publicPath in the browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
```

Run command to host a dev server

```powershell
webpack-dev-server
```
