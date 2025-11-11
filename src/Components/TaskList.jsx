import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 py-20 text-center">
        <div className="mb-4 text-7xl">📋</div>
        <h3 className="mb-2 text-xl font-bold text-slate-700">No tasks yet</h3>
        <p className="text-slate-500">
          Add your first task above to get started!
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Stay organized and productive 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
