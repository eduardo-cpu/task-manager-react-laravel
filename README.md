# 📝 Task Manager - React + Laravel

Sistema de Gerenciamento de Tarefas full-stack com autenticação, categorias e dashboard.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss)

## 🚀 Funcionalidades

- ✅ **Autenticação completa** - Login e Registro de usuários
- ✅ **CRUD de Tarefas** - Criar, editar, excluir e listar tarefas
- ✅ **Categorias** - Organize suas tarefas por categorias coloridas
- ✅ **Filtros e Busca** - Filtre por status, prioridade e categoria
- ✅ **Dashboard** - Visualize estatísticas e progresso
- ✅ **Responsivo** - Funciona em desktop e mobile

## 🛠️ Tecnologias

### Backend
- **Laravel 11** - Framework PHP
- **Laravel Sanctum** - Autenticação API
- **SQLite/MySQL** - Banco de dados

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **React Router** - Navegação
- **Axios** - Requisições HTTP

## 📦 Instalação

### Pré-requisitos
- PHP 8.2+
- Composer
- Node.js 20+
- npm ou yarn

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🌐 URLs

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000/api

## 📚 Endpoints da API

### Autenticação
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/register` | Registrar usuário |
| POST | `/api/login` | Login |
| POST | `/api/logout` | Logout |
| GET | `/api/user` | Usuário autenticado |

### Tarefas
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/tasks` | Listar tarefas |
| POST | `/api/tasks` | Criar tarefa |
| GET | `/api/tasks/{id}` | Ver tarefa |
| PUT | `/api/tasks/{id}` | Atualizar tarefa |
| DELETE | `/api/tasks/{id}` | Excluir tarefa |

### Categorias
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/categories` | Listar categorias |
| POST | `/api/categories` | Criar categoria |
| PUT | `/api/categories/{id}` | Atualizar categoria |
| DELETE | `/api/categories/{id}` | Excluir categoria |

### Dashboard
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/dashboard` | Estatísticas |

## 📁 Estrutura do Projeto

```
projeto-laravel/
├── backend/                 # Laravel API
│   ├── app/
│   │   ├── Http/Controllers/Api/
│   │   └── Models/
│   ├── database/migrations/
│   └── routes/api.php
│
└── frontend/                # React App
    └── src/
        ├── components/
        ├── contexts/
        ├── pages/
        └── services/
```

## 🎨 Screenshots

### Dashboard
- Visualização de estatísticas
- Taxa de conclusão
- Tarefas por prioridade

### Tarefas
- Lista com filtros
- Criação e edição via modal
- Status e prioridades coloridos

### Categorias
- Cards coloridos
- Contador de tarefas

## 👤 Autor

Desenvolvido por Eduardo Santos

## 📄 Licença

Este projeto está sob a licença MIT.
