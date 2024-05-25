import { SApp } from './assets/styles/app.styles';
import { Navbar } from './components';
import { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { ITodo } from './types/todo.model';
import { useEffect, useState } from 'react';
import { Filter } from './types/enum.modal';

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState<Filter>(Filter.All);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo: ITodo) => {
        setTodos([...todos, todo]);
    };

    const updateTodoTitle = (id: string, newTitle: string) => {
        const updateTodos = todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo));
        setTodos(updateTodos);
    };

    const deleteTodo = (id: string) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos);
    };

    const toggleTodoComplete = (id: string) => {
        const updateTodos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
        setTodos(updateTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === Filter.Active) {
            return !todo.completed;
        } else if (filter === Filter.Completed) {
            return todo.completed;
        } else {
            return true;
        }
    });

    const showTasks = (filterTasks: Filter) => {
        setFilter(filterTasks);
    };

    return (
        <SApp>
            <h1>MY TASKS</h1>
            <TodoForm addTodo={addTodo} />
            <Navbar filter={filter} showTasks={showTasks} />
            <TodoList
                filter={filter}
                todos={filteredTodos}
                deleteTodo={deleteTodo}
                toggleTodoComplete={toggleTodoComplete}
                updateTodoTitle={updateTodoTitle}
            />
        </SApp>
    );
};

export default App;
