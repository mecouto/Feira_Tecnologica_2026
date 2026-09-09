import os
from database import Base, engine, get_db
from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException, status
from models import Responsavel
import schemas
from sqlalchemy.orm import Session

# Cria as tabelas caso não existam no banco
Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Responsável - CRUD MySQL")


# --- ROTAS CRUD ---


# CREATE - Cadastrar Responsável
@app.post(
    "/responsavel",
    response_model=schemas.ResponsavelResponse,
    status_code=status.HTTP_201_CREATED,
)
def criar_responsavel(
    responsavel: schemas.ResponsavelCreate, db: Session = Depends(get_db)
):
    novo_responsavel = Responsavel(
        nome_responsavel=responsavel.nome_responsavel
    )
    db.add(novo_responsavel)
    db.commit()
    db.refresh(novo_responsavel)
    return novo_responsavel


# READ ALL - Listar todos os Responsáveis
@app.get("/responsavel", response_model=list[schemas.ResponsavelResponse])
def listar_responsaveis(
    skip: int = 0, limit: int = 100, db: Session = Depends(get_db)
):
    responsaveis = db.query(Responsavel).offset(skip).limit(limit).all()
    return responsaveis


# READ ONE - Obter Responsável por ID
@app.get(
    "/responsavel/{id_responsavel}", response_model=schemas.ResponsavelResponse
)
def buscar_responsavel(id_responsavel: int, db: Session = Depends(get_db)):
    responsavel = (
        db.query(Responsavel)
        .filter(Responsavel.id_responsavel == id_responsavel)
        .first()
    )
    if not responsavel:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Responsável não encontrado",
        )
    return responsavel


# UPDATE - Atualizar dados do Responsável
@app.put(
    "/responsavel/{id_responsavel}", response_model=schemas.ResponsavelResponse
)
def atualizar_responsavel(
    id_responsavel: int,
    dados_atualizados: schemas.ResponsavelCreate,
    db: Session = Depends(get_db),
):
    responsavel = (
        db.query(Responsavel)
        .filter(Responsavel.id_responsavel == id_responsavel)
        .first()
    )
    if not responsavel:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Responsável não encontrado",
        )

    responsavel.nome_responsavel = dados_atualizados.nome_responsavel
    db.commit()
    db.refresh(responsavel)
    return responsavel


# DELETE - Remover um Responsável
@app.delete(
    "/responsavel/{id_responsavel}", status_code=status.HTTP_204_NO_CONTENT
)
def deletar_responsavel(id_responsavel: int, db: Session = Depends(get_db)):
    responsavel = (
        db.query(Responsavel)
        .filter(Responsavel.id_responsavel == id_responsavel)
        .first()
    )
    if not responsavel:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Responsável não encontrado",
        )

    db.delete(responsavel)
    db.commit()
    return None


# Executar no servidor conforme a porta definida no .env
if __name__ == "__main__":
    import uvicorn

    load_dotenv()
    port = int(os.getenv("PORT", 3000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)