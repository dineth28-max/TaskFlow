import { FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';

function TaskItem({ task, onDelete }) {
    const hasDeadline = task.deadline && !isNaN(new Date(task.deadline).getTime());
    const deadlineDate = hasDeadline ? new Date(task.deadline).toLocaleDateString() : '';
    const deadlineTime = hasDeadline ? new Date(task.deadline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

    return (
        <div className='task glass task-row'>
            <div className='task-col-title' title={task.title}>
                {task.title}
            </div>

            {hasDeadline ? (
                <>
                    <div className='task-col-date'>
                        <FaCalendarAlt /> {deadlineDate}
                    </div>
                    <div className='task-col-time'>
                        <FaClock /> {deadlineTime}
                    </div>
                </>
            ) : (
                <>
                    <div className='task-col-empty'>-</div>
                    <div className='task-col-empty'>-</div>
                </>
            )}

            <button onClick={() => onDelete(task._id)} className='btn-delete'>
                <FaTimes />
            </button>
        </div>
    );
}

export default TaskItem;
