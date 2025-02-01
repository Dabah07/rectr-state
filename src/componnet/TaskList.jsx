import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask, toggleComplete }) {
  return (
   <>
  <section>
 
<h2>Task List</h2>
  <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
    </section></>
  );
}

export default TaskList;