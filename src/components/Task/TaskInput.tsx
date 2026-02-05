import React, { useState } from 'react';
import { TaskStatus } from '../../lib/types';
import { useTasks } from '../../context/TaskContext';

interface TaskInputProps {
  status: TaskStatus;
}

const TaskInput: React.FC<TaskInputProps> = ({ status }) => {
  const [title, setTitle] = useState('');
  const {addTask} = useTasks();

  const handleAddTask = () => {
    if (!title.trim()) return;
    addTask(title,status);
    setTitle('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="relative group mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        className="w-full bg-slate-200 text-slate-900 placeholder-slate-500 text-sm px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-grey-900 focus:bg-grey-700 transition-all pr-10"
      />
      <button
        onClick={handleAddTask}
        className="absolute right-2 -top-1 text-3xl p-1 text-slate-400 hover:text-slate-900 transition-colors"
        aria-label="Add task"
      >
        +
      </button>
    </div>
  );
};

export default TaskInput;