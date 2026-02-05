import React, { useState } from 'react';
import { TaskStatus } from '../../lib/types';

interface TaskColumnProps {
    status: TaskStatus;
    title: string;
    icon?: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, status, icon }) => {

    return <div className='bg-white flex-1 min-w-[300px] px-4 py-4 border rounded'>
        <div className="pb-4 flex justify-between">
            <div className='flex items-center gap-2'>
                <img src={icon} alt="" width="20px" height="20px" />
                <h1>{title}</h1>
            </div>
        </div>
        <div className="flex flex-col gap-2">
        Tasks
      </div>
    </div>
}

export default TaskColumn;