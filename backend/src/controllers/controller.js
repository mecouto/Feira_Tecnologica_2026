const pool = require('../config/database');

async function listarPontos(req, res) {
    try {

        const [pontos] = await pool.query(`
            SELECT
                p.id_ponto,
                p.nome_ponto,

                r.nome_responsavel,

                e.logradouro,
                e.numero,
                e.bairro,

                c.nome_cidade,
                u.sigla AS uf,

                ct.telefone,

                p.regras_retirada,
                p.observacoes,
                p.declaracao_precisao,
                p.data_cadastro,
                p.status

            FROM ponto_apoio p

            INNER JOIN responsavel r
                ON p.id_responsavel = r.id_responsavel

            INNER JOIN endereco e
                ON p.id_endereco = e.id_endereco

            INNER JOIN cidade c
                ON e.id_cidade = c.id_cidade

            INNER JOIN uf u
                ON c.id_uf = u.id_uf

            INNER JOIN contato ct
                ON p.id_contato = ct.id_contato

            ORDER BY p.id_ponto DESC
        `);

        res.json(pontos);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: 'Erro ao buscar pontos de apoio'
        });
    }
}

module.exports = {
    listarPontos
};

async function cadastrarPonto(req, res) {

    const {
        nome_ponto,
        nome_responsavel,
        telefone,
        logradouro,
        numero,
        bairro,
        cidade,
        uf,
        regras_retirada,
        observacoes,
        declaracao_precisao
    } = req.body;

    const conexao = await pool.getConnection();

    try {

        await conexao.beginTransaction();

        // 1. Buscar a UF
        const [ufs] = await conexao.query(
            `
            SELECT id_uf
            FROM uf
            WHERE sigla = ?
            `,
            [uf]
        );

        if (ufs.length === 0) {
            throw new Error('UF não encontrada');
        }

        const id_uf = ufs[0].id_uf;


        // 2. Buscar ou criar cidade
        let [cidades] = await conexao.query(
            `
            SELECT id_cidade
            FROM cidade
            WHERE nome_cidade = ?
              AND id_uf = ?
            `,
            [cidade, id_uf]
        );

        let id_cidade;

        if (cidades.length > 0) {

            id_cidade = cidades[0].id_cidade;

        } else {

            const [resultadoCidade] = await conexao.query(
                `
                INSERT INTO cidade
                    (nome_cidade, id_uf)
                VALUES
                    (?, ?)
                `,
                [cidade, id_uf]
            );

            id_cidade = resultadoCidade.insertId;
        }


        // 3. Criar endereço
        const [resultadoEndereco] = await conexao.query(
            `
            INSERT INTO endereco
                (logradouro, numero, bairro, id_cidade)
            VALUES
                (?, ?, ?, ?)
            `,
            [
                logradouro,
                numero,
                bairro,
                id_cidade
            ]
        );

        const id_endereco = resultadoEndereco.insertId;


        // 4. Criar responsável
        const [resultadoResponsavel] = await conexao.query(
            `
            INSERT INTO responsavel
                (nome_responsavel)
            VALUES
                (?)
            `,
            [nome_responsavel]
        );

        const id_responsavel =
            resultadoResponsavel.insertId;


        // 5. Criar contato
        const [resultadoContato] = await conexao.query(
            `
            INSERT INTO contato
                (telefone)
            VALUES
                (?)
            `,
            [telefone]
        );

        const id_contato =
            resultadoContato.insertId;


        // 6. Criar ponto
        const [resultadoPonto] = await conexao.query(
            `
            INSERT INTO ponto_apoio (
                nome_ponto,
                id_responsavel,
                id_endereco,
                id_contato,
                regras_retirada,
                observacoes,
                declaracao_precisao
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
            [
                nome_ponto,
                id_responsavel,
                id_endereco,
                id_contato,
                regras_retirada,
                observacoes,
                declaracao_precisao
            ]
        );


        await conexao.commit();


        res.status(201).json({
            mensagem: 'Ponto cadastrado com sucesso!',
            id_ponto: resultadoPonto.insertId
        });


    } catch (erro) {

        await conexao.rollback();

        console.error(erro);

        res.status(500).json({
            erro: 'Erro ao cadastrar ponto'
        });

    } finally {

        conexao.release();
    }
}

module.exports = {
    listarPontos,
    cadastrarPonto
};