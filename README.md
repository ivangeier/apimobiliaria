# APIMOBILIARIA

Projeto final do módulo 4 do Resília. A proposta do projeto foi criar uma API para o uso de uma imobiliária.

O nosso projeto foi pensado em um site de imobiliárias, onde cada uma delas poderá cadastrar os seus imóveis para venda e/ou aluguel.

- Este módulo foi desenvolvido para a entidade de Corretores/Broker

## Stack utilizada

**Back-end:** NodeJs e Express

**Banco de Dados** SQLite

## Deploy

Para utilizar essa aplicação, siga o passo a passo:

Clone o projeto:

```bash
  git clone https://github.com/ivangeier/apimobiliaria.git
```

Acesse a pasta do projeto:

```bash
  cd apimobiliaria
```

Instale os modulos necessário do projeto com o comando:

```bash
  npm install
```

Inicialize o projeto:

```bash
  npm run start
```

A aplicação ficará disponível no http://localhost:3000

Acompanhe a documentação da API para acessar as rotas

Versão Online

- [Heroku](https://t10-apimobiliaria-ivan.herokuapp.com/broker/all)

**O banco de dados iniciará sem nenhuma informação, sugerimos iniciar com a rota para criar um novo corretor /broker/create**

## Documentação da API

#### Cria um novo correto de imóveis

```http
  POST /broker/create
```

| Parâmetro    | Tipo     | Descrição                                            |
| :----------- | :------- | :--------------------------------------------------- |
| `firstName`  | `string` | **Obrigatório**. Primeiro Nome                       |
| `lastName`   | `string` | **Obrigatório**. Ultimo sobrenome                    |
| `phone`      | `string` | **Obrigatório**. Telefone                            |
| `cpf`        | `string` | **Obrigatório**. CPF                                 |
| `creci`      | `string` | **Obrigatório**. Numero do registro CRECI            |
| `creciState` | `string` | **Obrigatório**. Estado do registro CRECI (ex. SP)   |
| `creciExp`   | `date`   | **Obrigatório**. Data de validade do resgistro CRECI |

Ex. Body:

```http
  {
  "firstName": "Ivan",
  "lastName": "Geier",
  "email": "ivan@email.com",
  "phone": "123450000",
  "cpf": "12345678911",
  "creci": "1234565",
  "creciState": "SP",
  "creciExp": "2022-03-18"
}
```

#### Retorna todos os corretores cadastrados

```http
  GET /broker/all
```

#### Retorna um corretor específico cadastrado

```http
  GET /broker/:id
```

| Parâmetro | Tipo     | Descrição                                  |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Obrigatório**. ID do corretor cadastrado |

#### Atualiza um corretor cadastrado

```http
  PUT /broker/update/:id
```

| Parâmetro    | Tipo      | Descrição                                            |
| :----------- | :-------- | :--------------------------------------------------- |
| `firstName`  | `string`  | **Obrigatório**. Primeiro Nome                       |
| `lastName`   | `string`  | **Obrigatório**. Ultimo sobrenome                    |
| `phone`      | `string`  | **Obrigatório**. Telefone                            |
| `cpf`        | `string`  | **Obrigatório**. CPF                                 |
| `creci`      | `string`  | **Obrigatório**. Numero do registro CRECI            |
| `creciState` | `string`  | **Obrigatório**. Estado do registro CRECI (ex. SP)   |
| `creciExp`   | `date`    | **Obrigatório**. Data de validade do resgistro CRECI |
| `isActive`   | `boolean` | Identifica se usuário esta ativo no sistema          |

Ex. Body:

```http
  {
  "firstName": "Ivan",
  "lastName": "Geier",
  "email": "ivan@email.com",
  "phone": "123450000",
  "cpf": "12345678911",
  "creci": "1234565",
  "creciState": "SP",
  "creciExp": "2022-03-18"
  "isActive": 0
}
```

#### Excluir um corretor cadastrado

```http
  PUT /broker/delete/:id
```

## Autores

- [@IvanGeier](https://github.com/ivangeier)
