import { useState } from "react";
import { X, Save } from "lucide-react";

function EditTaskModal({ task, onSave, onClose }) {
  const [editedText, setEditedText] = useState(task.text);
  const [editedCategory, setEditedCategory] = useState(task.category);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editedText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    onSave({
      ...task,
      text: editedText,
      category: editedCategory,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-800">Edit Task</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Input */}
          <div>
            <label
              htmlFor="edit-task"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Task Description
            </label>
            <input
              type="text"
              id="edit-task"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-800 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
              autoFocus
            />
          </div>

          {/* Category Selector */}
          <div>
            <label
              htmlFor="edit-category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>
            <select
              id="edit-category"
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
              className="w-full cursor-pointer rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-800 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
            >
              <option value="personal">🏠 Personal</option>
              <option value="work">💼 Work</option>
              <option value="shopping">🛒 Shopping</option>
              <option value="health">❤️ Health</option>
              <option value="other">📌 Other</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border-2 border-slate-200 px-4 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-blue-800"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;
