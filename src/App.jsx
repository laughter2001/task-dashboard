import { useState } from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4x1 mx-auto px-4 py-6">
            <h1 className="text-3x1 font-bold text-gray-900">Task Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage Your Tasks Effieciently</p>
          </div>
        </header>

        {/* main content */}
        <main className="max-w-4x1 mx-auto px-4 py-8">
          <div className="bg-white rounded-lg  shadow p-6">
            <h2 className="text-2 font-semibold text-gray-800 mb-4">
              Your Tasks
            </h2>
            <p className="text-gray-500">Tasks will appear here...</p>
          </div>
        </main>
      </div>
    </>
  );
}
export default App;
