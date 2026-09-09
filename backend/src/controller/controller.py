from config.database import get_connection


def testar_banco():
    conexao = None
    cursor = None

    try:
        conexao = get_connection()
        cursor = conexao.cursor(dictionary=True)

        cursor.execute("SELECT 1 AS teste")

        resultado = cursor.fetchall()

        return resultado

    finally:
        if cursor:
            cursor.close()

        if conexao:
            conexao.close()