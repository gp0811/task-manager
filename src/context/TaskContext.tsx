import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Task, TaskStatus } from '../lib/types';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, status: TaskStatus) => void;
  updateTaskStatus: (id: string, newStatus: TaskStatus) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('tasks');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse tasks", e);
        }
      }
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (title: string, status: TaskStatus) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status,
      createdAt: new Date().toISOString(),
      description: ''
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTaskStatus = (id: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('use it in TaskProvider');
  }
  return context;
};