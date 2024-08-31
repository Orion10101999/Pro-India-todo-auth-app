import { useState, useEffect } from 'react';
import axios from 'axios';

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todo/showtodos');
      setTodos(response.data.todos);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  useEffect(() => {
    // Fetch todos initially
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo._id} className="mb-2 p-2 border rounded-md">
            <h3 className="font-semibold">{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodos;
