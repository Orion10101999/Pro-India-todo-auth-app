import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editStatus, setEditStatus] = useState('To Do');

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todo/showtodos');
      setTodos(response.data.todos);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
      // Optional: Add user feedback for error
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/api/todo/${id}`);
      toast.success(response.data.message)
      fetchTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
      toast.error(error.message)
      // Optional: Add user feedback for error
    }
  };

  const startEditing = (todo) => {
    setEditingTodo(todo._id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditStatus(todo.status);
  };

  const saveTodo = async (id) => {
    try {
      
      const response = await axios.put(`/api/todo/${id}`, {
        title: editTitle,
        description: editDescription,
        status: editStatus,
      });
      toast.success(response.data.message)
      setEditingTodo(null);
      fetchTodos();
    } catch (error) {
      console.error('Failed to update todo:', error);
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 flex justify-center items-center mt-5">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="my-1 mx-5 p-5 border rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out bg-yellow-200"
          >
            {editingTodo === todo._id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="p-2 border rounded-md w-full"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="p-2 border rounded-md w-full"
                  rows="4"
                ></textarea>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="p-2 border rounded-md w-full"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => saveTodo(todo._id)}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingTodo(null)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold">{todo.title}</h3>
                <p>{todo.description}</p>
                <p>Status: {todo.status}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => startEditing(todo)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTodos;
