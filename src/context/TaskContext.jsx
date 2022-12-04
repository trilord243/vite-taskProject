import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTittle, taskDescription) {
    setTasks([
      ...tasks,
      {
        tittle: taskTittle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  }
  function deleteTask(taskid) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskid));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
