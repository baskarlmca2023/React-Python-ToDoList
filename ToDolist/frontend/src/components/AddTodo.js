// import React, { useState } from 'react';

// const AddTodo = ({ addTodo }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTodo({ title });
//     setTitle('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex mb-4">
//       <input
//         type="text"
//         className="flex-grow p-2 border border-gray-300 rounded-l"
//         placeholder="Add new todo..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button type="submit" className="px-4 bg-blue-500 text-white rounded-r">
//         Add
//       </button>
//     </form>
//   );
// };

// export default AddTodo;





// import React, { useState } from 'react';
// import './AddTodo.css';

// const AddTodo = ({ addTodo }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     addTodo({ title });
//     setTitle('');
//   };

//   return (
//     <form 
//       onSubmit={handleSubmit} 
//       className="flex items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
//     >
//       <input
//         type="text"
//         className="flex-grow px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
//         placeholder="Enter a task..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <button 
//         type="submit" 
//         className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all"
//       >
//         Add Task
//       </button>
//     </form>
//   );
// };

// export default AddTodo;





import React, { useState } from 'react';
import './AddTodo.css'; // Import external CSS

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        className="add-todo-input"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="add-todo-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
