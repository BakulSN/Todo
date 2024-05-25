import { Filter } from '../../types/enum.modal';
import { ITodo } from '../../types/todo.model';
import { TodoItem } from '../TodoItem/TodoItem';
import { STodoList } from './STodoList.styles';

interface TodoListProps {
    todos: ITodo[];
    filter: Filter;
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
        if (todos.length === 0) return 'Add your tasks';

        if (filter === Filter.Completed) {
            return `${todos.length} completed tasks`;
        } else {
            return `${todos.length} tasks remaining`;
        }
    };

    return (
        <div>
            <STodoList>
                <h3>{getTitle()}</h3>
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
