// src/components/tasks/TaskCard.tsx
import React from 'react';
import { Task } from '../../lib/types';
import deleteIcon from "../../assets/images/delete.svg";
import doneTick from "../../assets/images/done-tick.svg";

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="group bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all mb-3">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <button
                        className={`mt-1 transition-colors ${task.status === 'done' ? 'text-green-500' :
                            task.status === 'in-progress' ? 'text-blue-500' : 'text-slate-300 hover:text-blue-500'
                            }`}
                        title="Advance status"
                    >
                        {task.status !== 'done' ? <p className={`w-4 h-4 border-2  rounded border-grey-400 hover:border-blue-400`}></p>
                            : <img src={doneTick} width="20px" height="20px" />
                        }
                    </button>

                    <div>
                        <h3 className={`font-medium text-sm ${task.status === 'done' ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}>
                            {task.title}
                        </h3>
                        {task.description && (
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{task.description}</p>
                        )}

                        <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-400">
                            <span>{new Date(task.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                {/* Delete Button */}
                <button
                    onClick={() => {
                        if (window.confirm('Delete this task?')) console.log('delete task');
                    }}
                    className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <img src={deleteIcon} alt="" width="20px" height="20px" />
                </button>
            </div>
        </div>
    );
};

export default TaskCard;