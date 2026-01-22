## API Endpoints

### Health
- GET /health

### Tasks
- GET /tasks
- POST /tasks  
  Body: { "title": "Task title" }

- PUT /tasks/:id  
  Body: { "title"?: "Updated title", "completed"?: true/false }

- DELETE /tasks/:id

