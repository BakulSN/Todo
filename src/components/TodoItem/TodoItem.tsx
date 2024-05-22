import React from 'react';
import { useState } from 'react';
import { ITodo } from '../../types/todo.model';
import { STodoItem } from './STodoItem.styles';

interface TodoItemProps {
    todo: ITodo;
    onDelete: (id: string) => void;
    onToggle: (id: string) => void;
    onSave: (id: string, newTitle: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleToggle = () => {
        onToggle(todo.id);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditTitle(todo.title);
    };

    const handleSaveEdit = () => {
        if (editTitle.trim() !== '') {
            onSave(todo.id, editTitle);
            setIsEditing(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(event.target.value);
    };

    return (
        <div>
            {isEditing ? (
                <STodoItem>
                    <input type='text' value={editTitle} onChange={handleChange} placeholder='Enter text' />
                    <div>
                        <button onClick={handleSaveEdit} disabled={editTitle.trim() === ''}>
                            save
                        </button>
                        <button onClick={handleCancelEdit}>cancel</button>
                    </div>
                </STodoItem>
            ) : (
                <STodoItem>
                    <label>
                        <input type='checkbox' checked={todo.completed} onChange={handleToggle} />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                    </label>
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                </STodoItem>
            )}
        </div>
    );
};
