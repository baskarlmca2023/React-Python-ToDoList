// import React, { useState, useEffect } from 'react';
// import TodoItem from './components/TodoItem';
// import AddTodo from './components/AddTodo';
// import axios from 'axios';
// import './TodoList.css'; 

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/todos');
//       setTodos(response.data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   const addTodo = async (newTodo) => {
//     try {
//       await axios.post('http://localhost:5000/todos', newTodo);
//       fetchTodos(); // Refresh list
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   };

//   const deleteTodo = async (title) => {
//     try {
//       await axios.delete(`http://localhost:5000/todos/${title}`);
//       fetchTodos(); // Refresh list
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
//       <AddTodo addTodo={addTodo} />
//       {todos.map(todo => (
//         <TodoItem key={todo.title} todo={todo} deleteTodo={deleteTodo} />
//       ))}
//     </div>
//   );
// };

// export default TodoList;





import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import './TodoList.css'; // Import external CSS

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      await axios.post('http://localhost:5000/todos', newTodo);
      fetchTodos(); // Refresh list
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (title) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${title}`);
      fetchTodos(); // Refresh list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.title} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
