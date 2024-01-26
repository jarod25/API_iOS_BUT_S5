const { existsSync } = require('fs');
const { join } = require('path');
const { config } = require('dotenv');
config();
if (existsSync(join(__dirname, ".env.local")))
    config({path: join(__dirname, ".env.local"), override: true});

const express = require('express');
const bodyParser = require('body-parser');

require('./utils/config.db');
require('./utils/importDB');

const UserRouter = require('./router/user.router');
const StoreRouter = require('./router/store.router');

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user', UserRouter);
app.use('/store', StoreRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});