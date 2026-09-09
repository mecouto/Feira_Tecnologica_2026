const express = require('express');

const {
    listarPontos
} = require('../controller/controller');

const router = express.Router();

router.get('/', listarPontos);

module.exports = router;