const express = require('express');
const path = require('path');

const app = express();

const inProductionMode = process.env.NODE_ENV === 'production';

if (!inProductionMode) {
    // Webpack Hot Middleware: https://github.com/glenjamin/webpack-hot-middleware
    // Webpack Dev Middleware: https://github.com/webpack/webpack-dev-middleware
    const webpackConfig = require('./webpack.config');
    const compiler = require('webpack')(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/tasks', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('*', (req, res) => {
    res.send('404');
});

const port = process.env.PORT || 3000;
app.listen(port, () => inProductionMode ?
    console.log(`♫ In production mode. Listening on port ${port} ♫`) :
    console.log(`♫ In development mode. Listening on port ${port}  ♫`)
);