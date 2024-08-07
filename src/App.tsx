import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";

// Define a type for your task
interface Task {
  id: number;
  done: boolean;
  // include other properties you might have in your task, e.g. text, title, etc.
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]); // Specify the state as an array of Task

  const handleComplete = (id: number) => {
    // Explicit type for id
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, done: true } : task))
    );
  };

  const handleRemove = (id: number) => {
    // Explicit type for id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleAdd = (task: Omit<Task, "id">) => {
    // Type for task without id
    const newTask = { ...task, id: new Date().getTime(), done: false }; // Initialize done to false
    setTasks([...tasks, newTask]);
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>
        {/* add task */}
        <AddTask onAdd={handleAdd} />

        {/* tasks items */}
        {tasks
          .filter((task) => !task.done)
          .map((task, index) => (
            <TaskItem
              key={`task-${index}`}
              task={task}
              onComplete={handleComplete}
              onRemove={handleRemove}
            />
          ))}

        {/* separator */}
        <div className="w-full border border-blue-300"></div>

        {/* done tasks */}
        {tasks
          .filter((task) => task.done)
          .map((task, index) => (
            <TaskItem key={`task-${index}`} task={task} done />
          ))}

        {/* <ul className="divide-y divide-gray-200 px-4">
          <li className="py-4">
            <div className="flex items-center">
              <input
                id="todo1"
                name="todo1"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor="todo1" className="ml-3 block text-gray-900">
                <span className="text-lg font-medium">
                  Finish project proposal
                </span>
                <span className="text-sm font-light text-gray-500">
                  Due on 4/1/23
                </span>
              </label>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center">
              <input
                id="todo2"
                name="todo2"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor="todo2" className="ml-3 block text-gray-900">
                <span className="text-lg font-medium">Buy groceries</span>
                <span className="text-sm font-light text-gray-500">
                  Bananas, milk, bread
                </span>
              </label>
            </div>
          </li>

          <li className="py-4">
            <div className="flex items-center">
              <input
                id="todo3"
                name="todo3"
                type="checkbox"
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <label htmlFor="todo3" className="ml-3 block text-gray-900">
                <span className="text-lg font-medium">Go for a run</span>
                <span className="text-sm font-light text-gray-500">
                  3 miles
                </span>
              </label>
            </div>
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default App;
