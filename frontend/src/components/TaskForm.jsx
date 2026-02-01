import { useState } from 'react';
import { toast } from 'react-toastify';
import taskService from '../features/tasks/taskService';

function TaskForm({ onTaskAdded }) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return;

        if (!text) {
            toast.error('Please add a task title');
            return;
        }

        let deadline = null;
        if (date && time) {
            deadline = new Date(`${date}T${time}`);
        } else if (date) {
            // Default to start of day if only date
            deadline = new Date(date);
        }

        const newTask = await taskService.createTask({ title: text, deadline }, user.token);
        onTaskAdded(newTask);
        setText('');
        setDate('');
        setTime('');
    };

    return (
        <section className='form glass' style={{ padding: '25px', marginBottom: '30px' }}>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Task Details</label>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What needs to be done?"
                    />
                </div>

                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input
                            type='date'
                            name='date'
                            id='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='time'>Time</label>
                        <input
                            type='time'
                            name='time'
                            id='time'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>

                <div className='form-group'>
                    <button className='btn btn-primary' type='submit' style={{ width: '100%', marginTop: '10px' }}>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
}

export default TaskForm;
