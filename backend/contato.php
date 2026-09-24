<?php

$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "site_contato";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Erro na conexão com o banco: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$sql = "INSERT INTO mensagens (nome, email, mensagem)
        VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $mensagem);

if ($stmt->execute()) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar a mensagem: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>