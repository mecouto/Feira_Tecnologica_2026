const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/database');

const pontoRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de Cadastro de Pontos de Apoio funcionando!'
    });
});

app.get('/teste-banco', async (req, res) => {
    try {

        const [resultado] = await pool.query(
            'SELECT 1 AS teste'
        );

        res.json(resultado);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: 'Erro ao conectar ao banco'
        });
    }
});

app.use('/api/pontos', pontoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});