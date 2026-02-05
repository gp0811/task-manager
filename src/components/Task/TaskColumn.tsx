import React, { useState } from 'react';
import { TaskStatus } from '../../lib/types';
import TaskInput from './TaskInput';
import { useTasks } from '../../context/TaskContext';
import TaskCard from './TaskCard';

interface TaskColumnProps {
    status: TaskStatus;
    title: string;
    icon?: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, status, icon }) => {
    const { tasks, updateTaskStatus } = useTasks();
    const [isOver,setIsOver] = useState(false);
    const columnTasks = tasks.filter((t) => t.status === status);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      updateTaskStatus(taskId, status);
    }
  };

    return <div className='bg-white flex-1 min-w-[300px] px-4 py-4 border rounded' onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}>
        <div className="pb-4 flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={icon} alt="" width="20px" height="20px" />
                <h1>{title}</h1>
            </div>
        </div>
        {status === 'todo' && (
            <TaskInput status={status} />
        )}
        <div className="flex flex-col gap-2">
        {columnTasks.length > 0 ? (
          columnTasks.map((task) => <TaskCard key={task.id} task={task} />
        )
        ) : (
          <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg">
            <p className="text-xs text-slate-400">{isOver ? "Drop here!" : "No tasks"}</p>
          </div>
        )}
      </div>
    </div>
}

export default TaskColumn;