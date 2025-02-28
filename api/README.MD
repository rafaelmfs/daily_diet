# Daily Diet

### Sobre o projeto

Back-end para a aplicação daily_diet, se trata de um projeto onde o usuário pode cadastrar várias refeições e informar se está dentro da sua dieta, ele vai exibir as estatiscas das suas refeições.

### Para testar o projeto

Certifique-se de estar também com o mobile da aplicação, crie um arquivo .env seguindo o .env.example, altere as váriaveis `DATABASE_URL` para a URL onde está o banco de dados, `HOST` para o endereço do back-end e `PORT` para a porta do back-end, depois rode o comando `npm install` para instalar as dependencias e em seguida o comando `npm run knex -- migrate`, vai rodar as migrations e criar as tabelas do banco de dados.

### **Rotas da API**

---

### **User**

#### **Cadastrar usuário**

**`POST /register`**

**Request Body:**

```json
{
  "name": "string",
  "login": "string",
  "password": "string"
}
```

#### 🔒 **Dados do usuário**

**`GET /user`**

#### 🔒 **Atualizar dados de um usuário**

**`PATCH /user/:id`**

**Request Body:**

```json
{
  "name": string,
  "login": string,
  "password": string,
  "picture": string,
}
```

`

---

### **Auth**

**`POST /login`**

**Request Body:**

```json
{
  "login": "string",
  "password": "string"
}
```

#### 🔒 **Logout**

**`GET /logout`**

---

### **Meals**

#### 🔒 **Buscar todas as refeições cadastradas para o usuário logado**

**`GET /meals`**

#### 🔒 **Buscar dados de uma refeição específica**

**`GET /meals/:id`**

#### 🔒 **Buscar todas as refeições que estão marcadas como `in_diet`**

**`GET /meals/in_diet`**

#### 🔒 **Quantidade de refeições cadastradas**

**`GET /meals/count`**

#### 🔒 **Melhor sequência de refeições dentro da dieta**

**`GET /meals/best_sequence`**

#### 🔒 **Cadastrar uma nova refeição**

**`POST /meals`**

**Request Body:**

```json
  {
    name: string,
    description: string,
    in_diet: boolean,
    time: string
  }
```

#### 🔒 **Editar dados de uma refeição**

**`PATCH /meals/:id`**

**Request Body:**

```json
  {
    name: string,
    description: string,
    time: string,
    in_diet: boolean
  }
```

#### 🔒 **Apagar uma refeição**

**`DELETE /meals/:id`**
