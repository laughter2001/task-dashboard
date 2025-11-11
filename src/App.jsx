import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-2xl shadow-lg">
              ✓
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Task Dashboard
              </h1>
              <p className="text-sm text-slate-600">
                Organize your life, one task at a time
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Add Task Form */}
        <AddTaskForm onAddTask={addTask} />

        {/* Tasks Display */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Your Tasks</h2>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-bold text-white shadow-md">
                {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
              </span>
            </div>
          </div>

          <TaskList tasks={tasks} />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
