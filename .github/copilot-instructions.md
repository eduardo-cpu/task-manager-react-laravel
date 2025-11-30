# Task Manager - React + Laravel

## Descrição do Projeto
Sistema de Gerenciamento de Tarefas full-stack com:
- **Backend:** Laravel 11 API com Sanctum para autenticação
- **Frontend:** React 18 com Vite e Tailwind CSS

## Estrutura do Projeto
```
projeto-laravel/
├── backend/          # Laravel API
└── frontend/         # React App
```

## Tecnologias
### Backend
- Laravel 11
- PHP 8.2+
- MySQL
- Laravel Sanctum (autenticação)

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios
- React Router

## Modelos de Dados
### Task
- id, title, description, status, priority, due_date, category_id, user_id

### Category
- id, name, color, user_id

### User
- id, name, email, password

## Endpoints da API
- `POST /api/register` - Registro de usuário
- `POST /api/login` - Login
- `POST /api/logout` - Logout
- `GET /api/tasks` - Listar tarefas
- `POST /api/tasks` - Criar tarefa
- `GET /api/tasks/{id}` - Ver tarefa
- `PUT /api/tasks/{id}` - Atualizar tarefa
- `DELETE /api/tasks/{id}` - Deletar tarefa
- `GET /api/categories` - Listar categorias
- `POST /api/categories` - Criar categoria
- `GET /api/dashboard` - Estatísticas

## Comandos para Desenvolvimento
### Backend
```bash
cd backend
composer install
php artisan migrate
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
