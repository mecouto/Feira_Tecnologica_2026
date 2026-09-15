import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text

load_dotenv()

DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_NAME = os.getenv("DB_NAME", "pontos_cadastro_apoio")
DB_PORT = os.getenv("DB_PORT", "3306")

# Conecta no MySQL sem especificar o banco de dados
engine = create_engine(
    f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/"
)

with engine.connect() as conn:
    conn.execute(
        text(
            f"CREATE DATABASE IF NOT EXISTS {DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
        )
    )
    print(f"Banco de dados '{DB_NAME}' verificado/criado com sucesso!")