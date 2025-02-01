import React, { useState, useEffect } from 'react';
import TaskForm from './componnet/TasForm';
import TaskList from './componnet/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  //
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    if (window.confirm("are you sore")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <>
      <div className=" mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">list </h1>
        <p>ana chwiya we chatgpt chwiya t3awna makalah trawvasna .</p>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div></>
  );
}

export default App;