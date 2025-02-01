import React,{useState} from "react";

function TaskItem({ task, editTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { ...task, name, description });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`p-4 mb-2 border ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mr-2"
          />
        </>
      ) : (
        <>
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through' : ''}`}>{task.name}</h3>
          <p className={`${task.completed ? 'line-through' : ''}`}>{task.description}</p>
        </>
      )}
      <button onClick={() => toggleComplete(task.id)} className="bg-yellow-500 text-white p-2 mr-2">
        {task.completed ? 'nome' : 'done'}
      </button>
      <button onClick={handleEdit} className="bg-blue-500 text-white p-2 mr-2">
        {isEditing ? 'sav' : 'live'}
      </button>
      <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-2">
        delit
      </button>
    </div>
  );
}

export default TaskItem;