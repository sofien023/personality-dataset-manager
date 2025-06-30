import React, { useState } from 'react';
import './styles/RecordForm.css';
import PagerForm from './components/PagerForm.jsx';
import { RecordInputList } from './Inputs.jsx'; // Assuming this file exports the input components

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
    const [currentPage, setCurrentPage] = useState(0);

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
        //console.log('Form submitted:', form);
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
        <PagerForm pagesNumber={RecordInputList.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}

                    />
        <div>
        <form onSubmit={handleSubmit}>
            {RecordInputList[currentPage].src(form, handleChange)}
            
            {/* max values should be brought up from the database */}
            {/* TODO: Construct an api call that does that */}
            <button type="submit">Submit</button>
        </form></div></div></div></>
    );
};

export default RecordForm;