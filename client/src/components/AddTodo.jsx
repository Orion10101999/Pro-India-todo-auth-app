import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTodo = {
            title,
            description,
            status,
        };

        try {
            const response = await axios.post('/api/todo/create', newTodo);
            
            toast.success(response?.data?.message)
            
            // Clear form fields after successful submission
            setTitle('');
            setDescription('');
            setStatus('To Do');
        } catch (error) {
            toast.error(error.message)
            console.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
            <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
        
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
