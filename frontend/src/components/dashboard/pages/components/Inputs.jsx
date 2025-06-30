export const RecordInputList = [
    {
        key: 1,
        name: 'drained_after_socializing',
        src: (form, handleChange) => (
            <label>
                Drained After Socializing:
                <input
                    type="checkbox"
                    name="drained_after_socializing"
                    checked={form.drained_after_socializing}
                    onChange={handleChange}
                />
            </label>
        )
    },
    {
        key: 2,
        name: 'friends_circle_size',
        src: (form, handleChange) => (
            <label>
                Friends Circle Size:
                <input
                    type="range"
                    name="friends_circle_size"
                    value={form.friends_circle_size}
                    onChange={handleChange}
                    min={0}
                    max={15}
                />
            </label>
        )
    },
    {
        key: 3,
        name: 'going_outside',
        src: (form, handleChange) => (
            <label>
                Going Outside (per week):
                <input
                    type="range"
                    name="going_outside"
                    value={form.going_outside}
                    onChange={handleChange}
                    min={0}
                    max={7}
                />
            </label>
        )
    },
    {
        key: 4,
        name: 'post_frequency',
        src: (form, handleChange) => (
            <label>
                Post Frequency (per week):
                <input
                    type="range"
                    name="post_frequency"
                    value={form.post_frequency}
                    onChange={handleChange}
                    min={0}
                    max={10}
                />
            </label>
        )
    },
    {
        key: 5,
        name: 'social_event_attendance',
        src: (form, handleChange) => (
            <label>
                Social Event Attendance (per month):
                <input
                    type="range"
                    name="social_event_attendance"
                    value={form.social_event_attendance}
                    onChange={handleChange}
                    min={0}
                    max={10}
                />
            </label>
        )
    },
    {
        key: 6,
        name: 'stage_fear',
        src: (form, handleChange) => (
            <label>
                Stage Fear:
                <input
                    type="checkbox"
                    name="stage_fear"
                    checked={form.stage_fear}
                    onChange={handleChange}
                />
            </label>
        )
    },
    {
        key: 7,
        name: 'time_spent_alone',
        src: (form, handleChange) => (
            <label>
                Time Spent Alone (hours per week):
                <input
                    type="range"
                    name="time_spent_alone"
                    value={form.time_spent_alone}
                    onChange={handleChange}
                    min={0}
                    max={11}
                />
            </label>
        )
    }
]