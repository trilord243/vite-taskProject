import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [tittle, settittle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(tittle, description);
    settittle("");
    setDescription("");
  };

  return (
    <div className="mx-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            settittle(e.target.value);
          }}
          value={tittle}
          autoFocus
        />
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu descipcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />

        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}
