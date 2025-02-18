// import React from 'react';

// const TodoItem = ({ todo, deleteTodo }) => {
//   return (
//     <div className="flex justify-between items-center bg-gray-200 p-2 rounded mt-2">
//       <span>{todo.title}</span>
//       <button
//         className="bg-red-500 text-white px-2 rounded"
//         onClick={() => deleteTodo(todo.title)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default TodoItem;




import React from 'react';
import './TodoItem.css'; // Import external CSS

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-title">{todo.title}</span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.title)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
