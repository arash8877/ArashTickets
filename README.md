# ArashTickets

ArashTickets is a full-stack ticket management system built with ASP.NET Core 9 (backend) and Next.js 15 (frontend). It demonstrates modern web development best practices, including RESTful APIs, React Query for state management, AutoMapper for DTO mapping, and a responsive UI with Tailwind CSS.

---

## 🚀 Tech Stack

**Backend:**

- ASP.NET Core 9
- Entity Framework Core (SQL Server)
- AutoMapper
- Swagger/OpenAPI

**Frontend:**

- Next.js 15 (App Router)
- TypeScript
- React 19
- TanStack React Query
- Tailwind CSS 4
- React Hook Form

---

## ✨ Features

- Full CRUD for tickets (Create, Read, Update, Delete)
- Responsive, modern UI
- Real-time search and filtering
- Form validation and user feedback
- API documentation with Swagger
- Type-safe API and UI
- Clean separation of concerns (DTOs, hooks, services)

---

## 🛠️ Setup Instructions

### 1. Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download)
- [Node.js 20+](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (local or Docker)

### 2. Clone the Repository

```bash
git clone https://github.com/arash8877/ArashTickets.git
cd ArashTickets
```

### 3. Backend Setup

```bash
cd backend
# Update appsettings.json with your SQL Server connection string if needed
dotnet ef database update   # Apply migrations
dotnet run                 # Start backend (default: http://localhost:5086)
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev                # Start frontend (default: http://localhost:3000)
```

---

## 🧑‍💻 Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Access API docs at [http://localhost:5086/swagger](http://localhost:5086/swagger).
3. Create, view, edit, and delete tickets from the UI.

---

## 📦 Folder Structure

```
ArashTickets/
├── backend/      # ASP.NET Core API
│   ├── controllers/
│   ├── core/
│   ├── Migrations/
│   └── ...
├── frontend/     # Next.js app
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── ...
└── README.md
```

---

## 📚 API Endpoints (Summary)

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| GET    | /api/tickets           | List all tickets  |
| GET    | /api/tickets/{id}      | Get ticket by ID  |
| POST   | /api/tickets/create    | Create new ticket |
| PUT    | /api/tickets/edit/{id} | Update ticket     |
| DELETE | /api/tickets/{id}      | Delete ticket     |

---

## 📝 License

MIT. See [LICENSE](LICENSE) for details.
