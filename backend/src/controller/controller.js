const pool = require('../config/database');

const listarPontos = async (req, res) => {
    try {
        const [resultado] = await pool.query(
            'SELECT * FROM pontos'
        );

        res.json(resultado);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            erro: erro.message
        });
    }
};

module.exports = {
    listarPontos
};