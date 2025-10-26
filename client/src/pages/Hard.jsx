import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hard.css';

export default function Hard() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTask, setEditedTask] = useState('');
    const navigate = useNavigate();

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks((prev) => [...prev, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTask(index) {
        setEditingIndex(index);
        setEditedTask(tasks[index]);
    }

    function saveTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = editedTask;
        setTasks(updatedTasks);
        setEditingIndex(null);
        setEditedTask('');
    }

    function viewTaskDetail(index) {
        navigate(`/hard/${index}`, { state: { task: tasks[index] } });
    }

    return (
        <div className="hard-container">
            <h1 class="title">To-Do List</h1>
            <p class="directions">Enter in a task.</p>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol className="list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTask}
                                    onChange={(e) =>
                                        setEditedTask(e.target.value)
                                    }
                                />
                                <button
                                    className="save-button"
                                    onClick={() => saveTask(index)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <span
                                    className="text"
                                    onClick={() => viewTaskDetail(index)}
                                    style={{ cursor: 'pointer' }}>
                                    {task}
                                </span>

                                <button
                                    className="edit-button"
                                    onClick={() => editTask(index)}>
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
}
