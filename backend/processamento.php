<?php
include_once("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta dos dados do formulário
    $nome_ponto   = trim($_POST['nome-ponto'] ?? '');
    $responsavel  = trim($_POST['responsavel'] ?? '');
    $logradouro   = trim($_POST['logradouro'] ?? '');
    $numero       = trim($_POST['numero'] ?? '');
    $bairro       = trim($_POST['bairro'] ?? '');
    $nome_cidade  = trim($_POST['cidade'] ?? '');
    $sigla_uf     = trim($_POST['uf'] ?? '');
    $telefone     = trim($_POST['telefone'] ?? '');
    $regras       = trim($_POST['regras'] ?? '');
    $observacoes  = trim($_POST['observacoes'] ?? '');
    $declaracao   = isset($_POST['confirmacao']) ? 1 : 0;
    $alimentos    = $_POST['alimento'] ?? [];

    // Inicia a transação no banco de dados
    $conn->begin_transaction();

    try {
        // 1. Obter ID da UF
        $stmt_uf = $conn->prepare("SELECT id_uf FROM uf WHERE sigla = ?");
        $stmt_uf->bind_param("s", $sigla_uf);
        $stmt_uf->execute();
        $res_uf = $stmt_uf->get_result();
        
        if ($res_uf->num_rows === 0) {
            throw new Exception("UF selecionada não encontrada no sistema.");
        }
        $id_uf = $res_uf->fetch_assoc()['id_uf'];
        $stmt_uf->close();

        // 2. Verificar ou Inserir Cidade
        $stmt_cid_check = $conn->prepare("SELECT id_cidade FROM cidade WHERE nome_cidade = ? AND id_uf = ?");
        $stmt_cid_check->bind_param("si", $nome_cidade, $id_uf);
        $stmt_cid_check->execute();
        $res_cid = $stmt_cid_check->get_result();

        if ($res_cid->num_rows > 0) {
            $id_cidade = $res_cid->fetch_assoc()['id_cidade'];
        } else {
            $stmt_cid_ins = $conn->prepare("INSERT INTO cidade (nome_cidade, id_uf) VALUES (?, ?)");
            $stmt_cid_ins->bind_param("si", $nome_cidade, $id_uf);
            $stmt_cid_ins->execute();
            $id_cidade = $stmt_cid_ins->insert_id;
            $stmt_cid_ins->close();
        }
        $stmt_cid_check->close();

        // 3. Inserir Endereço
        $stmt_end = $conn->prepare("INSERT INTO endereco (logradouro, numero, bairro, id_cidade) VALUES (?, ?, ?, ?)");
        $stmt_end->bind_param("sssi", $logradouro, $numero, $bairro, $id_cidade);
        $stmt_end->execute();
        $id_endereco = $stmt_end->insert_id;
        $stmt_end->close();

        // 4. Inserir Responsável
        $stmt_resp = $conn->prepare("INSERT INTO responsavel (nome_responsavel) VALUES (?)");
        $stmt_resp->bind_param("s", $responsavel);
        $stmt_resp->execute();
        $id_responsavel = $stmt_resp->insert_id;
        $stmt_resp->close();

        // 5. Inserir Contato
        $stmt_cont = $conn->prepare("INSERT INTO contato (telefone) VALUES (?)");
        $stmt_cont->bind_param("s", $telefone);
        $stmt_cont->execute();
        $id_contato = $stmt_cont->insert_id;
        $stmt_cont->close();

        // 6. Inserir Ponto de Apoio
        $stmt_ponto = $conn->prepare("INSERT INTO ponto_apoio (nome_ponto, id_responsavel, id_endereco, id_contato, regras_retirada, observacoes, declaracao_precisao, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'ATIVO')");
        $stmt_ponto->bind_param("siiissi", $nome_ponto, $id_responsavel, $id_endereco, $id_contato, $regras, $observacoes, $declaracao);
        $stmt_ponto->execute();
        $id_ponto = $stmt_ponto->insert_id;
        $stmt_ponto->close();

        // 7. Inserir Tipos de Alimentos (N:N)
        if (!empty($alimentos)) {
            $stmt_alim = $conn->prepare("SELECT id_tipo_alimento FROM tipo_alimento WHERE descricao = ?");
            $stmt_p_alim = $conn->prepare("INSERT INTO ponto_alimento (id_ponto, id_tipo_alimento) VALUES (?, ?)");

            foreach ($alimentos as $desc_alimento) {
                $stmt_alim->bind_param("s", $desc_alimento);
                $stmt_alim->execute();
                $res_alim = $stmt_alim->get_result();

                if ($row_alim = $res_alim->fetch_assoc()) {
                    $id_tipo = $row_alim['id_tipo_alimento'];
                    $stmt_p_alim->bind_param("ii", $id_ponto, $id_tipo);
                    $stmt_p_alim->execute();
                }
            }
            $stmt_alim->close();
            $stmt_p_alim->close();
        }

        // Sucesso: Executa o commit
        $conn->commit();

        echo "<script>
                alert('Ponto de Apoio cadastrado com sucesso!');
                window.location.href = '../cadastro.html';
              </script>";

    } catch (Exception $e) {
        // Em caso de erro, desfaz as alterações
        $conn->rollback();
        echo "Erro ao cadastrar: " . $e->getMessage();
    }

    $conn->close();
}
?>