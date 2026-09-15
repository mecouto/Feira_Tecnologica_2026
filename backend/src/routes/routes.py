from flask import Blueprint, jsonify
from database import get_connection

routes = Blueprint("routes", __name__)

@routes.route("/teste-banco", methods=["GET"])
def teste_banco():
    conexao = None
    cursor = None

    try:
        conexao = get_connection()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("SELECT 1 AS teste")
        resultado = cursor.fetchall()

        return jsonify(resultado)

    except Exception as erro:
        print("ERRO:", erro)

        return jsonify({
            "erro": "Erro ao conectar ao banco",
            "detalhe": str(erro)
        }), 500

    finally:
        if cursor:
            cursor.close()
        if conexao:
            conexao.close()