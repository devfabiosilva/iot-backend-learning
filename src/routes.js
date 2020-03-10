const express = require('express');

const routers = express.Router();

const BoxController = require('./controller/BoxController');
const multer = require('multer');
const multerConfig = require('./config/multer');
const FileController = require('./controller/FileController')

routers.get('/teste', (req, res) => {
    return res.send('Ola mundo');
});

routers.post('/boxes', BoxController.store);
routers.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);
routers.get('/boxes/:id', BoxController.show);

module.exports = routers;