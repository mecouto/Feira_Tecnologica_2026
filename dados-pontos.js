// Banco de dados dos pontos de distribuição - Alimenta+
// Gerado a partir das planilhas de Bom Prato e CRAS (região SP)
const pontosDistribuicao = [
  {
    "id": 1,
    "nome": "Bom Prato - BRÁS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "belenzinho",
    "endereco": "Rua Nelson Cruz, 380 - belenzinho",
    "modalidade": "MÓVEL",
    "unidade": "1 BRÁS"
  },
  {
    "id": 2,
    "nome": "Bom Prato - BRÁS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Brás",
    "endereco": "Avenida Rangel Pestana, 2327 - Brás",
    "modalidade": "FIXO",
    "unidade": "1 BRÁS"
  },
  {
    "id": 3,
    "nome": "Bom Prato - SÃO MIGUEL PAULISTA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "São Miguel Paulista",
    "endereco": "Rua José Otoni, 256 - São Miguel Paulista",
    "modalidade": "FIXO",
    "unidade": "3 SÃO MIGUEL PAULISTA"
  },
  {
    "id": 4,
    "nome": "Bom Prato - SÃO MIGUEL PAULISTA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Parque Boturussu",
    "endereco": "Rua Fernão Mendes Pinto, 14 - Parque Boturussu",
    "modalidade": "MÓVEL",
    "unidade": "3 SÃO MIGUEL PAULISTA"
  },
  {
    "id": 5,
    "nome": "Bom Prato - SANTO AMARO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Santo Amaro",
    "endereco": "Avenida Mário Lopes Leão, 685 - Santo Amaro",
    "modalidade": "FIXO",
    "unidade": "4 SANTO AMARO"
  },
  {
    "id": 6,
    "nome": "Bom Prato - SANTO AMARO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Lidia",
    "endereco": "Praça Alvimar Andrade Bittencourt, 522 - Jardim Lidia",
    "modalidade": "MÓVEL",
    "unidade": "4 SANTO AMARO"
  },
  {
    "id": 7,
    "nome": "Bom Prato - LAPA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jaguaré",
    "endereco": "Avenida Torres de Oliveira, 950 - Jaguaré",
    "modalidade": "MÓVEL",
    "unidade": "6 LAPA"
  },
  {
    "id": 8,
    "nome": "Bom Prato - LAPA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Lapa",
    "endereco": "Rua Afonso Sardinha, 245 - Lapa",
    "modalidade": "FIXO",
    "unidade": "6 LAPA"
  },
  {
    "id": 9,
    "nome": "Bom Prato - GUARULHOS",
    "tipo": "bom-prato",
    "cidade": "Guarulhos",
    "bairro": "Vila Maricy",
    "endereco": "Viela Camboriu, 32 - Vila Maricy",
    "modalidade": "MÓVEL",
    "unidade": "7 GUARULHOS"
  },
  {
    "id": 10,
    "nome": "Bom Prato - GUARULHOS",
    "tipo": "bom-prato",
    "cidade": "Guarulhos",
    "bairro": "Centro",
    "endereco": "Ladeira Campos Sales, 43 - Centro",
    "modalidade": "FIXO",
    "unidade": "7 GUARULHOS"
  },
  {
    "id": 11,
    "nome": "Bom Prato - VILA NOVA CACHOEIRINHA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Vila Souza",
    "endereco": "Avenida Deputado Cantídio Sampaio, 140 - Vila Souza",
    "modalidade": "FIXO",
    "unidade": "8 VILA NOVA CACHOEIRINHA"
  },
  {
    "id": 12,
    "nome": "Bom Prato - 25 DE MARÇO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Andarai",
    "endereco": "Rua Benedita Dornellas Claro, 662 - Jardim Andarai",
    "modalidade": "MÓVEL",
    "unidade": "9 25 DE MARÇO"
  },
  {
    "id": 13,
    "nome": "Bom Prato - 25 DE MARÇO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Centro",
    "endereco": "Rua Vinte e Cinco de Março, 166 - Centro",
    "modalidade": "FIXO",
    "unidade": "9 25 DE MARÇO"
  },
  {
    "id": 14,
    "nome": "Bom Prato - OSASCO",
    "tipo": "bom-prato",
    "cidade": "Osasco",
    "bairro": "Centro",
    "endereco": "Rua João Collino, 240 - Centro",
    "modalidade": "FIXO",
    "unidade": "10 OSASCO"
  },
  {
    "id": 15,
    "nome": "Bom Prato - OSASCO",
    "tipo": "bom-prato",
    "cidade": "Osasco",
    "bairro": "Rochdale",
    "endereco": "Rua Pinheirinho, 4 - Rochdale",
    "modalidade": "MÓVEL",
    "unidade": "10 OSASCO"
  },
  {
    "id": 16,
    "nome": "Bom Prato - CAMPINAS",
    "tipo": "bom-prato",
    "cidade": "Campinas",
    "bairro": "Centro",
    "endereco": "Avenida Doutor Moraes Sales, 384 - Centro",
    "modalidade": "FIXO",
    "unidade": "11 CAMPINAS"
  },
  {
    "id": 17,
    "nome": "Bom Prato - CAMPINAS",
    "tipo": "bom-prato",
    "cidade": "Campinas",
    "bairro": "Jardim Fernanda",
    "endereco": "Rua Professor Estevan Guedes, 1370 - Jardim Fernanda",
    "modalidade": "MÓVEL",
    "unidade": "11 CAMPINAS"
  },
  {
    "id": 18,
    "nome": "Bom Prato - ITAIM PAULISTA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Itaim Paulista",
    "endereco": "Rua Alfredo Moreira Pinto, 87 - Itaim Paulista",
    "modalidade": "FIXO",
    "unidade": "12 ITAIM PAULISTA"
  },
  {
    "id": 19,
    "nome": "Bom Prato - ITAIM PAULISTA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Maia",
    "endereco": "Avenida Professor Alípio de Barros, 1160 - Jardim Maia",
    "modalidade": "MÓVEL",
    "unidade": "12 ITAIM PAULISTA"
  },
  {
    "id": 20,
    "nome": "Bom Prato - SÃO MATEUS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Grimaldi",
    "endereco": "Avenida Sapopemba, 8775 - Jardim Grimaldi",
    "modalidade": "MÓVEL",
    "unidade": "13 SÃO MATEUS"
  },
  {
    "id": 21,
    "nome": "Bom Prato - SÃO MATEUS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "São Mateus",
    "endereco": "Avenida Mateo Bei, 2604 - São Mateus",
    "modalidade": "FIXO",
    "unidade": "13 SÃO MATEUS"
  },
  {
    "id": 22,
    "nome": "Bom Prato - SANTO ANDRÉ I",
    "tipo": "bom-prato",
    "cidade": "Ribeirão Pires",
    "bairro": "Parque Aliança",
    "endereco": "Rua Hishiro Hidaka, - Parque Aliança",
    "modalidade": "MÓVEL",
    "unidade": "14 SANTO ANDRÉ I"
  },
  {
    "id": 23,
    "nome": "Bom Prato - SANTO ANDRÉ I",
    "tipo": "bom-prato",
    "cidade": "Santo André",
    "bairro": "Centro",
    "endereco": "Rua General Glicério, 710 - Centro",
    "modalidade": "FIXO",
    "unidade": "14 SANTO ANDRÉ I"
  },
  {
    "id": 24,
    "nome": "Bom Prato - GUAIANASES",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Conjunto Habitacional Juscelino K",
    "endereco": "Rua Fernandez Palero, 301 - Conjunto Habitacional Juscelino K",
    "modalidade": "MÓVEL",
    "unidade": "15 GUAIANASES"
  },
  {
    "id": 25,
    "nome": "Bom Prato - GUAIANASES",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "CIDADE TIRADENTES",
    "endereco": "RUA EDSON DANILLO DOTTO, 39 - CIDADE TIRADENTES",
    "modalidade": "REFEITÓRIO",
    "unidade": "15 GUAIANASES"
  },
  {
    "id": 26,
    "nome": "Bom Prato - GUAIANASES",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Guaianases",
    "endereco": "Rua Copenhague, 100 - Guaianases",
    "modalidade": "FIXO",
    "unidade": "15 GUAIANASES"
  },
  {
    "id": 27,
    "nome": "Bom Prato - SANTANA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Santana",
    "endereco": "Rua Alfredo Guedes, 92 - Santana",
    "modalidade": "FIXO",
    "unidade": "16 SANTANA"
  },
  {
    "id": 28,
    "nome": "Bom Prato - SANTANA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "CANINDé",
    "endereco": "RUA CARNOT, 900 - CANINDé",
    "modalidade": "REFEITÓRIO",
    "unidade": "16 SANTANA"
  },
  {
    "id": 29,
    "nome": "Bom Prato - SÃO JOSÉ DOS CAMPOS",
    "tipo": "bom-prato",
    "cidade": "São José dos Campos",
    "bairro": "Santana",
    "endereco": "Praça Monsenhor Luiz Gonzaga Alves Cavalheiro, - Santana",
    "modalidade": "MÓVEL",
    "unidade": "17 SÃO JOSÉ DOS CAMPOS"
  },
  {
    "id": 30,
    "nome": "Bom Prato - SÃO JOSÉ DOS CAMPOS",
    "tipo": "bom-prato",
    "cidade": "São José dos Campos",
    "bairro": "Centro",
    "endereco": "Rua Rubião Júnior, 228 - Centro",
    "modalidade": "FIXO",
    "unidade": "17 SÃO JOSÉ DOS CAMPOS"
  },
  {
    "id": 31,
    "nome": "Bom Prato - SÃO JOSÉ DO RIO PRETO",
    "tipo": "bom-prato",
    "cidade": "São José do Rio Preto",
    "bairro": "Centro",
    "endereco": "Rua Pedro Amaral, 2919 - Centro",
    "modalidade": "FIXO",
    "unidade": "18 SÃO JOSÉ DO RIO PRETO"
  },
  {
    "id": 32,
    "nome": "Bom Prato - SANTOS I",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Valongo",
    "endereco": "R. Visc. de Embaré, 2 - Valongo",
    "modalidade": "MÓVEL",
    "unidade": "19 SANTOS I"
  },
  {
    "id": 33,
    "nome": "Bom Prato - SANTOS I",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Centro",
    "endereco": "Rua General Câmara, 454 - Centro",
    "modalidade": "FIXO",
    "unidade": "19 SANTOS I"
  },
  {
    "id": 34,
    "nome": "Bom Prato - RIBEIRÃO PRETO",
    "tipo": "bom-prato",
    "cidade": "Ribeirão Preto",
    "bairro": "Centro",
    "endereco": "Rua Lafaiete, 100 - Centro",
    "modalidade": "FIXO",
    "unidade": "20 RIBEIRÃO PRETO"
  },
  {
    "id": 35,
    "nome": "Bom Prato - CAPÃO REDONDO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Maracá",
    "endereco": "Avenida Atos Tomás Ferraciú, 318 - Jardim Maracá",
    "modalidade": "FIXO",
    "unidade": "21 CAPÃO REDONDO"
  },
  {
    "id": 36,
    "nome": "Bom Prato - CAPÃO REDONDO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Parque Independência",
    "endereco": "Rua Diamante Verde, 115 - Parque Independência",
    "modalidade": "MÓVEL",
    "unidade": "21 CAPÃO REDONDO"
  },
  {
    "id": 37,
    "nome": "Bom Prato - SOROCABA",
    "tipo": "bom-prato",
    "cidade": "Sorocaba",
    "bairro": "Jardim Faculdade",
    "endereco": "Rua dos Andradas, 115 - Jardim Faculdade",
    "modalidade": "FIXO",
    "unidade": "22 SOROCABA"
  },
  {
    "id": 38,
    "nome": "Bom Prato - SOROCABA",
    "tipo": "bom-prato",
    "cidade": "Sorocaba",
    "bairro": "Vila Barão",
    "endereco": "Rua Gonçalves Júnior, 752 - Vila Barão",
    "modalidade": "MÓVEL",
    "unidade": "22 SOROCABA"
  },
  {
    "id": 39,
    "nome": "Bom Prato - ITAQUERA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Cidade Antônio Estevão de Carvalho",
    "endereco": "Rua Alagoas, 103 - Cidade Antônio Estevão de Carvalho",
    "modalidade": "MÓVEL",
    "unidade": "23 ITAQUERA"
  },
  {
    "id": 40,
    "nome": "Bom Prato - ITAQUERA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Vila Carmosina",
    "endereco": "Rua Victório Santim, 247 - Vila Carmosina",
    "modalidade": "FIXO",
    "unidade": "23 ITAQUERA"
  },
  {
    "id": 41,
    "nome": "Bom Prato - MOGI DAS CRUZES I",
    "tipo": "bom-prato",
    "cidade": "Mogi das Cruzes",
    "bairro": "Jardim Bela Vista",
    "endereco": "Rua Edmundi Gerke, 151 - Jardim Bela Vista",
    "modalidade": "MÓVEL",
    "unidade": "24 MOGI DAS CRUZES I"
  },
  {
    "id": 42,
    "nome": "Bom Prato - MOGI DAS CRUZES I",
    "tipo": "bom-prato",
    "cidade": "Mogi das Cruzes",
    "bairro": "Centro",
    "endereco": "Rua Professor Flaviano de Melo, 378 - Centro",
    "modalidade": "FIXO",
    "unidade": "24 MOGI DAS CRUZES I"
  },
  {
    "id": 43,
    "nome": "Bom Prato - CAMPO LIMPO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Capão Redondo",
    "endereco": "Estrada de Itapecerica, 4728 - Capão Redondo",
    "modalidade": "FIXO",
    "unidade": "25 CAMPO LIMPO"
  },
  {
    "id": 44,
    "nome": "Bom Prato - JUNDIAÍ",
    "tipo": "bom-prato",
    "cidade": "Jundiaí",
    "bairro": "Centro",
    "endereco": "Rua Vigário João José Rodrigues, 1005 - Centro",
    "modalidade": "FIXO",
    "unidade": "26 JUNDIAÍ"
  },
  {
    "id": 45,
    "nome": "Bom Prato - JUNDIAÍ",
    "tipo": "bom-prato",
    "cidade": "Várzea Paulista",
    "bairro": "Vila Popular",
    "endereco": "Rua Minas Gerais, 75 - Vila Popular",
    "modalidade": "MÓVEL",
    "unidade": "26 JUNDIAÍ"
  },
  {
    "id": 46,
    "nome": "Bom Prato - TAUBATÉ",
    "tipo": "bom-prato",
    "cidade": "Taubaté",
    "bairro": "Terra Nova",
    "endereco": "Rua Manoel Rocha Filho, 305 - Terra Nova",
    "modalidade": "MÓVEL",
    "unidade": "27 TAUBATÉ"
  },
  {
    "id": 47,
    "nome": "Bom Prato - TAUBATÉ",
    "tipo": "bom-prato",
    "cidade": "Taubaté",
    "bairro": "Centro",
    "endereco": "Praça Doutor Barbosa de Oliveira, 31 - Centro",
    "modalidade": "FIXO",
    "unidade": "27 TAUBATÉ"
  },
  {
    "id": 48,
    "nome": "Bom Prato - TUCURUVI",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Joana D'Arc",
    "endereco": "Alameda das Roseiras, 72 - Jardim Joana D'Arc",
    "modalidade": "MÓVEL",
    "unidade": "30 TUCURUVI"
  },
  {
    "id": 49,
    "nome": "Bom Prato - TUCURUVI",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Tucuruvi",
    "endereco": "Avenida Nova Cantareira, 2099 - Tucuruvi",
    "modalidade": "FIXO",
    "unidade": "30 TUCURUVI"
  },
  {
    "id": 50,
    "nome": "Bom Prato - SÃO VICENTE - QUARENTENÁRIO",
    "tipo": "bom-prato",
    "cidade": "São Vicente",
    "bairro": "Jardim Irmã Dolores",
    "endereco": "Rua Camacan, 11 - Jardim Irmã Dolores",
    "modalidade": "FIXO",
    "unidade": "31 SÃO VICENTE - QUARENTENÁRIO"
  },
  {
    "id": 51,
    "nome": "Bom Prato - SÃO VICENTE - QUARENTENÁRIO",
    "tipo": "bom-prato",
    "cidade": "São Vicente",
    "bairro": "Vila Margarida",
    "endereco": "Rua do Canal (MÉXICO 70), 582 - Vila Margarida",
    "modalidade": "MÓVEL",
    "unidade": "31 SÃO VICENTE - QUARENTENÁRIO"
  },
  {
    "id": 52,
    "nome": "Bom Prato - SÃO VICENTE - QUARENTENÁRIO",
    "tipo": "bom-prato",
    "cidade": "São Vicente",
    "bairro": "Vila Jockei Clube",
    "endereco": "Rua Gabriel Passos, - Vila Jockei Clube",
    "modalidade": "MÓVEL",
    "unidade": "31 SÃO VICENTE - QUARENTENÁRIO"
  },
  {
    "id": 53,
    "nome": "Bom Prato - BRASILÂNDIA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Damasceno",
    "endereco": "Avenida Deputado Cantídio Sampaio, 4390 - Jardim Damasceno",
    "modalidade": "MÓVEL",
    "unidade": "32 BRASILÂNDIA"
  },
  {
    "id": 54,
    "nome": "Bom Prato - BRASILÂNDIA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Sydney",
    "endereco": "Rua Conde Monterone, 92 - Jardim Sydney",
    "modalidade": "MÓVEL",
    "unidade": "32 BRASILÂNDIA"
  },
  {
    "id": 55,
    "nome": "Bom Prato - BRASILÂNDIA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Vila Brasilândia",
    "endereco": "Av Parapuã, 1479 - Vila Brasilândia",
    "modalidade": "FIXO",
    "unidade": "32 BRASILÂNDIA"
  },
  {
    "id": 56,
    "nome": "Bom Prato - HELIÓPOLIS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Ipiranga",
    "endereco": "Estrada das Lágrimas, 2608 - Ipiranga",
    "modalidade": "FIXO",
    "unidade": "33 HELIÓPOLIS"
  },
  {
    "id": 57,
    "nome": "Bom Prato - HELIÓPOLIS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Saúde",
    "endereco": "Rua Dom Macário, 260 - Saúde",
    "modalidade": "MÓVEL",
    "unidade": "33 HELIÓPOLIS"
  },
  {
    "id": 58,
    "nome": "Bom Prato - GRAJAÚ/CIDADE DUTRA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Cidade Dutra",
    "endereco": "Rua Aníbal dos Anjos Carvalho, 51 - Cidade Dutra",
    "modalidade": "FIXO",
    "unidade": "34 GRAJAÚ/CIDADE DUTRA"
  },
  {
    "id": 59,
    "nome": "Bom Prato - GRAJAÚ/CIDADE DUTRA",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Parque Residencial dos Lagos",
    "endereco": "Rua Falcão Negro, 250 - Parque Residencial dos Lagos",
    "modalidade": "MÓVEL",
    "unidade": "34 GRAJAÚ/CIDADE DUTRA"
  },
  {
    "id": 60,
    "nome": "Bom Prato - PARAISÓPOLIS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Paraisópolis",
    "endereco": "Rua Ernest Renam, 960 - Paraisópolis",
    "modalidade": "FIXO",
    "unidade": "35 PARAISÓPOLIS"
  },
  {
    "id": 61,
    "nome": "Bom Prato - PARAISÓPOLIS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Colombo",
    "endereco": "Avenida Dom Jaime de Barros Câmara, 967 - Jardim Colombo",
    "modalidade": "MÓVEL",
    "unidade": "35 PARAISÓPOLIS"
  },
  {
    "id": 62,
    "nome": "Bom Prato - CIDADE ADEMAR",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Americanópolis",
    "endereco": "Avenida Yervant Kissajikian, 3101 - Americanópolis",
    "modalidade": "FIXO",
    "unidade": "36 CIDADE ADEMAR"
  },
  {
    "id": 63,
    "nome": "Bom Prato - CIDADE ADEMAR",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Santa Terezi",
    "endereco": "Travessa Maria Josefina da Conceição, 25 - Jardim Santa Terezi",
    "modalidade": "MÓVEL",
    "unidade": "36 CIDADE ADEMAR"
  },
  {
    "id": 64,
    "nome": "Bom Prato - SANTOS II - ZONA NOROESTE",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Chico de Paula",
    "endereco": "Avenida Nossa Senhora de Fátima, 517 - Chico de Paula",
    "modalidade": "FIXO",
    "unidade": "37 SANTOS II - ZONA NOROESTE"
  },
  {
    "id": 65,
    "nome": "Bom Prato - ITAQUAQUECETUBA",
    "tipo": "bom-prato",
    "cidade": "Itaquaquecetuba",
    "bairro": "Centro",
    "endereco": "Rua Padre Anchieta, 78 - Centro",
    "modalidade": "FIXO",
    "unidade": "38 ITAQUAQUECETUBA"
  },
  {
    "id": 66,
    "nome": "Bom Prato - ITAQUAQUECETUBA",
    "tipo": "bom-prato",
    "cidade": "Itaquaquecetuba",
    "bairro": "Vila Sônia",
    "endereco": "Rua Pirituba, 228 - Vila Sônia",
    "modalidade": "MÓVEL",
    "unidade": "38 ITAQUAQUECETUBA"
  },
  {
    "id": 67,
    "nome": "Bom Prato - SUZANO",
    "tipo": "bom-prato",
    "cidade": "Suzano",
    "bairro": "Vila Maria de Maggi",
    "endereco": "Rua Major Pinheiro Froes, 148 - Vila Maria de Maggi",
    "modalidade": "FIXO",
    "unidade": "39 SUZANO"
  },
  {
    "id": 68,
    "nome": "Bom Prato - RIO CLARO",
    "tipo": "bom-prato",
    "cidade": "Rio Claro",
    "bairro": "Centro",
    "endereco": "Rua 1, 1534 - Centro",
    "modalidade": "FIXO",
    "unidade": "40 RIO CLARO"
  },
  {
    "id": 69,
    "nome": "Bom Prato - PERUS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Vila Perus",
    "endereco": "Rua Antônio Maia, 652 - Vila Perus",
    "modalidade": "FIXO",
    "unidade": "41 PERUS"
  },
  {
    "id": 70,
    "nome": "Bom Prato - PERUS",
    "tipo": "bom-prato",
    "cidade": "Franco da Rocha",
    "bairro": "Vila Josefina",
    "endereco": "Rua Apolo, 200 - Vila Josefina",
    "modalidade": "MÓVEL",
    "unidade": "41 PERUS"
  },
  {
    "id": 71,
    "nome": "Bom Prato - BAURU",
    "tipo": "bom-prato",
    "cidade": "Bauru",
    "bairro": "Pousada da Esperança II",
    "endereco": "Rua Maurícia Pereira Lima, 145 - Pousada da Esperança II",
    "modalidade": "MÓVEL",
    "unidade": "42 BAURU"
  },
  {
    "id": 72,
    "nome": "Bom Prato - BAURU",
    "tipo": "bom-prato",
    "cidade": "Bauru",
    "bairro": "BAURU",
    "endereco": "RUA DR. ARNALDO MIRAGLIA, 6 - BAURU",
    "modalidade": "REFEITÓRIO",
    "unidade": "42 BAURU"
  },
  {
    "id": 73,
    "nome": "Bom Prato - BAURU",
    "tipo": "bom-prato",
    "cidade": "Bauru",
    "bairro": "Centro",
    "endereco": "Rua Primeiro de Agosto, 9 - Centro",
    "modalidade": "FIXO",
    "unidade": "42 BAURU"
  },
  {
    "id": 74,
    "nome": "Bom Prato - FERRAZ DE VASCONCELOS",
    "tipo": "bom-prato",
    "cidade": "Ferraz de Vasconcelos",
    "bairro": "Parque Dourado",
    "endereco": "Rua Armênia, 1050 - Parque Dourado",
    "modalidade": "MÓVEL",
    "unidade": "43 FERRAZ DE VASCONCELOS"
  },
  {
    "id": 75,
    "nome": "Bom Prato - FERRAZ DE VASCONCELOS",
    "tipo": "bom-prato",
    "cidade": "Ferraz de Vasconcelos",
    "bairro": "Vila Ana Maria",
    "endereco": "Rua Lourenço Paganucci, 155 - Vila Ana Maria",
    "modalidade": "FIXO",
    "unidade": "43 FERRAZ DE VASCONCELOS"
  },
  {
    "id": 76,
    "nome": "Bom Prato - CARAPICUÍBA",
    "tipo": "bom-prato",
    "cidade": "Carapicuíba",
    "bairro": "Centro",
    "endereco": "Avenida Miriam, 385 - Centro",
    "modalidade": "FIXO",
    "unidade": "44 CARAPICUÍBA"
  },
  {
    "id": 77,
    "nome": "Bom Prato - ARARAQUARA",
    "tipo": "bom-prato",
    "cidade": "Araraquara",
    "bairro": "Vila Xavier (Vila Xavier)",
    "endereco": "Avenida Vinte e Dois de Agosto, 138 - Vila Xavier (Vila Xavier)",
    "modalidade": "FIXO",
    "unidade": "45 ARARAQUARA"
  },
  {
    "id": 78,
    "nome": "Bom Prato - ARARAQUARA",
    "tipo": "bom-prato",
    "cidade": "Araraquara",
    "bairro": "Parque Residencial Valle Verde",
    "endereco": "Avenida Said Azzem, 936 - Parque Residencial Valle Verde",
    "modalidade": "MÓVEL",
    "unidade": "45 ARARAQUARA"
  },
  {
    "id": 79,
    "nome": "Bom Prato - LIMÃO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Limão",
    "endereco": "Avenida Professor Celestino Bourroul, 779 - Limão",
    "modalidade": "FIXO",
    "unidade": "46 LIMÃO"
  },
  {
    "id": 80,
    "nome": "Bom Prato - LIMÃO",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "SÃO PAULO",
    "endereco": "RUA MAUÁ, 66 - SÃO PAULO",
    "modalidade": "REFEITÓRIO",
    "unidade": "46 LIMÃO"
  },
  {
    "id": 81,
    "nome": "Bom Prato - SÃO CARLOS",
    "tipo": "bom-prato",
    "cidade": "São Carlos",
    "bairro": "Jardim São Carlos",
    "endereco": "Rua General Osório, 505 - Jardim São Carlos",
    "modalidade": "FIXO",
    "unidade": "47 SÃO CARLOS"
  },
  {
    "id": 82,
    "nome": "Bom Prato - MARÍLIA",
    "tipo": "bom-prato",
    "cidade": "Marília",
    "bairro": "centro",
    "endereco": "Avenida Brasil, 324 - centro",
    "modalidade": "FIXO",
    "unidade": "48 MARÍLIA"
  },
  {
    "id": 83,
    "nome": "Bom Prato - GUARUJÁ",
    "tipo": "bom-prato",
    "cidade": "Guarujá",
    "bairro": "Vila Aurea",
    "endereco": "Av Aurea Gonzales de Conde, 47 - Vila Aurea",
    "modalidade": "FIXO",
    "unidade": "49 GUARUJÁ"
  },
  {
    "id": 84,
    "nome": "Bom Prato - GUARUJÁ",
    "tipo": "bom-prato",
    "cidade": "Guarujá",
    "bairro": "Balneario",
    "endereco": "Rua Santa Izabel, 55 - Balneario",
    "modalidade": "MÓVEL",
    "unidade": "49 GUARUJÁ"
  },
  {
    "id": 85,
    "nome": "Bom Prato - LIMEIRA",
    "tipo": "bom-prato",
    "cidade": "Limeira",
    "bairro": "Centro",
    "endereco": "Rua Presidente Roosevelt, , 126 - Centro",
    "modalidade": "FIXO",
    "unidade": "50 LIMEIRA"
  },
  {
    "id": 86,
    "nome": "Bom Prato - LIMEIRA",
    "tipo": "bom-prato",
    "cidade": "Limeira",
    "bairro": "Jardim Barão de Limeira",
    "endereco": "Av. Marechal Floriano Peixoto, 152 - Jardim Barão de Limeira",
    "modalidade": "MÓVEL",
    "unidade": "50 LIMEIRA"
  },
  {
    "id": 87,
    "nome": "Bom Prato - FRANCA",
    "tipo": "bom-prato",
    "cidade": "Franca",
    "bairro": "Centro",
    "endereco": "Rua General Carneiro, 1317 - Centro",
    "modalidade": "FIXO",
    "unidade": "51 FRANCA"
  },
  {
    "id": 88,
    "nome": "Bom Prato - BOTUCATU",
    "tipo": "bom-prato",
    "cidade": "Botucatu",
    "bairro": "Dentro do Campus",
    "endereco": "Rua Domingos Sartori, S/N - Dentro do Campus",
    "modalidade": "FIXO",
    "unidade": "52 BOTUCATU"
  },
  {
    "id": 89,
    "nome": "Bom Prato - SANTOS III- MORROS",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Morro de São Bento",
    "endereco": "Rua São João, S/N - Morro de São Bento",
    "modalidade": "FIXO",
    "unidade": "53 SANTOS III- MORROS"
  },
  {
    "id": 90,
    "nome": "Bom Prato - SANTOS III- MORROS",
    "tipo": "bom-prato",
    "cidade": "São Vicente",
    "bairro": "Vila Nossa Senhora de Fátim",
    "endereco": "Praça Nossa Senhora Aparecida, - Vila Nossa Senhora de Fátim",
    "modalidade": "MÓVEL",
    "unidade": "53 SANTOS III- MORROS"
  },
  {
    "id": 91,
    "nome": "Bom Prato - SANTOS III- MORROS",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Morro da Penha",
    "endereco": "Rua José Oséas Barbosa, 1222 - Morro da Penha",
    "modalidade": "MÓVEL",
    "unidade": "53 SANTOS III- MORROS"
  },
  {
    "id": 92,
    "nome": "Bom Prato - TABOÃO DA SERRA",
    "tipo": "bom-prato",
    "cidade": "Taboão da Serra",
    "bairro": "Vila Carmelina Gonçalves",
    "endereco": "Rua Firmino Vieira Gonçalves, 162 - Vila Carmelina Gonçalves",
    "modalidade": "FIXO",
    "unidade": "54 TABOÃO DA SERRA"
  },
  {
    "id": 93,
    "nome": "Bom Prato - BARRETOS",
    "tipo": "bom-prato",
    "cidade": "Barretos",
    "bairro": "São Judas Tadeu",
    "endereco": "Rua Mariano Dias, 448 - São Judas Tadeu",
    "modalidade": "MÓVEL",
    "unidade": "55 BARRETOS"
  },
  {
    "id": 94,
    "nome": "Bom Prato - BARRETOS",
    "tipo": "bom-prato",
    "cidade": "Barretos",
    "bairro": "Jardim Campo Redondo",
    "endereco": "Rua Antenor Duarte Vilela, S/N - Jardim Campo Redondo",
    "modalidade": "FIXO",
    "unidade": "55 BARRETOS"
  },
  {
    "id": 95,
    "nome": "Bom Prato - ARAÇATUBA",
    "tipo": "bom-prato",
    "cidade": "Araçatuba",
    "bairro": "São Joaquim",
    "endereco": "Rua Baldissera Morozini, 62 - São Joaquim",
    "modalidade": "FIXO",
    "unidade": "56 ARAÇATUBA"
  },
  {
    "id": 96,
    "nome": "Bom Prato - JANDIRA",
    "tipo": "bom-prato",
    "cidade": "Jandira",
    "bairro": "Centro",
    "endereco": "Rua Elton Silva, 300 - Centro",
    "modalidade": "FIXO",
    "unidade": "57 JANDIRA"
  },
  {
    "id": 97,
    "nome": "Bom Prato - SANTOS IV- DIQUE VILA GILDA",
    "tipo": "bom-prato",
    "cidade": "Santos",
    "bairro": "Rádio Club",
    "endereco": "Rua Brigadeiro Faria Lima, 1349 - Rádio Club",
    "modalidade": "FIXO",
    "unidade": "58 SANTOS IV- DIQUE VILA GILDA"
  },
  {
    "id": 98,
    "nome": "Bom Prato - SÃO BERNARDO DO CAMPO I",
    "tipo": "bom-prato",
    "cidade": "São Bernardo do Campo",
    "bairro": "Jardim das Américas",
    "endereco": "Rua Nicolau Filizola, 50 - Jardim das Américas",
    "modalidade": "FIXO",
    "unidade": "59 SÃO BERNARDO DO CAMPO I"
  },
  {
    "id": 99,
    "nome": "Bom Prato - CUBATÃO",
    "tipo": "bom-prato",
    "cidade": "Cubatão",
    "bairro": "Parque Fernando Jorge",
    "endereco": "Rua Cidade de Pinhal, 61 - Parque Fernando Jorge",
    "modalidade": "FIXO",
    "unidade": "60 CUBATÃO"
  },
  {
    "id": 100,
    "nome": "Bom Prato - CUBATÃO",
    "tipo": "bom-prato",
    "cidade": "Cubatão",
    "bairro": "Vila Caraguata",
    "endereco": "Rua Doutor Carlos Roberto Morilhas, 102 - Vila Caraguata",
    "modalidade": "MÓVEL",
    "unidade": "60 CUBATÃO"
  },
  {
    "id": 101,
    "nome": "Bom Prato - ITAPEVI",
    "tipo": "bom-prato",
    "cidade": "Itapevi",
    "bairro": "Jardim Maria Judit",
    "endereco": "Rodovia Engenheiro Benedito da Silva, 270 - Jardim Maria Judit",
    "modalidade": "FIXO",
    "unidade": "61 ITAPEVI"
  },
  {
    "id": 102,
    "nome": "Bom Prato - ITAPEVI",
    "tipo": "bom-prato",
    "cidade": "Itapevi",
    "bairro": "Parque Suburbano",
    "endereco": "Rua dos Cearenses, 36 - Parque Suburbano",
    "modalidade": "MÓVEL",
    "unidade": "61 ITAPEVI"
  },
  {
    "id": 103,
    "nome": "Bom Prato - PRESIDENTE PRUDENTE",
    "tipo": "bom-prato",
    "cidade": "Presidente Prudente",
    "bairro": "Vila Nova",
    "endereco": "Avenida Brasil, 1073 - Vila Nova",
    "modalidade": "FIXO",
    "unidade": "62 PRESIDENTE PRUDENTE"
  },
  {
    "id": 104,
    "nome": "Bom Prato - RIBEIRÃO PRETO HC",
    "tipo": "bom-prato",
    "cidade": "Ribeirão Preto",
    "bairro": "Parque Resi",
    "endereco": "Avenida Governador Lucas Nogueira Garcez, 500 - Parque Resi",
    "modalidade": "FIXO",
    "unidade": "63 RIBEIRÃO PRETO HC"
  },
  {
    "id": 105,
    "nome": "Bom Prato - RIBEIRÃO PRETO HC",
    "tipo": "bom-prato",
    "cidade": "Ribeirão Preto",
    "bairro": "Parque Ribeirão Preto",
    "endereco": "Rua Edite Augusto Rezende, 1139 - Parque Ribeirão Preto",
    "modalidade": "MÓVEL",
    "unidade": "63 RIBEIRÃO PRETO HC"
  },
  {
    "id": 106,
    "nome": "Bom Prato - EMBU DAS ARTES",
    "tipo": "bom-prato",
    "cidade": "Embu",
    "bairro": "Jardim Santa Tereza",
    "endereco": "Avenida Rotary, 3491 - Jardim Santa Tereza",
    "modalidade": "FIXO",
    "unidade": "64 EMBU DAS ARTES"
  },
  {
    "id": 107,
    "nome": "Bom Prato - COTIA",
    "tipo": "bom-prato",
    "cidade": "Cotia",
    "bairro": "Centro",
    "endereco": "Rua Senador Feijó, 110 - Centro",
    "modalidade": "FIXO",
    "unidade": "65 COTIA"
  },
  {
    "id": 108,
    "nome": "Bom Prato - COTIA",
    "tipo": "bom-prato",
    "cidade": "Cotia",
    "bairro": "Jardim Cotia",
    "endereco": "Rua da Esperança, 255 - Jardim Cotia",
    "modalidade": "MÓVEL",
    "unidade": "65 COTIA"
  },
  {
    "id": 109,
    "nome": "Bom Prato - FRANCISCO MORATO",
    "tipo": "bom-prato",
    "cidade": "Francisco Morato",
    "bairro": "Centro",
    "endereco": "Rua Progresso, 485 - Centro",
    "modalidade": "FIXO",
    "unidade": "66 FRANCISCO MORATO"
  },
  {
    "id": 110,
    "nome": "Bom Prato - DIADEMA",
    "tipo": "bom-prato",
    "cidade": "Diadema",
    "bairro": "Eldorado",
    "endereco": "Avenida Antônio Sylvio Cunha Bueno, 1904 - Eldorado",
    "modalidade": "FIXO",
    "unidade": "67 DIADEMA"
  },
  {
    "id": 111,
    "nome": "Bom Prato - DIADEMA",
    "tipo": "bom-prato",
    "cidade": "Diadema",
    "bairro": "Jardim Casa Grande",
    "endereco": "Avenida Fundibem, 670 - Jardim Casa Grande",
    "modalidade": "MÓVEL",
    "unidade": "67 DIADEMA"
  },
  {
    "id": 112,
    "nome": "Bom Prato - DIADEMA",
    "tipo": "bom-prato",
    "cidade": "Diadema",
    "bairro": "Casa Grande",
    "endereco": "Rua Netuno, 250 - Casa Grande",
    "modalidade": "MÓVEL",
    "unidade": "67 DIADEMA"
  },
  {
    "id": 113,
    "nome": "Bom Prato - SÃO BERNARDO DO CAMPO II",
    "tipo": "bom-prato",
    "cidade": "São Bernardo do Campo",
    "bairro": "Assunção",
    "endereco": "Avenida Humberto de Alencar Castelo Branco, 4381 - Assunção",
    "modalidade": "FIXO",
    "unidade": "68 SÃO BERNARDO DO CAMPO II"
  },
  {
    "id": 114,
    "nome": "Bom Prato - SÃO BERNARDO DO CAMPO II",
    "tipo": "bom-prato",
    "cidade": "São Bernardo do Campo",
    "bairro": "Baeta Neves",
    "endereco": "Rua dos Vianas, 2990 - Baeta Neves",
    "modalidade": "MÓVEL",
    "unidade": "68 SÃO BERNARDO DO CAMPO II"
  },
  {
    "id": 115,
    "nome": "Bom Prato - PRAIA GRANDE",
    "tipo": "bom-prato",
    "cidade": "Praia Grande",
    "bairro": "Cidade Ocian",
    "endereco": "Rua Vicente de Carvalho, 876 - Cidade Ocian",
    "modalidade": "FIXO",
    "unidade": "69 PRAIA GRANDE"
  },
  {
    "id": 116,
    "nome": "Bom Prato - PRAIA GRANDE",
    "tipo": "bom-prato",
    "cidade": "Praia Grande",
    "bairro": "Ribeirópolis",
    "endereco": "R. Franklin Távora, 181 - Ribeirópolis",
    "modalidade": "MÓVEL",
    "unidade": "69 PRAIA GRANDE"
  },
  {
    "id": 117,
    "nome": "Bom Prato - JACAREÍ",
    "tipo": "bom-prato",
    "cidade": "Jacareí",
    "bairro": "Zona de Interesse",
    "endereco": "Rua Quatro, 114 - Zona de Interesse",
    "modalidade": "MÓVEL",
    "unidade": "70 JACAREÍ"
  },
  {
    "id": 118,
    "nome": "Bom Prato - JACAREÍ",
    "tipo": "bom-prato",
    "cidade": "Jacareí",
    "bairro": "Jardim Pereira do Amparo",
    "endereco": "R. Bernardino de Campos, 300 - Jardim Pereira do Amparo",
    "modalidade": "FIXO",
    "unidade": "70 JACAREÍ"
  },
  {
    "id": 119,
    "nome": "Bom Prato - MOGI DAS CRUZES II - JUNDIAPEBA",
    "tipo": "bom-prato",
    "cidade": "Mogi das Cruzes",
    "bairro": "Jundiapeba",
    "endereco": "Avenida José de Souza Branco, 1711 - Jundiapeba",
    "modalidade": "FIXO",
    "unidade": "71 MOGI DAS CRUZES II - JUNDIAPEBA"
  },
  {
    "id": 120,
    "nome": "Bom Prato - SANTO ANDRÉ II - VILA LUZITA",
    "tipo": "bom-prato",
    "cidade": "Santo André",
    "bairro": "Vila Luzita",
    "endereco": "Estrada do Pedroso, 236 - Vila Luzita",
    "modalidade": "FIXO",
    "unidade": "72 SANTO ANDRÉ II - VILA LUZITA"
  },
  {
    "id": 121,
    "nome": "Bom Prato - SANTO ANDRÉ II - VILA LUZITA",
    "tipo": "bom-prato",
    "cidade": "Santo André",
    "bairro": "Tamanduateí 8",
    "endereco": "Rua Asa Branca, 340 - Tamanduateí 8",
    "modalidade": "MÓVEL",
    "unidade": "72 SANTO ANDRÉ II - VILA LUZITA"
  },
  {
    "id": 122,
    "nome": "Bom Prato - SUMARÉ",
    "tipo": "bom-prato",
    "cidade": "Sumaré",
    "bairro": "Centro",
    "endereco": "Rua José Maria Miranda, 581 - Centro",
    "modalidade": "FIXO",
    "unidade": "73 SUMARÉ"
  },
  {
    "id": 123,
    "nome": "Bom Prato - SUMARÉ",
    "tipo": "bom-prato",
    "cidade": "Sumaré",
    "bairro": "Parque Residencial Salerno (Nova Veneza)",
    "endereco": "Rua Palmares, 155 - Parque Residencial Salerno (Nova Veneza)",
    "modalidade": "MÓVEL",
    "unidade": "73 SUMARÉ"
  },
  {
    "id": 124,
    "nome": "Bom Prato - SUMARÉ",
    "tipo": "bom-prato",
    "cidade": "Sumaré",
    "bairro": "Jardim Conceicao",
    "endereco": "R. Carlos Roberto Rocha, 207 - Jardim Conceicao",
    "modalidade": "MÓVEL",
    "unidade": "73 SUMARÉ"
  },
  {
    "id": 125,
    "nome": "Bom Prato - M'BOI MIRIM",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Conjunto Habitacional Jardim São",
    "endereco": "Rua Consciencia Negra, 21 - Conjunto Habitacional Jardim São",
    "modalidade": "MÓVEL",
    "unidade": "74 M'BOI MIRIM"
  },
  {
    "id": 126,
    "nome": "Bom Prato - M'BOI MIRIM",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Jardim Santa Edwiges",
    "endereco": "Avenida Inácio Dias da Silva, 134 - Jardim Santa Edwiges",
    "modalidade": "FIXO",
    "unidade": "74 M'BOI MIRIM"
  },
  {
    "id": 127,
    "nome": "Bom Prato - PARELHEIROS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Parelheiros",
    "endereco": "Rua Pedro Klein do Nascimento, 70 - Parelheiros",
    "modalidade": "FIXO",
    "unidade": "75 PARELHEIROS"
  },
  {
    "id": 128,
    "nome": "Bom Prato - PARELHEIROS",
    "tipo": "bom-prato",
    "cidade": "São Paulo",
    "bairro": "Parelheiros",
    "endereco": "Rua João Ferreira de Freitas, 65 - Parelheiros",
    "modalidade": "MÓVEL",
    "unidade": "75 PARELHEIROS"
  },
  {
    "id": 129,
    "nome": "Bom Prato- Ribeirão Pires",
    "tipo": "bom-prato",
    "cidade": "Ribeirão Pires",
    "bairro": "Parque Aliança",
    "endereco": "Rua Hishiro Hidaka, s/n - Parque Aliança, Rua Hishiro Hidaka, s/n - Parque Aliança",
    "modalidade": "MÓVEL",
    "unidade": "I SANTO ANDRÉ"
  },
  {
    "id": 130,
    "nome": "CRAS Sé",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Bom Retiro",
    "endereco": "Av. Tiradentes, 749, Bom Retiro",
    "regiao": "Centro",
    "telefone": "(11) 3313-1014"
  },
  {
    "id": 131,
    "nome": "CRAS Anhanguera",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Santa Fé",
    "endereco": "Av. Piero Tricca, 27, Jardim Santa Fé",
    "regiao": "Zona Norte",
    "telefone": "(11) 3911-3906"
  },
  {
    "id": 132,
    "nome": "CRAS Brasilândia I",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Brasilândia",
    "endereco": "Rua Barão de Santo Ângelo, 147, Brasilândia",
    "regiao": "Zona Norte",
    "telefone": "(11) 3921-3877"
  },
  {
    "id": 133,
    "nome": "CRAS Brasilândia II",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Maracanã",
    "endereco": "Av. Itaberaba, 3666, Jardim Maracanã",
    "regiao": "Zona Norte",
    "telefone": "(11) 3983-3063"
  },
  {
    "id": 134,
    "nome": "CRAS Brasilândia III",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Vista Alegre",
    "endereco": "Rua Ibiraiaras, 372, Jardim Vista Alegre",
    "regiao": "Zona Norte",
    "telefone": "(11) 3983-1913"
  },
  {
    "id": 135,
    "nome": "CRAS Cachoeirinha",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Nova Cachoeirinha",
    "endereco": "Av. Imirim, 4328, Vila Nova Cachoeirinha",
    "regiao": "Zona Norte",
    "telefone": "(11) 3585-2344"
  },
  {
    "id": 136,
    "nome": "CRAS Casa Verde",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Casa Verde",
    "endereco": "Av. Eng. Caetano Álvares, 3054, Casa Verde",
    "regiao": "Zona Norte",
    "telefone": "(11) 2236-4643"
  },
  {
    "id": 137,
    "nome": "CRAS Freguesia do Ó",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Freguesia do Ó",
    "endereco": "Av. Itaberaba, 924, Freguesia do Ó",
    "regiao": "Zona Norte",
    "telefone": "(11) 3572-2266"
  },
  {
    "id": 138,
    "nome": "CRAS Jaçanã",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jaçanã",
    "endereco": "Av. Guapira, 2145, Jaçanã",
    "regiao": "Zona Norte",
    "telefone": "(11) 2242-4047"
  },
  {
    "id": 139,
    "nome": "CRAS Jaraguá",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Parque Panamericano Jaraguá",
    "endereco": "Rua Barra da Forquilha, 300, Parque Panamericano Jaraguá",
    "regiao": "Zona Norte",
    "telefone": "(11) 3942-4860"
  },
  {
    "id": 140,
    "nome": "CRAS Perus",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Perus",
    "endereco": "Rua Padre Manuel Campello, 40, Perus",
    "regiao": "Zona Norte",
    "telefone": "(11) 3917-0795"
  },
  {
    "id": 141,
    "nome": "CRAS Pirituba",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Pirituba",
    "endereco": "Rua Guerino Giovani Leardini, 290, Pirituba",
    "regiao": "Zona Norte",
    "telefone": "(11) 2183-1067"
  },
  {
    "id": 142,
    "nome": "CRAS Santana",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Mandaqui",
    "endereco": "Av. Voluntários da Pátria, 4649, Mandaqui",
    "regiao": "Zona Norte",
    "telefone": "(11) 4571-0699"
  },
  {
    "id": 143,
    "nome": "CRAS Tremembé",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Mazzei",
    "endereco": "Av. Mario Pernambuco, 43, Vila Mazzei",
    "regiao": "Zona Norte",
    "telefone": "(11) 2261-2365"
  },
  {
    "id": 144,
    "nome": "CRAS Vila Maria",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Maria",
    "endereco": "Praça Santo Eduardo, 162, Vila Maria",
    "regiao": "Zona Norte",
    "telefone": "(11) 3411-3162"
  },
  {
    "id": 145,
    "nome": "CRAS Vila Medeiros",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Medeiros",
    "endereco": "Av. Gustavo Adolfo, 2202, Vila Medeiros",
    "regiao": "Zona Norte",
    "telefone": "(11) 2939-1856"
  },
  {
    "id": 146,
    "nome": "CRAS Aricanduva",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Mafra",
    "endereco": "Rua São Constâncio, 457, Vila Mafra",
    "regiao": "Zona Leste",
    "telefone": "(11) 3246-8300"
  },
  {
    "id": 147,
    "nome": "CRAS Arthur Alvim",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Santa Tereza",
    "endereco": "Rua Henrique Jacobs, 788, Vila Santa Tereza",
    "regiao": "Zona Leste",
    "telefone": "(11) 2743-2678"
  },
  {
    "id": 148,
    "nome": "CRAS Cidade Líder",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Cidade Líder",
    "endereco": "Av. Maria Luiza Americano, 2681, Cidade Líder",
    "regiao": "Zona Leste",
    "telefone": "(11) 2746-0935"
  },
  {
    "id": 149,
    "nome": "CRAS Cidade Tiradentes",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Cidade Tiradentes",
    "endereco": "Rua Nascer do Sol, 529, Cidade Tiradentes",
    "regiao": "Zona Leste",
    "telefone": "(11) 2363-9885"
  },
  {
    "id": 150,
    "nome": "CRAS Ermelino Matarazzo",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Ermelino Matarazzo",
    "endereco": "Av. Paranaguá, 1492, Ermelino Matarazzo",
    "regiao": "Zona Leste",
    "telefone": "(11) 2545-3211"
  },
  {
    "id": 151,
    "nome": "CRAS Guaianases",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Guaianases",
    "endereco": "Rua Clarinia, 19, Guaianases",
    "regiao": "Zona Leste",
    "telefone": "(11) 2363-9594"
  },
  {
    "id": 152,
    "nome": "CRAS Iguatemi",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Roseli",
    "endereco": "Rua Jorge Barros, 88, Jardim Roseli",
    "regiao": "Zona Leste",
    "telefone": "(11) 2734-5568"
  },
  {
    "id": 153,
    "nome": "CRAS Itaim Paulista",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Itaim Paulista",
    "endereco": "Rua Dom João Nery, 58, Itaim Paulista",
    "regiao": "Zona Leste",
    "telefone": "(11) 2156-3094"
  },
  {
    "id": 154,
    "nome": "CRAS Itaim Paulista II",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Itaim Paulista",
    "endereco": "Rua Daniel Muller, 347, Itaim Paulista",
    "regiao": "Zona Leste",
    "telefone": "(11) 2025-0001"
  },
  {
    "id": 155,
    "nome": "CRAS Itaquera",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Itaquera",
    "endereco": "Rua Fontoura Xavier, 695, Itaquera",
    "regiao": "Zona Leste",
    "telefone": "(11) 2056-4412"
  },
  {
    "id": 156,
    "nome": "CRAS Lajeado",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Lajeado",
    "endereco": "Rua Cruz do Espírito Santo, 1142, Lajeado",
    "regiao": "Zona Leste",
    "telefone": "(11) 2552-8590"
  },
  {
    "id": 157,
    "nome": "CRAS Mooca",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Tatuapé",
    "endereco": "Rua Henrique Sertório, 175, Tatuapé",
    "regiao": "Zona Leste",
    "telefone": "(11) 2383-4539"
  },
  {
    "id": 158,
    "nome": "CRAS Penha",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Santa Tereza",
    "endereco": "Rua Henrique Jacobs, 788, Vila Santa Tereza",
    "regiao": "Zona Leste",
    "telefone": "(11) 2641-4536"
  },
  {
    "id": 159,
    "nome": "CRAS Sapopemba",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Grimaldi",
    "endereco": "Rua Benedito Jacinto Mendes, 54, Jardim Grimaldi",
    "regiao": "Zona Leste",
    "telefone": "(11) 2143-1043"
  },
  {
    "id": 160,
    "nome": "CRAS São Mateus",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "São Mateus",
    "endereco": "Rua Elísio Ferreira, 519, São Mateus",
    "regiao": "Zona Leste",
    "telefone": "(11) 2363-9560"
  },
  {
    "id": 161,
    "nome": "CRAS São Miguel Paulista",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "São Miguel Paulista",
    "endereco": "Rua Dr. José Guilherme Eiras, 182, São Miguel Paulista",
    "regiao": "Zona Leste",
    "telefone": "(11) 2058-1219"
  },
  {
    "id": 162,
    "nome": "CRAS Vila Curuçá",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Curuçá",
    "endereco": "Av. Coca, 341, Vila Curuçá",
    "regiao": "Zona Leste",
    "telefone": "(11) 2035-4097"
  },
  {
    "id": 163,
    "nome": "CRAS Vila Prudente",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Prudente",
    "endereco": "Av. Paes de Barros, 3349, Vila Prudente",
    "regiao": "Zona Leste",
    "telefone": "(11) 4571-0806"
  },
  {
    "id": 164,
    "nome": "CRAS Butantã",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Sônia",
    "endereco": "Av. Junta Mizumoto, 591, Vila Sônia",
    "regiao": "Zona Oeste",
    "telefone": "(11) 3742-7550"
  },
  {
    "id": 165,
    "nome": "CRAS Lapa",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Romana",
    "endereco": "Rua Guaicurus, 1000, Vila Romana",
    "regiao": "Zona Oeste",
    "telefone": "(11) 3672-5994"
  },
  {
    "id": 166,
    "nome": "CRAS Pinheiros",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Pinheiros",
    "endereco": "Rua Mourato Coelho, 104, Pinheiros",
    "regiao": "Zona Oeste",
    "telefone": "(11) 2821-4986"
  },
  {
    "id": 167,
    "nome": "CRAS Campo Limpo",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Pirajussara",
    "endereco": "Estrada de Campo Limpo, 3420, Jardim Pirajussara",
    "regiao": "Zona Sul",
    "telefone": "(11) 5841-4776"
  },
  {
    "id": 168,
    "nome": "CRAS Capão Redondo",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Germânia",
    "endereco": "Rua Roberto Sampaio, 233, Jardim Germânia",
    "regiao": "Zona Sul",
    "telefone": "(11) 5510-0108"
  },
  {
    "id": 169,
    "nome": "CRAS Capela do Socorro",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Interlagos",
    "endereco": "Av. Interlagos, 5980, Interlagos",
    "regiao": "Zona Sul",
    "telefone": "(11) 5666-3740"
  },
  {
    "id": 170,
    "nome": "CRAS Cidade Ademar",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Cidade Ademar",
    "endereco": "Av. Cupecê, 2278, Cidade Ademar",
    "regiao": "Zona Sul",
    "telefone": "(11) 2313-5357"
  },
  {
    "id": 171,
    "nome": "CRAS Cidade Ademar II",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Cidade Ademar",
    "endereco": "Av. Cupecê, 5699, Cidade Ademar",
    "regiao": "Zona Sul",
    "telefone": "(11) 5622-4053"
  },
  {
    "id": 172,
    "nome": "CRAS Grajaú",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "333",
    "endereco": "Rua Ezequiel Lopes Cardoso, 333",
    "regiao": "Zona Sul",
    "telefone": "(11) 5924-5718"
  },
  {
    "id": 173,
    "nome": "CRAS Ipiranga",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Sacomã",
    "endereco": "Rua Taquarichim, 290, Vila Vera, Sacomã",
    "regiao": "Zona Sul",
    "telefone": "(11) 2383-4505"
  },
  {
    "id": 174,
    "nome": "CRAS Jabaquara",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Cidade Vargas",
    "endereco": "Rua dos Jornalistas, 48, Cidade Vargas",
    "regiao": "Zona Sul",
    "telefone": "(11) 2383-4738"
  },
  {
    "id": 175,
    "nome": "CRAS Jardim Ângela",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim São Luís",
    "endereco": "Rua Luiz Baldinato, 150, Jardim São Luís",
    "regiao": "Zona Sul",
    "telefone": "(11) 5833-4012"
  },
  {
    "id": 176,
    "nome": "CRAS M'Boi Mirim",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Santa Edwiges",
    "endereco": "Av. Inácio Dias da Silva, Rua Antônio Arenso, 55, Jardim Santa Edwiges",
    "regiao": "Zona Sul",
    "telefone": "(11) 2363-9688"
  },
  {
    "id": 177,
    "nome": "CRAS Marsilac",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Marsilac",
    "endereco": "Rua Henrique Silva, 68, Marsilac",
    "regiao": "Zona Sul",
    "telefone": "(11) 5975-2816"
  },
  {
    "id": 178,
    "nome": "CRAS Parelheiros",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Parelheiros",
    "endereco": "Rua Pedro Klein do Nascimento, 100, Parelheiros",
    "regiao": "Zona Sul",
    "telefone": "(11) 5920-4162"
  },
  {
    "id": 179,
    "nome": "CRAS Pedreira",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Pedreira",
    "endereco": "Estrada do Alvarenga, 3657, Pedreira",
    "regiao": "Zona Sul",
    "telefone": "(11) 5673-2425"
  },
  {
    "id": 180,
    "nome": "CRAS Santo Amaro",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Santo Amaro",
    "endereco": "Rua Padre José de Anchieta, 802, Santo Amaro",
    "regiao": "Zona Sul",
    "telefone": "(11) 5524-4000"
  },
  {
    "id": 181,
    "nome": "CRAS São Luís",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim São Luís",
    "endereco": "Rua José Manoel Camisa Nova, 100, Jardim São Luís",
    "regiao": "Zona Sul",
    "telefone": "(11) 5513-0459"
  },
  {
    "id": 182,
    "nome": "CRAS Vila Andrade",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Jardim Morumbi",
    "endereco": "Rua General João Pereira de Oliveira, 26, Jardim Morumbi",
    "regiao": "Zona Sul",
    "telefone": "(11) 3742-3850"
  },
  {
    "id": 183,
    "nome": "CRAS Vila Mariana",
    "tipo": "cras",
    "cidade": "São Paulo",
    "bairro": "Vila Mariana",
    "endereco": "Rua Artur Almeida, 154, Vila Mariana",
    "regiao": "Zona Sul",
    "telefone": "(11) 2363-9514"
  },
  {
    "id": 184,
    "nome": "CRAS Falchi",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Vila Falchi",
    "endereco": "Rua Friedrich Gunter Meinen, 71, Vila Falchi",
    "regiao": "Mauá",
    "telefone": "(11) 4512-7582"
  },
  {
    "id": 185,
    "nome": "CRAS Feital",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Jardim Feital",
    "endereco": "Avenida Dona Benedita Franco da Veiga, 1083, Jardim Feital",
    "regiao": "Mauá",
    "telefone": "(11) 4512-7726"
  },
  {
    "id": 186,
    "nome": "CRAS Macuco",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Jardim Zaíra",
    "endereco": "Rua Remo Luís Corradini, 115, Jardim Zaíra",
    "regiao": "Mauá",
    "telefone": "(11) 4518-2666"
  },
  {
    "id": 187,
    "nome": "CRAS Oratório",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Jardim Oratório",
    "endereco": "Rua Salvador, 266, Jardim Oratório",
    "regiao": "Mauá",
    "telefone": "(11) 4514-5411"
  },
  {
    "id": 188,
    "nome": "CRAS Parque das Américas",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Parque das Américas",
    "endereco": "Rua Estados Unidos, 84, Parque das Américas",
    "regiao": "Mauá",
    "telefone": "(11) 4541-1484"
  },
  {
    "id": 189,
    "nome": "CRAS São João",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Vila São João",
    "endereco": "Avenida Barão de Mauá, 4050, Vila São João",
    "regiao": "Mauá",
    "telefone": "(11) 4518-4535"
  },
  {
    "id": 190,
    "nome": "CRAS Vila Mercedes",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Vila Mercedes",
    "endereco": "Rua Cícero Rodrigues da Silva, 355, Vila Mercedes",
    "regiao": "Mauá",
    "telefone": "(11) 4513-6465"
  },
  {
    "id": 191,
    "nome": "CRAS Zaíra",
    "tipo": "cras",
    "cidade": "Mauá",
    "bairro": "Jardim Zaíra",
    "endereco": "Avenida Presidente Castelo Branco, 2982, Jardim Zaíra",
    "regiao": "Mauá",
    "telefone": "(11) 4514-4265"
  },
  {
    "id": 192,
    "nome": "CRAS Centro",
    "tipo": "cras",
    "cidade": "Ribeirão Pires",
    "bairro": "Centro",
    "endereco": "Rua Batista Lion, 108, Centro",
    "regiao": "Ribeirão Pires",
    "telefone": "(11) 4824-1485"
  },
  {
    "id": 193,
    "nome": "CRAS Jardim Caçula",
    "tipo": "cras",
    "cidade": "Ribeirão Pires",
    "bairro": "Jardim Caçula",
    "endereco": "Rua Fagundes Varela, 7, Jardim Caçula",
    "regiao": "Ribeirão Pires",
    "telefone": "(11) 4828-1327"
  },
  {
    "id": 194,
    "nome": "CRAS Ouro Fino",
    "tipo": "cras",
    "cidade": "Ribeirão Pires",
    "bairro": "Ouro Fino Paulista",
    "endereco": "Estrada Eduardo Valeriano Nardeli, 367, Ouro Fino Paulista",
    "regiao": "Ribeirão Pires",
    "telefone": "(11) 4823-9283"
  },
  {
    "id": 195,
    "nome": "CRAS Quarta Divisão",
    "tipo": "cras",
    "cidade": "Ribeirão Pires",
    "bairro": "IV Divisão",
    "endereco": "Estrada do Sapopemba, 5055, IV Divisão",
    "regiao": "Ribeirão Pires",
    "telefone": "(11) 4824-7052"
  },
  {
    "id": 196,
    "nome": "CRAS Alzira Franco",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Jardim Alzira Franco",
    "endereco": "Rua Amapolas, s/nº, Jardim Alzira Franco",
    "regiao": "Santo André",
    "telefone": "(11) 4437-2932"
  },
  {
    "id": 197,
    "nome": "CRAS Centro",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Centro",
    "endereco": "Rua Xavier de Toledo, 350, Centro",
    "regiao": "Santo André",
    "telefone": "(11) 4433-4550"
  },
  {
    "id": 198,
    "nome": "CRAS Marek/Cidade São Jorge",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Condomínio Maracanã",
    "endereco": "Av. Valentim Magalhães, 2776, Condomínio Maracanã",
    "regiao": "Santo André",
    "telefone": "(11) 4458-1227"
  },
  {
    "id": 199,
    "nome": "CRAS Vila Luzita",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Vila Luzita",
    "endereco": "Avenida São Bernardo do Campo, 171, Vila Luzita",
    "regiao": "Santo André",
    "telefone": "(11) 4455-8527"
  },
  {
    "id": 200,
    "nome": "CRAS Recreio/Miami",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Recreio da Borda do Campo",
    "endereco": "Rua Macaco Prego, 34, Recreio da Borda do Campo",
    "regiao": "Santo André",
    "telefone": "(11) 4457-9880"
  },
  {
    "id": 201,
    "nome": "CRAS Jardim Cristiane",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Jardim Cristiane",
    "endereco": "Rua Martinópolis, s/nº, Jardim Cristiane",
    "regiao": "Santo André",
    "telefone": "(11) 4452-2944"
  },
  {
    "id": 202,
    "nome": "CRAS Utinga",
    "tipo": "cras",
    "cidade": "Santo André",
    "bairro": "Utinga",
    "endereco": "Av. Utinga, 1791, Utinga",
    "regiao": "Santo André",
    "telefone": "(11) 4994-4766"
  },
  {
    "id": 203,
    "nome": "CRAS I - Montanhão/Ferrazópolis",
    "tipo": "cras",
    "cidade": "São Bernardo do Campo",
    "bairro": "Montanhão",
    "endereco": "Rua Tiradentes, 1555, Montanhão",
    "regiao": "São Bernardo do Campo",
    "telefone": "(11) 4335-6982"
  },
  {
    "id": 204,
    "nome": "CRAS II - Alves Dias/Vila Ferreira",
    "tipo": "cras",
    "cidade": "São Bernardo do Campo",
    "bairro": "Jardim Esmeralda",
    "endereco": "Rua João Batista Capitâneo, 160, Jardim Esmeralda",
    "regiao": "São Bernardo do Campo",
    "telefone": "(11) 4109-9880"
  },
  {
    "id": 205,
    "nome": "CRAS III - Alvarenga/Batistini",
    "tipo": "cras",
    "cidade": "São Bernardo do Campo",
    "bairro": "Sítio Bom Jesus",
    "endereco": "Rua Ministro Nelson Hungria, 134, Sítio Bom Jesus",
    "regiao": "São Bernardo do Campo",
    "telefone": "(11) 2630-6538"
  },
  {
    "id": 206,
    "nome": "CRAS IV - Riacho Grande",
    "tipo": "cras",
    "cidade": "São Bernardo do Campo",
    "bairro": "Riacho Grande",
    "endereco": "Rua Amazonas, 460, Riacho Grande",
    "regiao": "São Bernardo do Campo",
    "telefone": "(11) 4354-0464"
  },
  {
    "id": 207,
    "nome": "CRAS V - Centro",
    "tipo": "cras",
    "cidade": "São Bernardo do Campo",
    "bairro": "D.E.R.",
    "endereco": "Rua Antônia Benedita do Nascimento, 02, D.E.R.",
    "regiao": "São Bernardo do Campo",
    "telefone": "(11) 2630-6660"
  },
  {
    "id": 208,
    "nome": "CRAS Prosperidade (Avelina Tortorello)",
    "tipo": "cras",
    "cidade": "São Caetano do Sul",
    "bairro": "Prosperidade",
    "endereco": "Avenida Prosperidade, 441, Prosperidade",
    "regiao": "São Caetano do Sul",
    "telefone": "(11) 4229-8753"
  },
  {
    "id": 209,
    "nome": "CRAS Nova Gerty",
    "tipo": "cras",
    "cidade": "São Caetano do Sul",
    "bairro": "Nova Gerty",
    "endereco": "Rua Marlene, 452, Nova Gerty",
    "regiao": "São Caetano do Sul",
    "telefone": "(11) 4232-1900"
  },
  {
    "id": 210,
    "nome": "CRAS Sul",
    "tipo": "cras",
    "cidade": "Diadema",
    "bairro": "Eldorado",
    "endereco": "Avenida Nossa Senhora dos Navegantes, 1090, Eldorado",
    "regiao": "Diadema",
    "telefone": "(11) 4049-5400"
  },
  {
    "id": 211,
    "nome": "CRAS Centro (Aurora)",
    "tipo": "cras",
    "cidade": "Diadema",
    "bairro": "Centro",
    "endereco": "Rua Aurora, 250, Centro",
    "regiao": "Diadema",
    "telefone": ""
  },
  {
    "id": 212,
    "nome": "CRAS Casa Grande/Areal",
    "tipo": "cras",
    "cidade": "Diadema",
    "bairro": "Casa Grande",
    "endereco": "Rua Prudente de Moraes, 306, Casa Grande",
    "regiao": "Diadema",
    "telefone": "(11) 4057-1400"
  },
  {
    "id": 213,
    "nome": "CRAS Centro-Oeste",
    "tipo": "cras",
    "cidade": "Diadema",
    "bairro": "Conceição",
    "endereco": "Av. Lico Maia, 256, Conceição",
    "regiao": "Diadema",
    "telefone": "(11) 4048-1519"
  },
  {
    "id": 214,
    "nome": "CRAS Rio Grande da Serra",
    "tipo": "cras",
    "cidade": "Rio Grande da Serra",
    "bairro": "Jardim Santa Tereza",
    "endereco": "Rua Santa Branca, 24, Jardim Santa Tereza",
    "regiao": "Rio Grande da Serra",
    "telefone": "(11) 2770-0154"
  },
  {
    "id": 215,
    "nome": "Bom Prato - Mauá",
    "tipo": "bom-prato",
    "cidade": "Mauá",
    "bairro": "Vila Bocaina",
    "endereco": "Rua General Osório, nº 144 – Centro / Vila Bocaina, Mauá - SP",
    "modalidade": "Fixo",
    "unidade": "1 Mauá"
  },
  {
  "id": 216,
  "nome": "CRAS Ferraz",
  "tipo": "cras",
  "cidade": "Bauru",
  "bairro": "Jardim Ferraz",
  "endereco": "Rua do Prata, qd. 04 s/nº",
  "regiao": "Sul",
  "telefone": "(14) 3234-5853"
},
{
  "id": 217,
  "nome": "CRAS Central",
  "tipo": "cras",
  "cidade": "Botucatu",
  "bairro": "Bairro Alto",
  "endereco": "Rua João Passos, 1.766",
  "regiao": "Central",
  "telefone": "(14) 3811-1490"
},
{
  "id": 218,
  "nome": "CRAS Leste",
  "tipo": "cras",
  "cidade": "Botucatu",
  "bairro": "Jardim Palos Verdes",
  "endereco": "Rua Boticário Vieira, 469",
  "regiao": "Leste",
  "telefone": "(14) 3811-1490"
},
{
  "id": 219,
  "nome": "CRAS Anhumas",
  "tipo": "cras",
  "cidade": "Campinas",
  "bairro": "Vila Nogueira",
  "endereco": "Rua Dona Luiza de Gusmão, 2.200",
  "regiao": "Leste",
  "telefone": "(19) 3734-2000"
},
{
  "id": 220,
  "nome": "CRAS Espaço Esperança",
  "tipo": "cras",
  "cidade": "Campinas",
  "bairro": "Recanto da Fortuna",
  "endereco": "Rua Neuraci da Silva Rodrigues, 194",
  "regiao": "Norte",
  "telefone": "(19) 3734-2000"
},
{
  "id": 221,
  "nome": "CRAS Satélite Íris",
  "tipo": "cras",
  "cidade": "Campinas",
  "bairro": "Cidade Satélite Íris I",
  "endereco": "Rua Prof. Mário Scolari, 91",
  "regiao": "Noroeste",
  "telefone": "(19) 3734-2000"
},
{
  "id": 222,
  "nome": "CRAS Ariston",
  "tipo": "cras",
  "cidade": "Carapicuíba",
  "bairro": "Cidade Ariston",
  "endereco": "Rua Comendador Dante Carraro, 333",
  "regiao": "Central",
  "telefone": "(11) 4184-8200"
},
{
  "id": 223,
  "nome": "CRAS Brigitte",
  "tipo": "cras",
  "cidade": "Carapicuíba",
  "bairro": "Vila Brigitte",
  "endereco": "Rua Projetada, 30",
  "regiao": "Sul",
  "telefone": "(11) 4185-3000"
},
{
  "id": 224,
  "nome": "CRAS Cotia",
  "tipo": "cras",
  "cidade": "Cotia",
  "bairro": "Centro",
  "endereco": "Rua Senador Feijó, 165",
  "regiao": "Central",
  "telefone": "(11) 4616-2831"
},
{
  "id": 225,
  "nome": "CRAS Caucaia do Alto",
  "tipo": "cras",
  "cidade": "Cotia",
  "bairro": "Caucaia do Alto",
  "endereco": "Rua José André de Moraes, 40",
  "regiao": "Oeste",
  "telefone": "(11) 4145-1000"
},
{
  "id": 226,
  "nome": "CRAS Vila Nova",
  "tipo": "cras",
  "cidade": "Cubatão",
  "bairro": "Vila Nova",
  "endereco": "Rua Assembleia de Deus, 435",
  "regiao": "Central",
  "telefone": "(13) 3362-4000"
},
{
  "id": 227,
  "nome": "CRAS Vila Natal",
  "tipo": "cras",
  "cidade": "Cubatão",
  "bairro": "Vila Natal",
  "endereco": "Rua Éfeso, 100",
  "regiao": "Norte",
  "telefone": "(13) 3362-4000"
},
{
  "id": 228,
  "nome": "CRAS Centro",
  "tipo": "cras",
  "cidade": "Embu das Artes",
  "bairro": "Cercado Grande",
  "endereco": "Rua Sete de Setembro, 73",
  "regiao": "Central",
  "telefone": "(11) 4785-3583"
},
{
  "id": 229,
  "nome": "CRAS Jardim do Colégio",
  "tipo": "cras",
  "cidade": "Embu das Artes",
  "bairro": "Jardim do Colégio",
  "endereco": "Rua Roraima, 120",
  "regiao": "Sul",
  "telefone": "(11) 4785-3583"
}
];