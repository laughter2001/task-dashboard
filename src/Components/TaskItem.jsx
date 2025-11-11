import { Check, Trash2, Edit2, Calendar, Clock } from "lucide-react";

function TaskItem({ task }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const categoryConfig = {
    personal: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      icon: "🏠",
    },
    work: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      icon: "💼",
    },
    shopping: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      icon: "🛒",
    },
    health: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      icon: "❤️",
    },
    other: {
      bg: "bg-slate-50",
      text: "text-slate-700",
      border: "border-slate-200",
      icon: "📌",
    },
  };

  const config = categoryConfig[task.category] || categoryConfig.other;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border-2 ${config.border} bg-white p-5 transition-all duration-200 hover:shadow-xl hover:-translate-y-1`}
    >
      {/* Colored accent bar */}
      <div className={`absolute left-0 top-0 h-full w-1 ${config.bg}`}></div>

      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
            task.completed
              ? "border-green-500 bg-green-500"
              : "border-slate-300 hover:border-blue-500 hover:bg-blue-50"
          }`}
        >
          {task.completed && <Check size={16} className="text-white" />}
        </button>

        {/* Task content */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-lg font-medium leading-snug ${
              task.completed ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {task.text}
          </p>

          {/* Meta info */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full ${config.bg} ${config.text} px-3 py-1 text-xs font-semibold`}
            >
              <span>{config.icon}</span>
              {task.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock size={12} />
              {formatDate(task.createdAt)}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            className="rounded-lg p-2 text-slate-400 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            title="Edit task"
          >
            <Edit2 size={18} />
          </button>
          <button
            className="rounded-lg p-2 text-slate-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
            title="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
