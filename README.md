# 🐾 Almas de Gato

Projeto Interdisciplinar desenvolvido pelos alunos de Análise e Desenvolvimento de Sistemas (ADS) do UNIBRA – Centro Universitário Brasileiro, em parceria com a ONG **Almas de Gato**, dedicada ao resgate, cuidado e encaminhamento de animais para adoção responsável.

## 📌 Sobre o projeto

A ONG Almas de Gato divulga seu trabalho principalmente pelo Instagram, o que limita o alcance e dificulta que novas pessoas conheçam o projeto. Este sistema web tem como objetivo centralizar as informações da ONG em um único ambiente digital — apresentando os animais disponíveis para adoção, facilitando o contato com adotantes e divulgando formas de contribuição.

## 🎯 Objetivos

- Apresentar os animais disponíveis para adoção de forma clara e acessível
- Reunir informações institucionais da ONG em um único lugar
- Facilitar o contato entre interessados e a ONG
- Possibilitar uma análise prévia dos adotantes antes da adoção

## 🛠️ Tecnologias utilizadas

**Front-end**
- HTML5
- CSS3
- JavaScript

**Back-end**
- Node.js
- Express
- MySQL (via XAMPP em ambiente de desenvolvimento)

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [XAMPP](https://www.apachefriends.org/) instalado (para o MySQL)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/danielandrade-png/Projeto-Almas-de-Gato.git

# Acesse a pasta do projeto
cd Projeto-Almas-de-Gato

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=almas_de_gato
DB_PORT=3306
```

Inicie o MySQL pelo XAMPP Control Panel e crie o banco `almas_de_gato` (via phpMyAdmin).

Por fim, rode o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## 📁 Estrutura de pastas

```
├── config/        # Configuração de conexão com o banco de dados
├── controllers/    # Lógica das rotas
├── routes/         # Definição das rotas da API
├── server.js        # Arquivo principal do servidor
└── .env              # Variáveis de ambiente (não versionado)
```

## 👥 Equipe

| Nome | Função |
|---|---|
| Ailson Rodrigues Vieira Junior | Responsável pela apresentação visual |
| Anderson Felipe T. da Hora | Analista de documentação |
| Carllos Eduardo Virgínio Vieira | Desenvolvedor front-end |
| Daniel Andrade da Silva Filho | Desenvolvedor back-end |
| Gabriel Cavalcanti Garrido | Gerente do projeto / Desenvolvedor front-end |
| Hitallo Guilherme Farias de Melo | Desenvolvedor front-end |
| Karolayne Isabel Silva | Responsável pelos materiais de apoio |
| Matheus Henrique Nobrega Correia | Responsável pela apresentação oral |
| Ramon Lorenzo P. de S. Pimentel | Analista de documentação |
| Thayguara Batista da Silva | Responsável técnico / Desenvolvedor back-end |

**Orientador(a):** Ismael Rodrigues

## 🏫 Instituição

UNIBRA – Centro Universitário Brasileiro
Análise e Desenvolvimento de Sistemas — 2026.2
