import { ITodo } from '../../types/todo.model';
import { TodoItem } from '../TodoItem/TodoItem';
import { STodoList } from './STodoList.styles';

interface TodoListProps {
    todos: ITodo[];
    filter: string;
    deleteTodo: (id: string) => void;
    toggleTodoComplete: (id: string) => void;
    updateTodoTitle: (id: string, newTitle: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    deleteTodo,
    toggleTodoComplete,
    updateTodoTitle,
    filter,
}) => {
    const getTitle = () => {
        if (filter === 'completed') {
            return `${todos.length} completed tasks`;
        } else {
            return `${todos.length} tasks remaining`;
        }
    };

    const title = todos.length === 0 ? 'Add your tasks' : getTitle();

    return (
        <div>
            <STodoList>
                <h3>{title}</h3>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onToggle={toggleTodoComplete}
                        onSave={updateTodoTitle}
                    />
                ))}
            </STodoList>
        </div>
    );
};
