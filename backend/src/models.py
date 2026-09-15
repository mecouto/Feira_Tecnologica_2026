from database import Base
from sqlalchemy import Column, Integer, String


class Responsavel(Base):
    __tablename__ = "responsavel"

    id_responsavel = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nome_responsavel = Column(String(150), nullable=False)