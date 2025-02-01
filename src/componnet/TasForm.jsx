import React,{useState} from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
     
      return;
    }
    addTask({ id: Date.now(), name, description, completed: false });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="nome job"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="nome job"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">new job</button>
    </form>
  );
}

export default TaskForm;