import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/' (req, res) => {

});

server.use('/api', apiRouter)
