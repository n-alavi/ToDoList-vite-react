import { useState } from "react";

// Define the type for the task object
interface Task {
  task: string;
  done: boolean;
}

// Define the props for the AddTask component
interface AddTaskProps {
  onAdd: (task: Task) => void; // Ensure this function is typed to accept a Task type
}

function AddTask({ onAdd }: AddTaskProps) {
  // Use AddTaskProps here)
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.length > 0) {
      onAdd({ task, done: false });
      setTask("");
    }
  };
  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </form>
  );
}
export default AddTask;
