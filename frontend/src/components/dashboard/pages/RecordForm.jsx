import React, { useState } from 'react';
import './styles/RecordForm.css';

const initialState = {
    drained_after_socializing: false,
    friends_circle_size: 0,
    going_outside: 0,
    personality: 'INTROVERT',
    post_frequency: 0,
    social_event_attendance: 0,
    stage_fear: false,
    time_spent_alone: 0,
};

const RecordForm = ({ setPage }) => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]:
                type === 'checkbox'
                    ? checked
                    : name === 'friends_circle_size' ||
                        name === 'going_outside' ||
                        name === 'post_frequency' ||
                        name === 'social_event_attendance' ||
                        name === 'time_spent_alone'
                    ? parseInt(value, 10)
                    : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO: handle form submission logic here
        setPage('main');
    };

    return (
        <>
        <div>
        <div className="m-[3rem]" style={{
            maxWidth: '100%',
            padding: '2rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        <h2>Record Your Social Behavior</h2>
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Drained After Socializing:
                <input
                    type="checkbox"
                    name="drained_after_socializing"
                    checked={form.drained_after_socializing}
                    onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Friends Circle Size:
                <input
                    type="number"
                    name="friends_circle_size"
                    value={form.friends_circle_size}
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <br />

            <label>
                Going Outside (per week):
                <input
                    type="number"
                    name="going_outside"
                    value={form.going_outside}
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <br />

            <label>
                Personality:
                <select
                    name="personality"
                    value={form.personality}
                    onChange={handleChange}
                >
                    <option value="INTROVERT">INTROVERT</option>
                    <option value="EXTROVERT">EXTROVERT</option>
                </select>
            </label>
            <br />

            <label>
                Post Frequency (per week):
                <input
                    type="number"
                    name="post_frequency"
                    value={form.post_frequency}
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <br />

            <label>
                Social Event Attendance (per month):
                <input
                    type="number"
                    name="social_event_attendance"
                    value={form.social_event_attendance}
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <br />

            <label>
                Stage Fear:</label>
                <input
                    type="checkbox"
                    name="stage_fear"
                    checked={form.stage_fear}
                    onChange={handleChange}
                />
            <br />

            <label>
                Time Spent Alone (hours per week):
                <input
                    type="number"
                    name="time_spent_alone"
                    value={form.time_spent_alone}
                    onChange={handleChange}
                    min={0}
                />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form></div></div></div></>
    );
};

export default RecordForm;