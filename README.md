# 🎬 API de Filmes e Séries

Uma API RESTful desenvolvida em Node.js com TypeScript para gerenciar uma coleção pessoal de filmes e séries.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso da API](#uso-da-api)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Esta API permite aos usuários gerenciar suas coleções pessoais de filmes e séries, oferecendo funcionalidades completas de CRUD (Create, Read, Update, Delete) para ambos os tipos de mídia. O sistema foi desenvolvido seguindo princípios de arquitetura em camadas, garantindo escalabilidade e manutenibilidade.

## ✨ Funcionalidades

### 🎥 Filmes
- ✅ Listar todos os filmes
- ✅ Buscar filme por ID
- ✅ Cadastrar novo filme
- ✅ Atualizar informações do filme
- ✅ Excluir filme

### 📺 Séries
- ✅ Listar todas as séries
- ✅ Buscar série por ID
- ✅ Cadastrar nova série
- ✅ Atualizar informações da série
- ✅ Excluir série

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express.js** - Framework web
- **MySQL** - Banco de dados relacional
- **ESLint** - Linter para qualidade do código

## 📁 Estrutura do Projeto

```
src/
├── app.ts                 # Configuração principal da aplicação
├── server.ts             # Servidor HTTP
├── routes.ts             # Definição das rotas da API
├── controllers/          # Controladores da aplicação
│   ├── FilmesController.ts
│   └── SeriesController.ts
├── services/             # Lógica de negócio
│   ├── FilmesService.ts
│   └── SeriesService.ts
├── repositories/         # Acesso ao banco de dados
│   ├── FilmesRepositorie.ts
│   └── SeriesRepositorie.ts
├── models/               # Modelos de dados
│   ├── FilmesModel.ts
│   ├── SeriesModel.ts
│   └── HttpResponseModel.ts
├── database/             # Configuração e scripts do banco
│   ├── database.ts
│   ├── ddl/
│   │   └── filmes_db.sql
│   └── dml/
│       └── inserts.sql
└── utils/                # Utilitários
    └── httpHelper.ts
```

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd api_filmes
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o banco de dados MySQL** (veja seção de configuração)

4. **Execute os scripts de banco de dados:**
```bash
# Execute o script DDL para criar as tabelas
mysql -u seu_usuario -p sua_database < src/database/ddl/filmes_db.sql

# Execute o script DML para inserir dados de exemplo (opcional)
mysql -u seu_usuario -p sua_database < src/database/dml/inserts.sql
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
DB_PORT=3306
PORT=3000
```

### Configuração do Banco de Dados

A API utiliza MySQL como banco de dados. Certifique-se de:
- Ter o MySQL instalado e rodando
- Criar um banco de dados para o projeto
- Configurar as credenciais no arquivo `.env`

## 📖 Uso da API

### Endpoints Disponíveis

#### 🎥 Filmes

| Método | Endpoint | Descrição |
|--------|----------|------------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Busca filme por ID |
| POST | `/filmes` | Cadastra novo filme |
| PUT | `/filmes/:id` | Atualiza filme existente |
| DELETE | `/filmes/:id` | Remove filme |

#### 📺 Séries

| Método | Endpoint | Descrição |
|--------|----------|------------|
| GET | `/series` | Lista todas as séries |
| GET | `/series/:id` | Busca série por ID |
| POST | `/series` | Cadastra nova série |
| PUT | `/series/:id` | Atualiza série existente |
| DELETE | `/series/:id` | Remove série |

### Exemplos de Uso

#### Cadastrar um Filme
```bash
curl -X POST http://localhost:3000/filmes \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "O Poderoso Chefão",
    "ano": 1972,
    "genero": "Drama",
    "nota_pessoal": 9.5
  }'
```

#### Cadastrar uma Série
```bash
curl -X POST http://localhost:3000/series \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Breaking Bad",
    "ano": 2008,
    "genero": "Drama",
    "nota_pessoal": 9.8,
    "temporadas": 5
  }'
```

#### Buscar Todos os Filmes
```bash
curl http://localhost:3000/filmes
```

#### Atualizar um Filme
```bash
curl -X PUT http://localhost:3000/filmes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "titulo": "O Poderoso Chefão",
    "ano": 1972,
    "genero": "Drama",
    "nota_pessoal": 10.0
  }'
```

#### Excluir um Filme
```bash
curl -X DELETE http://localhost:3000/filmes/1
```

## 🗄️ Estrutura do Banco de Dados

### Tabela `filmes`
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | Chave primária (auto-incremento) |
| titulo | VARCHAR(255) | Título do filme |
| ano | INT | Ano de lançamento |
| genero | VARCHAR(100) | Gênero do filme |
| nota_pessoal | DECIMAL(3,1) | Nota pessoal (0.0 a 10.0) |

### Tabela `series`
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | Chave primária (auto-incremento) |
| titulo | VARCHAR(255) | Título da série |
| ano | INT | Ano de lançamento |
| genero | VARCHAR(100) | Gênero da série |
| nota_pessoal | DECIMAL(3,1) | Nota pessoal (0.0 a 10.0) |
| temporadas | INT | Número de temporadas |

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

### Testes
```bash
npm test
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot-reload
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa a aplicação em produção
- `npm test` - Executa os testes
- `npm run lint` - Executa o linter para verificar qualidade do código

## 📊 Respostas da API

A API retorna respostas padronizadas com os seguintes códigos HTTP:

- **200** - Sucesso (OK)
- **201** - Criado com sucesso
- **204** - Sem conteúdo
- **400** - Requisição inválida
- **404** - Não encontrado
- **500** - Erro interno do servidor

### Formato da Resposta
```json
{
  "statusCode": 200,
  "body": {
    // Dados da resposta
  }
}
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

**Carlos Borges** - Desenvolvedor Full Stack

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através de:
- LinkedIn: [www.linkedin.com/in/yonnnxr]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
