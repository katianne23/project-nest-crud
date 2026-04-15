# 🎓 NestJS CRUD de Alunos

API RESTful desenvolvida com **NestJS** para gerenciamento de alunos (CRUD completo).

---

## 🚀 Tecnologias

* Node.js
* NestJS
* TypeScript
* Class Validator

---

## 📌 Funcionalidades

* ✅ Criar aluno
* 📄 Listar alunos
* 🔍 Buscar aluno por ID
* ✏️ Atualizar aluno
* ❌ Deletar aluno

---

## 📁 Estrutura do Projeto

```
src/
 ├── students/
 │    ├── dto/
 │    │    ├── create-student.dto.ts
 │    │    ├── update-student.dto.ts
 │    ├── students.controller.ts
 │    ├── students.service.ts
 │    ├── students.module.ts
 ├── app.module.ts
 ├── main.ts
```

---

## ⚙️ Instalação

```bash
# clonar o repositório
git clone https://github.com/katianne23/project-nest-crud

# entrar na pasta
cd project-nest-crud

# instalar dependências
npm install
```

---

## ▶️ Executar o projeto

```bash
# modo desenvolvimento
npm run start:dev
```

A API estará rodando em:

```
http://localhost:3000
```

---

## 📡 Endpoints

### 📥 Criar aluno

```
POST /students
```

```json
{
  "name": "João",
  "email": "joao@email.com",
  "age": 20,
  "course": "Informática"
}
```

---

### 📄 Listar alunos

```
GET /students
```

---

### 🔍 Buscar por ID

```
GET /students/:id
```

---

### ✏️ Atualizar aluno

```
PUT /students/:id
```

```json
{
  "name": "João Silva"
}
```

---

### ❌ Deletar aluno

```
DELETE /students/:id
```

---

## ✅ Validação (DTO)

Exemplo de validação usando `class-validator`:

```ts
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

 @IsString()
  course!: string;
}
```

---


## :memo: Licença

Esse projeto está sob a licença MIT.

Katianne Araújo

---

Feito com ♥ by  Katianne Araújo 
## ♥ Contato

