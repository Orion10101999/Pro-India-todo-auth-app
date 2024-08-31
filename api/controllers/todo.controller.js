
import Todo from '../models/todo.model.js'
const createTodo = async (req, res, next) => {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json({message : "todo created Sucessfully" ,todo});
    } catch (error) {
        next(error);
    }
};

const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();
        res.status(201).json({message : "Sucess" ,todos});
    } catch (error) {
        next(error)
    }
};

const getTodoById = async (req, res, next) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id});
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(201).json({message : "Sucess", todo});
            } catch (error) {
            next(error)    
            }
                };
                
                

const updateTodo = async (req, res) => {
    try {
        const { title, description , completed} = req.body;
        
        const todo = await Todo.findOneAndUpdate({ _id: req.params.id,
        },
            { title, description ,completed },
            { new: true }
    );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(201).json({message : "todo updated sucessfully",todo});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTodo = async (req, res , next) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(201).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        next(error)
    }
};


export { deleteTodo , updateTodo , getTodoById , getTodos , createTodo }