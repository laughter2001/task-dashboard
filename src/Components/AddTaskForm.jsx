import { useState } from "react";
import { Plus } from "lucide-react";

function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("personal");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      category: category,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setTaskText("");
    setCategory("personal");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 rounded-xl bg-white p-6 shadow-lg"
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-800">Add New Task</h2>

      <div className="space-y-5">
        {/* Task Input */}
        <div>
          <label
            htmlFor="task"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            What needs to be done?
          </label>
          <input
            type="text"
            id="task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="e.g., Buy groceries, Finish project..."
            className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-800 transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* Category Selector */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full cursor-pointer rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-800 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <option value="personal">🏠 Personal</option>
            <option value="work">💼 Work</option>
            <option value="shopping">🛒 Shopping</option>
            <option value="health">❤️ Health</option>
            <option value="other">📌 Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl active:scale-95"
        >
          <Plus
            size={20}
            className="transition-transform duration-200 group-hover:rotate-90"
          />
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm;
