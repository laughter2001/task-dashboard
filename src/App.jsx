import { useState, useEffect } from "react";
import AddTaskForm from "./Components/AddTaskForm";
import TaskList from "./Components/TaskList";
import EditTaskModal from "./Components/EditTaskModal";
import { loadTasks, saveTasks } from "./Utils/localStorage";

function App() {
  // Load tasks from localStorage on initial render
  const [tasks, setTasks] = useState(() => loadTasks());
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  // Open edit modal
  const startEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  // Save edited task
  const saveEditedTask = (editedTask) => {
    setTasks(
      tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    setEditingTask(null);
  };

  // Close edit modal
  const cancelEdit = () => {
    setEditingTask(null);
  };

  // Calculate stats
  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen bg-[#2b2b2b]">
      {/* Header */}
      <header className="bg-black text-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 11l2 2 4-4M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Task Dashboard</h1>
              <p className="text-sm text-gray-300">
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
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-800">Your Tasks</h2>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-bold text-white shadow-md">
                {tasks.length} total
              </span>
              {tasks.length > 0 && (
                <>
                  <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
                    {activeCount} active
                  </span>
                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                    {completedCount} done
                  </span>
                </>
              )}
            </div>
          </div>

          <TaskList
            tasks={tasks}
            onToggleComplete={toggleComplete}
            onDeleteTask={deleteTask}
            onEditTask={startEditTask}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </main>

      {/* Edit Modal */}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={saveEditedTask}
          onClose={cancelEdit}
        />
      )}
    </div>
  );
}

export default App;
