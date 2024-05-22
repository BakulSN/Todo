import { useState } from 'react';
import { ITodo } from '../../types/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { STodoForm } from './STodoForm.styles';

interface TodoFormProps {
    addTodo: (todo: ITodo) => void;
}
export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (value.trim() !== '') {
            const newTodo: ITodo = {
                id: uuidv4(),
                title: value.trim(),
                completed: false,
            };

            addTodo(newTodo);
            setValue('');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <STodoForm onSubmit={handleSubmit}>
            <input type='text' value={value} placeholder='Enter task' onChange={handleChange} />
            <button type='submit' disabled={value.trim() === ''}>
                Add
            </button>
        </STodoForm>
    );
};
