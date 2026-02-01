import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem'; // We will create this
import taskService from '../features/tasks/taskService';

function Dashboard() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            fetchTasks();
        }
    }, [user, navigate]);

    const fetchTasks = async () => {
        if (user) {
            const data = await taskService.getTasks(user.token);
            setTasks(data);
        }
    };

    const onTaskAdded = (task) => {
        setTasks([...tasks, task]);
    };

    const onTaskDeleted = async (id) => {
        await taskService.deleteTask(id, user.token);
        setTasks(tasks.filter((task) => task._id !== id));
    }

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.name}</h1>
                <p>Tasks Dashboard</p>
            </section>

            <TaskForm onTaskAdded={onTaskAdded} />

            <section className='content'>
                {tasks.length > 0 ? (
                    <div className='tasks' style={{ display: 'grid', gap: '10px' }}>
                        {tasks.map((task) => (
                            <TaskItem key={task._id} task={task} onDelete={onTaskDeleted} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any tasks</h3>
                )}
            </section>
        </>
    );
}

export default Dashboard;
