# List To-Do - Backend

Este é o backend da aplicação **List To-Do**, responsável por gerenciar as tarefas e armazenar os dados. Foi desenvolvido utilizando **NestJS** e **Prisma** para interação com o banco de dados.

## Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **Prisma ORM**
- **SQLite** (banco de dados)
- **TypeScript**

## Funcionalidades

- Criar, listar, atualizar e remover tarefas.
- API estruturada com boas práticas REST.
- Integração com o banco de dados via Prisma ORM.

## Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/adrianangelino/list-to-do-back.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd list-to-do-back
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configurar o banco de dados:**
   - O projeto usa **SQLite** por padrão. Para criar o banco de dados e aplicar as migrações, execute:
   ```bash
   npx prisma migrate dev
   ```

5. **Iniciar o servidor:**
   ```bash
   npm run start:dev
   ```
   O servidor iniciará em `http://localhost:3000`.

## Estrutura do Projeto

```
list-to-do-back/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── tasks/
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.module.ts
├── prisma/
│   ├── schema.prisma
├── package.json
├── tsconfig.json
├── nest-cli.json
```

- **`src/`**: Contém toda a lógica da aplicação.
  - **`tasks/`**: Módulo de gerenciamento de tarefas.
- **`prisma/`**: Configuração do banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT.

