from pydantic import BaseModel


# Schema base para criação/atualização
class ResponsavelBase(BaseModel):
    nome_responsavel: str


class ResponsavelCreate(ResponsavelBase):
    pass


# Schema de retorno (inclui o ID)
class ResponsavelResponse(ResponsavelBase):
    id_responsavel: int

    class Config:
        from_attributes = True