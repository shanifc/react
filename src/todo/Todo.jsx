import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {
    const [task, setTask] = useState(" ");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() === " ") return;
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t)
        );
    };

    const deletTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return (
        <div className='todo-container'>
            <h2>Todo App</h2>

            <div className='input-row'>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            <ul className='task-list'>
                {tasks.map((t) => (
                    <li key={t.id} className={t.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(t.id)}>{t.text}</span>
                        <button onClick={() => deletTask(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
