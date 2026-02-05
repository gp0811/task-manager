import TaskColumn from './TaskColumn';
import todoIcon from '../../assets/images/todo.svg';
import inProgressIcon from '../../assets/images/in-progress.svg';
import done from '../../assets/images/done.svg';

const TaskBoard = () => {
    return <div className='flex flex-wrap lg:flex-nowrap gap-6'>
        <TaskColumn title="To Do" status="todo" icon={todoIcon} />
        <TaskColumn title="In Progress" status="in-progress" icon={inProgressIcon} />
        <TaskColumn title="Done" status="done" icon={done} />
    </div>;
}

export default TaskBoard;