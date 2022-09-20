const express = require('express');
const router = express.Router();

const indexController = require('../controller/indexController')

const userController = require('../controller/userControllerExample');

module.exports = function(){

    router.get('/usuarios', userController.allUser );

    return router;

}