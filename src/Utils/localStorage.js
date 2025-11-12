const STORAGE_KEY = "taskDashboard_tasks";

// Load tasks from localStorage
export const loadTasks = () => {
  try {
    const tasksJSON = localStorage.getItem(STORAGE_KEY);
    return tasksJSON ? JSON.parse(tasksJSON) : [];
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return [];
  }
};

// Save tasks to localStorage
export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

// Clear all tasks (optional - for future use)
export const clearAllTasks = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing tasks from localStorage:", error);
  }
};
