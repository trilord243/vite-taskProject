import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-3xl text-white font-bold text-center">
        No hay tareas aun{" "}
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((tasks) => (
        <TaskCard key={tasks.id} tasks={tasks} />
      ))}
    </div>
  );
}

export default TaskList;
