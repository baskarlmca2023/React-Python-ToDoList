# To-Do List Application

A simple To-Do List app built using **React.js** for the frontend, **Flask** for the backend, and **MongoDB Atlas** as the database. This app allows users to **add tasks** and **delete tasks**, storing data in MongoDB.

## Features
- Add new tasks
- Delete existing tasks
- Store data in **MongoDB Atlas**
- REST API using Flask
- React.js frontend with a clean UI

## Technologies Used
### Frontend
- React.js
- Tailwind CSS (for styling)
- Axios (for API requests)

### Backend
- Python
- Flask
- Flask-CORS
- MongoDB (Atlas)
- PyMongo

## Installation & Setup
### Prerequisites
Make sure you have **Node.js**, **Python**, and **MongoDB Atlas** set up.

### Clone the Repository
```sh
git clone https://github.com/yourusername/todolist-app.git
cd todolist-app
```

---
## Backend Setup (Flask)
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Create a **.env** file and add your MongoDB Atlas URI:
   ```sh
   MONGO_URI='mongodb://localhost:27017/Todolist'
   ```
5. Run the backend server:
   ```sh
   python app.py
   ```
   The backend will run at **http://localhost:5000**.

---
## Frontend Setup (React.js)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
   The frontend will run at **http://localhost:3000**.

---
## API Endpoints
### Base URL: `http://localhost:5000`

#### Get all tasks
```http
GET /todos
```
#### Add a new task
```http
POST /todos
```
**Body:**
```json
{
  "title": "New Task"
}
```
#### Delete a task
```http
DELETE /todos/{title}
```

---
## Project Structure
```
/todolist-app
│── /frontend (React.js frontend)
│── /backend (Flask backend)
│── README.md (Project documentation)
```

## Output Screenshot
Below is a screenshot of the working To-Do List application:


![To-Do List App Screenshot](React-Python-ToDoList/ToDolist/Screenshot_2025-02-18_103705.png)

## Future Improvements
- Edit tasks functionality
- User authentication (login/signup)
- Task completion status

## License
This project is open-source and available under the **MIT License**.

---
## Author
👤 **Your Name**  
🔗 [GitHub](https://github.com/baskarlmca2023)
