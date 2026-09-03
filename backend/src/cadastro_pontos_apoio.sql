-- ============================================================
-- BANCO DE DADOS: CADASTRO DE PONTOS DE APOIO
-- MySQL 8.0
-- Modelo normalizado em 1FN, 2FN e 3FN
-- ============================================================

CREATE DATABASE IF NOT EXISTS cadastro_pontos_apoio
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE cadastro_pontos_apoio;

-- ============================================================
-- 1. UF
-- ============================================================

CREATE TABLE uf (
    id_uf INT AUTO_INCREMENT PRIMARY KEY,
    sigla CHAR(2) NOT NULL UNIQUE,
    nome_uf VARCHAR(50) NOT NULL UNIQUE
);

-- ============================================================
-- 2. CIDADE
-- ============================================================

CREATE TABLE cidade (
    id_cidade INT AUTO_INCREMENT PRIMARY KEY,
    nome_cidade VARCHAR(100) NOT NULL,
    id_uf INT NOT NULL,

    CONSTRAINT fk_cidade_uf
        FOREIGN KEY (id_uf)
        REFERENCES uf(id_uf)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT uq_cidade_uf
        UNIQUE (nome_cidade, id_uf)
);

-- ============================================================
-- 3. ENDEREÇO
-- ============================================================

CREATE TABLE endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(150) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    id_cidade INT NOT NULL,

    CONSTRAINT fk_endereco_cidade
        FOREIGN KEY (id_cidade)
        REFERENCES cidade(id_cidade)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ============================================================
-- 4. RESPONSÁVEL
-- ============================================================

CREATE TABLE responsavel (
    id_responsavel INT AUTO_INCREMENT PRIMARY KEY,
    nome_responsavel VARCHAR(150) NOT NULL
);

-- ============================================================
-- 5. CONTATO
-- ============================================================

CREATE TABLE contato (
    id_contato INT AUTO_INCREMENT PRIMARY KEY,
    telefone VARCHAR(20) NOT NULL
);

-- ============================================================
-- 6. PONTO DE APOIO
-- ============================================================

CREATE TABLE ponto_apoio (
    id_ponto INT AUTO_INCREMENT PRIMARY KEY,
    nome_ponto VARCHAR(150) NOT NULL,

    id_responsavel INT NOT NULL,
    id_endereco INT NOT NULL,
    id_contato INT NOT NULL,

    regras_retirada TEXT,
    observacoes TEXT,

    declaracao_precisao BOOLEAN NOT NULL DEFAULT FALSE,

    data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    status ENUM('PENDENTE', 'ATIVO', 'INATIVO')
        NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT fk_ponto_responsavel
        FOREIGN KEY (id_responsavel)
        REFERENCES responsavel(id_responsavel)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_ponto_endereco
        FOREIGN KEY (id_endereco)
        REFERENCES endereco(id_endereco)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_ponto_contato
        FOREIGN KEY (id_contato)
        REFERENCES contato(id_contato)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT uq_ponto_endereco
        UNIQUE (id_endereco),

    CONSTRAINT uq_ponto_contato
        UNIQUE (id_contato)
);

-- ============================================================
-- 7. TIPO DE ALIMENTO
-- ============================================================

CREATE TABLE tipo_alimento (
    id_tipo_alimento INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

-- ============================================================
-- 8. PONTO X ALIMENTO
-- Relação N:N
-- ============================================================

CREATE TABLE ponto_alimento (
    id_ponto INT NOT NULL,
    id_tipo_alimento INT NOT NULL,

    PRIMARY KEY (id_ponto, id_tipo_alimento),

    CONSTRAINT fk_ponto_alimento_ponto
        FOREIGN KEY (id_ponto)
        REFERENCES ponto_apoio(id_ponto)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT fk_ponto_alimento_tipo
        FOREIGN KEY (id_tipo_alimento)
        REFERENCES tipo_alimento(id_tipo_alimento)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ============================================================
-- 9. HORÁRIO DE ATENDIMENTO
-- ============================================================

CREATE TABLE horario_atendimento (
    id_horario INT AUTO_INCREMENT PRIMARY KEY,

    id_ponto INT NOT NULL,

    dia_semana TINYINT NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NOT NULL,

    CONSTRAINT fk_horario_ponto
        FOREIGN KEY (id_ponto)
        REFERENCES ponto_apoio(id_ponto)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT chk_dia_semana
        CHECK (dia_semana BETWEEN 1 AND 7),

    CONSTRAINT chk_horario
        CHECK (hora_inicio < hora_fim),

    CONSTRAINT uq_horario_ponto
        UNIQUE (id_ponto, dia_semana, hora_inicio, hora_fim)
);

-- ============================================================
-- DADOS INICIAIS
-- ============================================================

INSERT INTO uf (sigla, nome_uf) VALUES
('SP', 'São Paulo'),
('RJ', 'Rio de Janeiro'),
('MG', 'Minas Gerais'),
('PR', 'Paraná'),
('SC', 'Santa Catarina'),
('RS', 'Rio Grande do Sul');

INSERT INTO tipo_alimento (descricao) VALUES
('Marmitas prontas'),
('Cestas básicas'),
('Hortifrúti / Orgânicos'),
('Pães e panificados');

-- ============================================================
-- EXEMPLO DE CADASTRO
-- ============================================================

INSERT INTO cidade (nome_cidade, id_uf)
VALUES (
    'Ribeirão Pires',
    (SELECT id_uf FROM uf WHERE sigla = 'SP')
);

INSERT INTO endereco (
    logradouro,
    numero,
    bairro,
    id_cidade
)
VALUES (
    'Rua Exemplo',
    '100',
    'Centro',
    (
        SELECT id_cidade
        FROM cidade
        WHERE nome_cidade = 'Ribeirão Pires'
          AND id_uf = (SELECT id_uf FROM uf WHERE sigla = 'SP')
    )
);

INSERT INTO responsavel (nome_responsavel)
VALUES ('João da Silva');

INSERT INTO contato (telefone)
VALUES ('(11) 99999-9999');

INSERT INTO ponto_apoio (
    nome_ponto,
    id_responsavel,
    id_endereco,
    id_contato,
    regras_retirada,
    observacoes,
    declaracao_precisao,
    status
)
VALUES (
    'Ponto de Apoio Central',
    (SELECT id_responsavel FROM responsavel
     WHERE nome_responsavel = 'João da Silva'
     ORDER BY id_responsavel DESC LIMIT 1),
    (SELECT id_endereco FROM endereco
     WHERE logradouro = 'Rua Exemplo' AND numero = '100'
     ORDER BY id_endereco DESC LIMIT 1),
    (SELECT id_contato FROM contato
     WHERE telefone = '(11) 99999-9999'
     ORDER BY id_contato DESC LIMIT 1),
    'Apresentar documento de identificação no momento da retirada.',
    'Atendimento sujeito à disponibilidade de alimentos.',
    TRUE,
    'ATIVO'
);

INSERT INTO ponto_alimento (id_ponto, id_tipo_alimento)
SELECT 1, id_tipo_alimento
FROM tipo_alimento
WHERE descricao IN (
    'Marmitas prontas',
    'Cestas básicas',
    'Hortifrúti / Orgânicos'
);

INSERT INTO horario_atendimento (
    id_ponto,
    dia_semana,
    hora_inicio,
    hora_fim
)
VALUES
(1, 1, '11:00:00', '14:00:00'),
(1, 2, '11:00:00', '14:00:00'),
(1, 3, '11:00:00', '14:00:00'),
(1, 4, '11:00:00', '14:00:00'),
(1, 5, '11:00:00', '14:00:00');

-- ============================================================
-- CONSULTAS
-- ============================================================

-- Cadastro completo dos pontos
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
    ON p.id_contato = ct.id_contato;

-- Alimentos oferecidos por cada ponto
SELECT
    p.nome_ponto,
    ta.descricao AS tipo_alimento
FROM ponto_apoio p
INNER JOIN ponto_alimento pa
    ON p.id_ponto = pa.id_ponto
INNER JOIN tipo_alimento ta
    ON pa.id_tipo_alimento = ta.id_tipo_alimento
ORDER BY p.nome_ponto, ta.descricao;

-- Horários de atendimento
SELECT
    p.nome_ponto,
    CASE h.dia_semana
        WHEN 1 THEN 'Segunda-feira'
        WHEN 2 THEN 'Terça-feira'
        WHEN 3 THEN 'Quarta-feira'
        WHEN 4 THEN 'Quinta-feira'
        WHEN 5 THEN 'Sexta-feira'
        WHEN 6 THEN 'Sábado'
        WHEN 7 THEN 'Domingo'
    END AS dia,
    h.hora_inicio,
    h.hora_fim
FROM horario_atendimento h
INNER JOIN ponto_apoio p
    ON h.id_ponto = p.id_ponto
ORDER BY p.nome_ponto, h.dia_semana, h.hora_inicio;
