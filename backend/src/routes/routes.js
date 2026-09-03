const express = require('express');

const {
    listarPontos,
    cadastrarPonto
} = require('../controllers/controller');

const router = express.Router();

router.get('/', listarPontos);

router.post('/', cadastrarPonto);

module.exports = router;