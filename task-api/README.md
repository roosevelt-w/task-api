# Tasks API

Simple backend API built with Express and PostgreSQL.

## API Endpoints

### Health
- GET /health  
Returns server status

### Tasks
- GET /tasks  
Returns all tasks

- POST /tasks  
Body:
{
  "title": "Task title"
}

- PUT /tasks/:id  
Body (partial updates allowed):
{
  "title": "Updated title",
  "completed": true
}

- DELETE /tasks/:id  
Deletes a task by ID
