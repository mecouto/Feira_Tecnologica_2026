<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$dbname = "cadastro_pontos_apoio";

$conn = new mysqli($servidor, $usuario, $senha, $dbname);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Configura caracteres para UTF-8 (aceita acentos e símbolos)
$conn->set_charset("utf8mb4");
?>